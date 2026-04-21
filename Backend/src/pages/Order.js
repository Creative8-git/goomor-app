import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import ExcelJS from 'exceljs';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Papa from 'papaparse';
import ContactDetails from '../components/Order/ContactDetails';
import DeliveryOptions from '../components/Order/DeliveryOptions';
import FinalOrderConfirmation from '../components/Order/FinalOrderConfirmation';
import UploadFiles from '../components/Order/UploadFiles';
import OrderSummary from '../components/Order/OrderSummary';
import { getContrastColor } from '../components/Utils/Color';
import SingleColorDropdown from '../components/Order/SingleColorDropdown';
import useAuth from '../Hooks/useAuth';





const Order = () => {
  //order detail component start
  const [products, setProducts] = useState([]);
  const [units, setUnits] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [unit_id, setUnitId] = useState(''); // To store fetched products
  const [searchTerm, setSearchTerm] = useState(''); // To store the product input value
  const [filteredProducts, setFilteredProducts] = useState([]); // To store filtered product names
  const [selectedProduct, setSelectedProduct] = useState(null); // To store selected product

  const [colors, setColors] = useState([]); // To store available colors
  const [selectedColor, setSelectedColor] = useState(''); // To store the selected color
  const [productCode, setProductCode] = useState(''); // To store product code
  const [quantity, setQuantity] = useState(1); // To store quantity


  //Contact detail component start
  const { user } = useAuth(); // ✅ Get logged-in user

  const [contactDetails, setContactDetails] = useState({
    ContactName: '',
    Number: '',
    Email: user?.email || '', // ✅ Autofill email
    Reference: ''
  });

  useEffect(() => {
    if (user?.email) {
      setContactDetails((prev) => ({ ...prev, Email: user.email }));
    }
  }, [user]);
  //Contact detail component end


  //delivery component start
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [deliveryNote, setDeliveryNote] = useState(''); // State to store the delivery note
  const [pickupNote, setPickupNote] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  //delivery component end

  const [lengthValue, setLengthValue] = useState(''); // Store length value
  const [widthValue, setWidthValue] = useState(''); // Store width value
  const [heightValue, setHeightValue] = useState(''); // Store height value

  // Store full delivery address input
  // State to store delivery option

  const [lengthDisabled, setLengthDisabled] = useState(true); // Control whether length input is disabled
  const [widthDisabled, setWidthDisabled] = useState(true); // Control whether width input is disabled
  const [heightDisabled, setHeightDisabled] = useState(true); // Control whether height input is disabled
  const [colorDisabled, setColorDisabled] = useState(true); // Control whether color input is disabled
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [note, setNote] = useState(''); // State to store the note input
  // State to store the added products
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  // State to store the pickup note input


  const currentDate = new Date();


  // To store fetched units data
  const formattedDate = currentDate.toLocaleDateString('en-GB');


  const fuseOptions = {
    keys: [
      { name: 'product_name', weight: 0.7 },
      { name: 'product_code', weight: 0.5 },
      { name: 'customizable_specs', weight: 0.3 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
    matchAllTokens: true,
  };
  
  const fuse = new Fuse(products, fuseOptions);
  
  const performSearch = (input) => {
    if (!input.trim()) {
      setFilteredProducts([]);
      return;
    }
  
    const results = fuse.search(input);
    setFilteredProducts(results.map((result) => result.item));
  };
  


  // Delivery start
  const handleAddressChange = async (event) => {
    const address = event.target.value;
    setDeliveryAddress(address);

    if (address.length > 2) {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=286f8f9928c34b8e879e2717c8123f42`
        );
        setSuggestions(response.data.features || []);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setDeliveryAddress(suggestion.properties.formatted);
    setSuggestions([]);
  };
  // Delivery end

  const fetchProductColors = async (productId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products/${productId}/colors`
      );
      setColors(response.data);
    } catch (error) {
      console.error('Error fetching product colors:', error);
    }
  };

  // Fetch colors when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      fetchProductColors(selectedProduct.product_id);
    } else {
      setColors([]); // Reset colors if no product is selected
    }
  }, [selectedProduct]);


  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch(searchTerm);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  const handleProductSelect = (productName) => {
    const result = products.find((p) => p.product_name === productName);
  
    if (result) {
      console.log("Selected Product:", result);
      setSelectedProduct(result);
      setProductCode(result.product_code || 'N/A');
      setColors(result.colors || []);
    } else {
      console.warn(`Product not found for name: ${productName}`);
      setSelectedProduct(null);
    }
  };
  




  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/units"); // Adjust endpoint as needed
        setUnits(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching units:', error);
      }
    };
    fetchUnits();
  }, []);




  const updateCustomizationFields = (product) => {
    setProductCode(product.product_code);
    setColors(product.colors || []);

    let customizableSpecs = product.customizable_specs || [];

    // Convert customizableSpecs to an array if it's not already
    if (typeof customizableSpecs === 'string') {
      try {
        customizableSpecs = JSON.parse(customizableSpecs);
      } catch (e) {
        console.error('Error parsing customizable_specs:', e);
        customizableSpecs = [];
      }
    }

    if (!Array.isArray(customizableSpecs)) {
      customizableSpecs = [];
    }

    // Log the specs to verify
    console.log('Parsed customizable specs:', customizableSpecs);

    // Convert all specs to lowercase to handle case sensitivity
    customizableSpecs = customizableSpecs.map(spec => spec.toLowerCase());

    // Update input disabled states
    setLengthDisabled(() => !customizableSpecs.includes('length'));
    setColorDisabled(() => !customizableSpecs.includes('color'));

    // Log after setting the state
    console.log('Length Disabled:', lengthDisabled, 'Color Disabled:', colorDisabled);
  };



  const resetCustomizationFields = (enableManualFields = false) => {
    setProductCode('');
    setColors([]);
    setLengthValue('');
    setWidthValue('');
    setHeightValue('');
    setSelectedColor('');

    // Control which fields should remain enabled based on the context
    setLengthDisabled(!enableManualFields);
    setColorDisabled(!enableManualFields);
  };

  const handleSearchProduct = (searchTerm, index) => {
    // Search for matching products using Fuse.js
    const results = fuse.search(searchTerm);
    const suggestions = results.map((result) => result.item);

    // Update the orderItems state with filtered suggestions for the current row
    const updatedItems = [...orderItems];
    updatedItems[index] = {
      ...updatedItems[index],
      filteredSuggestions: suggestions
    };
    setOrderItems(updatedItems);
  };

  const handleProductSelectRow = (productName, index) => {
    const results = fuse.search(productName);
    const product = results.length > 0 ? results[0].item : null;

    if (product) {
      const updatedItems = [...orderItems];
      const customizableSpecs = product.customizable_specs || [];

      updatedItems[index] = {
        ...updatedItems[index],
        productName: product.product_name,
        productCode: product.product_code,
        color: customizableSpecs.includes('color') ? updatedItems[index].color : '', // Clear if not customizable
        length: customizableSpecs.includes('length') ? updatedItems[index].length : '', // Clear if not customizable
        note: customizableSpecs.includes('note') ? updatedItems[index].note : '', // Clear if not customizable
        filteredSuggestions: [] // Clear suggestions after selection
      };

      setOrderItems(updatedItems);
    } else {
      console.warn(`Product not found for name: ${productName}`);
    }
  };






  // Fetch product data from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/all-products`);
  
        // ✅ Normalize API response
        const formattedProducts = response.data.map((product) => ({
          product_id: product.id || product.title.replace(/\s+/g, '-').toLowerCase(), // Ensure each product has an ID
          product_name: product.title, // Match expected frontend naming
          product_code: product.model || 'N/A', // Ensure product code exists
          colors: product.colors || [], // Provide default empty array
          customizable_specs: product.highlightDetails?.specifications || [],
        }));
  
        setProducts(formattedProducts);
        console.log("Normalized Products:", formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  
  




  // Update available colors, product code, and enable/disable specs fields when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      updateCustomizationFields(selectedProduct);
    } else {
      resetCustomizationFields();
    }
  }, [selectedProduct]);





  // Function to add the product to the table
  // Function to add the product to the table
  const addProductToTable = () => {
    if (!selectedProduct) {
      console.warn('No product selected to add to the table.');
      return;
    }

    // Extract relevant properties from the selectedProduct object
    const { product_name, product_code } = selectedProduct;

    const newProduct = {
      productName: product_name, // Use product_name instead of the entire product object
      productCode: product_code,
      color: selectedColor,
      quantity,
      length: lengthValue || '',
      width: widthValue || '',
      height: heightValue || '',
      note: note || '',
      unit_id: selectedProduct.unit_id,
    };

    // Add the new product to the orderItems array
    setOrderItems([...orderItems, newProduct]);

    // Clear only specific fields after adding the product
    setSearchTerm(''); // Reset search term for product input field
    // Clear selected color
    // Clear length value
    setQuantity(1);

    setNote('')

    // Keep other fields like productCode, quantity, width, height, and note unchanged
  };




  // Function to remove product from the table
  const removeProductFromTable = (index) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  // Function to handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity = newQuantity;
    setOrderItems(updatedItems);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  // Function to remove a file
  const removeFile = (fileIndex) => {
    const updatedFiles = uploadedFiles.filter((_, index) => index !== fileIndex);
    setUploadedFiles(updatedFiles);
  };

  // Function to handle the submission of the order
  const handleSubmitOrder = async () => {
    try {
      // Fetch the CSV file to get the template columns
      const response = await fetch('/Files/SalesInvoiceTemplate.csv');
      const csvText = await response.text();

      // Parse the CSV to get headers
      const parsedCSV = Papa.parse(csvText, { header: true, skipEmptyLines: true });
      const templateHeaders = parsedCSV.meta.fields;

      // Create a new Excel workbook and add a worksheet
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Order');

      // Define worksheet columns based on the template headers
      worksheet.columns = templateHeaders.map((header) => ({ header, key: header, width: 20 }));

      // Map form data to the template headers
      const contactName = document.getElementById('ContactName').value || '';
      const email = document.getElementById('Email').value || '';
      const reference = document.getElementById('Reference').value || '';
      const invoiceDate = formattedDate;
      const currentDate = new Date();
      const defaultDueDate = new Date(currentDate.setDate(currentDate.getDate() + 7)).toLocaleDateString('en-GB');
      const formattedPickupDate = pickupDate ? pickupDate.toLocaleDateString('en-GB') : '';
      const formattedDeliveryDate = deliveryDate ? deliveryDate.toLocaleDateString('en-GB') : '';
      const deliveryAddress = deliveryOption === 'delivery'
        ? `${document.getElementById('Street').value || ''}`
        : ''; // Leave blank if pickup



      // Header row with contact and address details
      const headerRowData = {
        '*ContactName': contactName,
        'EmailAddress': email,
        'Reference': reference,
        '*InvoiceDate': invoiceDate,
        '*DueDate': defaultDueDate,
        '*Description': deliveryOption === 'delivery' ? `Delivery address: ${deliveryAddress}\nDelivery date: ${formattedDeliveryDate}\nDelivery note: ${deliveryNote || 'N/A'} ` : `Pickup - ${formattedPickupDate}\nPickup note: ${pickupNote || 'N/A'}`, // Add delivery address or pickup note here
      };

      // Ensure all required headers are in the row data
      templateHeaders.forEach((header) => {
        if (!(header in headerRowData)) {
          headerRowData[header] = '';
        }
      });

      worksheet.addRow(headerRowData);

      // Group order items by product name and product code
      const groupedItems = orderItems.reduce((groups, item) => {
        const key = `${item.productName}-${item.productCode}`;
        if (!groups[key]) {
          groups[key] = {
            productName: item.productName,
            productCode: item.productCode,
            items: []
          };
        }
        groups[key].items.push(item);
        return groups;
      }, {});

      // Add each group as a single row in the worksheet
      Object.values(groupedItems).forEach((group) => {

        const getUnitNameForProduct = (unit_id) => {
          const unit = units.find((u) => u.unit_id === unit_id);
          console.log(unit);
          return unit ? unit.unit_name : '';
        };

        const descriptionText = (() => {
          // Define the product header once
          const productHeader = `${group.productName}`;

          // Group items by color and organize lengths under each color
          const colorGroups = Object.entries(group.items.reduce((acc, item) => {
            const unitName = getUnitNameForProduct(item.unit_id);
            console.log(unitName);
            if (!acc[item.color]) acc[item.color] = [`Color: ${item.color}`];
            // Add length and note if it exists
            acc[item.color].push(
              `${item.quantity}${item.length ? `x${item.length}` : ` ${getUnitNameForProduct(item.unit_id)}`}${item.note ? `\nNote: ${item.note}` : ''}`
            );
            return acc;
          }, {}));

          // Format each color group with appropriate line breaks
          const formattedGroups = colorGroups.map(([color, details]) => details.join('\n')).join('\n\n');

          // Combine the product header with the color groups, ensuring there’s no duplication
          return `${productHeader}\n\n${formattedGroups}`;
        })();





        // Calculate total quantity or length as required
        const totalQuantity = group.items.reduce((sum, item) => {
          if (item.length) {
            return sum + (parseFloat(item.length) * parseInt(item.quantity)) / 1000;
          } else {
            return sum + parseInt(item.quantity);
          }
        }, 0);

        // Construct the row data for Excel
        const productRowData = {
          'InventoryItemCode': group.productCode || '',
          '*Description': descriptionText,
          '*Quantity': totalQuantity.toFixed(2),
          'Length': group.items[0].length || '',
          'Width': group.items[0].width || '',
          'Height': group.items[0].height || '',
        };

        // Add the row to the worksheet
        const row = worksheet.addRow({
          ...Object.fromEntries(Object.keys(headerRowData).map((key) => [key, ''])),
          ...productRowData,
        });

        // Format the description cell for better readability
        const descriptionCell = row.getCell('*Description');
        descriptionCell.alignment = { wrapText: true, vertical: 'top' };
      });

      // Finalize and save the workbook
      const buffer = await workbook.csv.writeBuffer();
      const fileName = `${contactName}_${reference}_${email}_OrderDetails.csv`.replace(/[/\\?%*:|"<>]/g, '-');
      const file = new File([buffer], fileName, {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const emailData = new FormData();
      emailData.append('to', 'jason.dao@goomor.com.au');
      emailData.append('subject', 'New Order Submission');
      emailData.append('text', `Order details from:\nName: ${contactName}\nEmail: ${email}\nReference: ${reference}`);
      emailData.append('files', file);

      uploadedFiles.forEach((uploadedFile) => {
        emailData.append('files', uploadedFile);
      });

      await axios.post(process.env.REACT_APP_API_URL + "/send-email", emailData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Order submitted successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order.');
    }
  };

  const handleOpenConfirmation = () => {
    const contactName = document.getElementById('ContactName').value.trim();

    if (!contactName) {
      alert('Please enter a contact name before finalizing the order.');
      return;
    }

    setConfirmationOpen(true);
  };


  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmChange = (e) => {
    setIsConfirmed(e.target.checked);
  };


  return (
    <div className="container .bg-light px-5">
      <div className="container form_panel my-5 p-5 mx-auto" style={{ backgroundColor: '#F2F3F5', borderRadius: '15px' }}>
        <h1 className="text-center">Order form</h1>
        <div className="row align-items-start">



          {/* <div className="col-sm-9">
          <label>Due Date</label>
          <div>
            <DatePicker
              className="form-control"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Click to select a date"
              minDate={new Date(new Date().setDate(new Date().getDate() + 7))}
            />
            <small className="form-text text-danger m-1">
               * This only acts as an estimation, we will contact you for confirmation
            </small>
          </div>
        </div> */}


        </div>
        <h2>Contact detail</h2>
        <ContactDetails 
          contactDetails={contactDetails} 
          setContactDetails={setContactDetails} 
          user={user} // ✅ Pass user to ContactDetails
        />
        <h2 className="mt-3">Delivery Options</h2>
        <DeliveryOptions
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
          pickupDate={pickupDate}
          setPickupDate={setPickupDate}
          pickupNote={pickupNote}
          setPickupNote={setPickupNote}
          deliveryDate={deliveryDate}
          setDeliveryDate={setDeliveryDate}
          deliveryAddress={deliveryAddress}
          setDeliveryAddress={setDeliveryAddress}
          deliveryNote={deliveryNote}
          setDeliveryNote={setDeliveryNote}
          suggestions={suggestions}
          handleAddressChange={handleAddressChange}
          handleSuggestionClick={handleSuggestionClick}
        />
        <h2 className="mt-3">Order detail</h2>
        <div className="row">
          <div className="col-md-5 mt-2">
            <label htmlFor="search-input">Product search</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search for product name, code, or dimensions"
              id="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term for real-time filtering
              onBlur={(e) => handleProductSelect(e.target.value)} // Select product on blur
              list="product-list"
            />
            {/* Data list for displaying suggestions */}
            <datalist id="product-list">
              {filteredProducts.map((product) => (
                <option key={product.product_id} value={product.product_name} />
              ))}
            </datalist>
          </div>

          <div className="col-md-5 mt-2">
            <label htmlFor="product-input">Product name</label>
            <input
              type="text"
              className="form-control"
              placeholder="N/A"
              id="product-input"
              value={selectedProduct ? selectedProduct.product_name : 'N/A'} // Display selected product name or N/A
              disabled // Disable the input
            />
          </div>








          <div className="col-md-2 mt-2">
            <label htmlFor="quantity-input">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity-input"
              value={quantity} // Display the current quantity
              onChange={(e) => setQuantity(e.target.value)} // Update quantity when input changes
              min="1" // Ensure minimum quantity is 1
            />
          </div>
          <div className="col-md-2 mt-2">
            <label htmlFor="color-input">Product Color</label>
            <input
              type="text"
              className="form-control"
              id="color-input"
              value={selectedColor} // Display the selected color value
              onChange={(e) => setSelectedColor(e.target.value)} // Update the color value when input changes
              placeholder="Enter color"
            />
          </div>

          <div className="col-md-3 mt-2">
            <label htmlFor="length-input">Length</label>
            <input
              type="number"
              className="form-control"
              id="length-input"
              value={lengthValue} // Display the length value
              onChange={(e) => setLengthValue(e.target.value)} // Update length when input changes
              placeholder="Enter length (mm)"
            />
          </div>

          <div className="col-md-12 mt-2">
            <label htmlFor="note-input">Note</label>
            <input
              type="text"
              className="form-control"
              id="note-input"
              value={note} // Display the note value
              onChange={(e) => setNote(e.target.value)} // Update note when input changes
              placeholder="Any additional notes for this product"
            />
          </div>
        </div>

        {/* New Row for Length, Width, and Height */}
        <div className="row">


          {/* <div className="col-md-4 mt-2">
            <label htmlFor="width-input">Width</label>
            <input
              type="number"
              className="form-control"
              id="width-input"
              value={widthValue} // Display the width value
              onChange={(e) => setWidthValue(e.target.value)} // Update width when input changes
              disabled={widthDisabled} // Disable input if product does not allow width customization
              placeholder="mm"
            />
          </div>

          <div className="col-md-4 mt-2">
            <label htmlFor="height-input">Height</label>
            <input
              type="number"
              className="form-control"
              id="height-input"
              value={heightValue} // Display the height value
              onChange={(e) => setHeightValue(e.target.value)} // Update height when input changes
              disabled={heightDisabled} // Disable input if product does not allow height customization
              placeholder="mm"
            />
          </div> */}



          <div className="col-md-12 mt-3">
            <button className="btn btn-primary" onClick={addProductToTable}>
              Add Product
            </button>
          </div>

          {/* Table to Display Added Products */}
          <OrderSummary
            orderItems={orderItems}
            handleSearchProduct={handleSearchProduct}
            handleProductSelectRow={handleProductSelectRow}
            handleQuantityChange={handleQuantityChange}
            removeProductFromTable={removeProductFromTable}
          />

          <div className="mt-2">
            <UploadFiles
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />

          </div>

          <div className="col-md-12 mt-3 ">
            <button className="btn btn-primary mt-3 float-end" onClick={handleOpenConfirmation}>
              Finalize Order
            </button>
          </div>

        </div>
        {/* Confirmation Overlay Popup */}
        {isConfirmationOpen && (
          <FinalOrderConfirmation
            contactDetails={{
              name: document.getElementById('ContactName')?.value || '',
              email: document.getElementById('Email')?.value || '',
              phone: document.getElementById('Number')?.value || '',
              reference: document.getElementById('Reference')?.value || '',
            }}
            deliveryOption={deliveryOption}
            deliveryAddress={document.getElementById('Street')?.value || ''}
            orderItems={orderItems}
            uploadedFiles={uploadedFiles}
            isConfirmed={isConfirmed}
            handleConfirmChange={handleConfirmChange}
            handleCloseConfirmation={handleCloseConfirmation}
            handleSubmitOrder={handleSubmitOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Order;
