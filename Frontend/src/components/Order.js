import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import ExcelJS from 'exceljs';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Papa from 'papaparse';

const Order = () => {
  const [products, setProducts] = useState([]); // To store fetched products
  const [searchTerm, setSearchTerm] = useState(''); // To store the product input value
  const [filteredProducts, setFilteredProducts] = useState([]); // To store filtered product names
  const [selectedProduct, setSelectedProduct] = useState(null); // To store selected product
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [contactDetails, setContactDetails] = useState({});

  const [colors, setColors] = useState([]); // To store available colors
  const [selectedColor, setSelectedColor] = useState(''); // To store the selected color
  const [productCode, setProductCode] = useState(''); // To store product code
  const [quantity, setQuantity] = useState(1); // To store quantity
  const [unit_id, setUnitId] = useState('');

  const [lengthValue, setLengthValue] = useState(''); // Store length value
  const [widthValue, setWidthValue] = useState(''); // Store width value
  const [heightValue, setHeightValue] = useState(''); // Store height value
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState(''); // Store full delivery address input
  const [suggestions, setSuggestions] = useState([]); // State to store delivery option

  // Control whether length input is disabled
  const [widthDisabled, setWidthDisabled] = useState(true); // Control whether width input is disabled
  const [heightDisabled, setHeightDisabled] = useState(true); // Control whether height input is disabled
   // Control whether color input is disabled
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [note, setNote] = useState(''); // State to store the note input
  const [orderItems, setOrderItems] = useState([]); // State to store the added products
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [deliveryNote, setDeliveryNote] = useState(''); // State to store the delivery note
  const [pickupNote, setPickupNote] = useState(''); // State to store the pickup note input


  const currentDate = new Date();
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const [units, setUnits] = useState([]); // To store fetched units data
  const formattedDate = currentDate.toLocaleDateString('en-GB');

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isAuthenticated && user) {
        const token = await getAccessTokenSilently();
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContactDetails(response.data);
      }
    };
    fetchUserDetails();
  }, [isAuthenticated, user, getAccessTokenSilently]);
  

  const fuseOptions = {
    keys: [
      { name: 'product_name', weight: 0.7 },
      { name: 'product_code', weight: 0.5 },
      { name: 'customizable_specs', weight: 0.3 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
    matchAllTokens: true // Include match data in results to debug or review
  };

  const fuse = new Fuse(products, fuseOptions);

  const performSearch = (input) => {
    const keywords = input.trim().split(/\s+/); // Split search term by spaces
    const results = keywords
      .map(keyword => fuse.search(keyword)) // Search each keyword separately
      .flat() // Flatten the array of results
      .reduce((unique, item) => {
        // Remove duplicates based on product_id
        if (!unique.some(el => el.item.product_id === item.item.product_id)) {
          unique.push(item);
        }
        return unique;
      }, [])
      .sort((a, b) => a.score - b.score) // Sort by relevance score
      .slice(0, 1000); // Show top 1000 results

    setFilteredProducts(results.map(result => result.item));
  };

  const handleAddressChange = async (event) => {
    const address = event.target.value;
    setDeliveryAddress(address);

    if (address.length > 2) { // Only fetch suggestions after 3 characters
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=286f8f9928c34b8e879e2717c8123f42`);
        setSuggestions(response.data.features || []);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setDeliveryAddress(suggestion.properties.formatted); // Set selected suggestion
    setSuggestions([]); // Clear suggestions after selection
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch(searchTerm);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  const handleProductSelect = (productName) => {
    // Use Fuse.js to find the closest match for the product name
    const results = fuse.search(productName);
    const product = results.length > 0 ? results[0].item : null;

    if (product) {
        console.log('Selected Product:', product);
        setSelectedProduct(product);

        // Set the product code or provide a fallback if it's missing
        setProductCode(product.product_code || 'N/A');

        // Reset the color and length fields to an empty or placeholder value
        setSelectedColor(''); // Reset color
        setLengthValue(''); // Reset length

        // Update customization fields based on the selected product
        updateCustomizationFields(product);
    } else {
        console.warn(`Product not found for name: ${productName}`);
        setSelectedProduct(null);

        // Reset fields if the product is not found
        setProductCode('N/A');
        setSelectedColor(''); // Reset color
        setLengthValue(''); // Reset length
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
};




  const resetCustomizationFields = (enableManualFields = false) => {
    setProductCode('');
    setColors([]);
    setLengthValue('');
    setWidthValue('');
    setHeightValue('');
    setSelectedColor('');
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
        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/products"); // Update with your actual API endpoint
        setProducts(response.data);
        console.log(response.data);
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
      emailData.append('to', 'minh.trinh@goomor.com.au,jason.dao@goomor.com.au');
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
      <div className="container form_panel my-5 p-2 mx-auto ">
        <h1 className="text-center">Order form</h1>
        <div className="row align-items-start">
          <div className="col-sm-3">
            <label>Date order</label>
            <span>
              <div>
                <p>{formattedDate}</p>
              </div>
            </span>
          </div>


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
        <div className="row">
          <div className="col-md-6 mt-2">
            <label>Contact Name</label>
            <input className="form-control" id="ContactName" placeholder="Your preferred contact name" />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="phone">Enter your phone number:</label>
            <input className="form-control" type="tel" id="Number" name="phone" placeholder="Your contact number" />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="email">Enter your email:</label>
            <input className="form-control"  type="email" id="Email" name="Email" placeholder="Your contact email" />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="reference">Enter your Reference</label>
            <input className="form-control" id="Reference" name="Reference" placeholder="Your Reference code" />
          </div>
        </div>

        <h2 className="mt-3">Delivery Options</h2>
        <div className="row">
          <div className="col-md-6 mt-2">
            <input
              type="radio"
              id="pickup"
              name="deliveryOption"
              value="pickup"
              checked={deliveryOption === 'pickup'}
              onChange={() => setDeliveryOption('pickup')}
            />
            <label htmlFor="pickup" className="mx-1">Pickup</label>

            {/* Conditionally render the DatePicker if 'pickup' is selected */}
            {deliveryOption === 'pickup' && (
              <div className="row mt-3">
                <div className='col-md-6 mt-2'>
                <label>Pickup Date</label>
                <DatePicker
                  className="form-control mt-2"
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select pickup date"
                  minDate={new Date()} // Disable past dates
                />
              </div>
              <div className="col-md-12 mt-2">
    <label>Pickup Note</label>
    <small className="form-text text-danger">
      *Specify any special instructions for pickup or name, if applicable.
    </small>
    <input
      type="text"
      className="form-control mt-2"
      value={pickupNote}
      onChange={(e) => setPickupNote(e.target.value)}
      placeholder="Any special instructions for pickup"
    />
  </div>
              </div>
            )}
          </div>

          <div className="col-md-6 mt-2">
            <input
              type="radio"
              id="delivery"
              name="deliveryOption"
              value="delivery"
              checked={deliveryOption === 'delivery'}
              onChange={() => setDeliveryOption('delivery')}
            />
            <label htmlFor="delivery" className="ml-2">
              Delivery
            </label>
          </div>
        </div>

        {deliveryOption === 'delivery' && (
          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <label>Delivery Address</label>
              <input
                type="text"
                id="Street"
                className="form-control mt-2"
                placeholder="Enter your full delivery address"
                value={deliveryAddress}
                onChange={handleAddressChange}
              />
              {/* Display suggestions */}
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.properties.place_id} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion.properties.formatted}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-md-6 mt-2">
              <label>Delivery Date</label>
              <div className="mt-2">
              <DatePicker
                className="form-control"
                selected={deliveryDate}
                onChange={(date) => setDeliveryDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a delivery date"
                minDate={new Date()}
              /></div>
            </div>
            <div className="col-md-12 mt-2">
              <label>
                Delivery note 
              </label>
              <small className="form-text text-danger">
                *Where you want us to leave items and who to collect if applicable.
              </small>
              <input
                type="text"
                className="form-control mt-2"
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                placeholder="Specify any special instructions"
              />
            </div>

          </div>


        )}

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
    <label htmlFor="color-input">Product Color</label>
    <input
        type="text"
        className="form-control"
        id="color-input"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        placeholder="Enter your preferred color"
    />
</div>


          {/* <div className="col-md-6 mt-2">
            <label htmlFor="product-code-input">Product Code</label>
            <input
              type="text"
              className="form-control"
              id="product-code-input"
              value={productCode || 'N/A'} // Display 'N/A' if product code is missing
              readOnly // Make the input read-only
              style={{ backgroundColor: '#f9f9f9', color: '#333' }} // Styling to indicate the field is read-only
            />
          </div> */}


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
          <div className="col-md-3 mt-2">
    <label htmlFor="length-input">Length</label>
    <input
        type="number"
        className="form-control"
        id="length-input"
        value={lengthValue}
        onChange={(e) => setLengthValue(e.target.value)}
        placeholder="mm"
    />
</div>
          <div className="col-md-7 mt-2">
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
          <div className=" mt-5">
            <h2>Order Summary</h2>
            <div className="table-responsive mt-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Length</th>
                    {/* <th>Width</th>
                    <th>Height</th> */}
                    <th>Note</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      {/* Product Name with Searchable Input */}
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          list={`product-list-${index}`}
                          value={item.productName || ''}
                          onChange={(e) => {
                            const updatedItems = [...orderItems];
                            updatedItems[index].productName = e.target.value;
                            setOrderItems(updatedItems);
                            handleSearchProduct(e.target.value, index); // Search suggestions
                          }}
                          onBlur={(e) => handleProductSelectRow(e.target.value, index)}
                        />
                        <datalist id={`product-list-${index}`}>
                          {item.filteredSuggestions && item.filteredSuggestions.map((product) => (
                            <option key={product.product_id} value={product.product_name} />
                          ))}
                        </datalist>
                      </td>

                      {/* Product Code */}
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={item.productCode || 'N/A'}
                          readOnly
                        />
                      </td>

                      {/* Color Input (Always Enabled) */}
                      <td>
                        <input
                          type="text"
                          value={item.color || ''}
                          onChange={(e) => {
                            const updatedItems = [...orderItems];
                            updatedItems[index].color = e.target.value;
                            setOrderItems(updatedItems);
                          }}
                          className="form-control"
                          placeholder="Color"
                        />
                      </td>

                      {/* Quantity column */}
                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(index, e.target.value)}
                          className="form-control"
                        />
                      </td>

                      {/* Length Input (Always Enabled) */}
                      <td>
                        <input
                          type="number"
                          value={item.length || ''}
                          onChange={(e) => {
                            const updatedItems = [...orderItems];
                            updatedItems[index].length = e.target.value;
                            setOrderItems(updatedItems);
                          }}
                          className="form-control"
                          placeholder="Length (mm)"
                        />
                      </td>

                      {/* Width and Height columns */}
                      <td>{item.width || '-'}</td>
                      <td>{item.height || '-'}</td>

                      {/* Note Input (Always Enabled) */}
                      <td>
                        <input
                          type="text"
                          value={item.note || ''}
                          onChange={(e) => {
                            const updatedItems = [...orderItems];
                            updatedItems[index].note = e.target.value;
                            setOrderItems(updatedItems);
                          }}
                          className="form-control"
                          placeholder="Additional notes"
                        />
                      </td>

                      {/* Actions column for removing items */}
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeProductFromTable(index)}
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>




              </table>
            </div>
          </div>
          <div className="mt-2">
            <label>Upload Files</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="form-control mt-1"
            />
            <div className="mt-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="d-flex align-items-center">
                  <span>{file.name}</span>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => removeFile(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-12 mt-3 ">
            <button className="btn btn-primary mt-3 float-end" onClick={handleOpenConfirmation}>
              Finalize Order
            </button>
          </div>

        </div>
        {/* Confirmation Overlay Popup */}
        {isConfirmationOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Final Order Confirmation</h3>
              <div>
                <h5>Contact Details</h5>
                <p>Name: {document.getElementById('ContactName')?.value || ''}</p>
                <p>Email: {document.getElementById('Email')?.value || ''}</p>
                <p>Phone: {document.getElementById('Number')?.value || ''}</p>
                <p>Reference: {document.getElementById('Reference')?.value || ''}</p>
              </div>

              <div>
                <h5>Delivery Option</h5>
                <p>{deliveryOption === 'pickup' ? 'Pickup' : `Delivery to: ${document.getElementById('Street')?.value || ''}`}</p>
              </div>

              <div>
                <h5>Order Summary</h5>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}> {/* Scrollable container */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Code</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Length</th>
                        {/* <th>Width</th>
                        <th>Height</th> */}
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.productName}</td>
                          <td>{item.productCode}</td>
                          <td>{item.color || 'N/A'}</td>
                          <td>{item.quantity}</td>
                          {/* <td>{item.length || 'N/A'}</td>
                          <td>{item.width || 'N/A'}</td> */}
                          <td>{item.height || 'N/A'}</td>
                          <td>{item.note || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


              <div>
                <h5>Uploaded Files</h5>
                <ul>
                  {uploadedFiles.length > 0
                    ? uploadedFiles.map((file, index) => <li key={index}>{file.name}</li>)
                    : <p>No files uploaded.</p>}
                </ul>
              </div>

              {/* Confirmation Checkbox and Go Back button */}
              <div className="mt-3">
                <input type="checkbox" id="confirmCheckbox" checked={isConfirmed} onChange={handleConfirmChange} />
                <label htmlFor="confirmCheckbox" className="ml-2">I've confirmed my order</label>
              </div>
              <div className="mt-3">
                <button className="btn btn-secondary mr-2" onClick={handleCloseConfirmation}>
                  Go Back
                </button>
                <button className="btn btn-primary" disabled={!isConfirmed} onClick={handleSubmitOrder}>
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
