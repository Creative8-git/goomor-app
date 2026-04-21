import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../../utils/assetUrl';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const [filterSteps, setFilterSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredColors, setFilteredColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const keyMapping = {
    Finish: 'finishes',
    Thickness: 'thicknesses',
    Dimension: 'dimensions',
    Length: 'lengths',
    Color: 'colors',
  };

  useEffect(() => {
    if (product) {
      const steps = [];
      if (product.finishes?.length) steps.push('Finish');
      if (product.thicknesses?.length) steps.push('Thickness');
      if (product.dimensions?.length) steps.push('Dimension');
      if (product.lengths?.length) steps.push('Length');
      setFilterSteps(steps);
      setCurrentStep(0);
    }
  }, [product]);

  useEffect(() => {
    if (selectedFilters['Finish']) {
      const finishId = selectedFilters['Finish'];
      fetch(`/api/colors?product_id=${product.product_id}&finish_id=${finishId}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredColors(data);
        })
        .catch((err) => console.error('Error fetching colors:', err));
    } else {
      setFilteredColors([]);
    }
  }, [selectedFilters, product.product_id]);

  const handleFilterSelect = (step, value) => {
    if (step === 'Finish') {
      const selectedFinish = product.finishes.find((finish) => finish.name === value);
      if (selectedFinish) {
        setSelectedFilters((prev) => ({ ...prev, [step]: selectedFinish.id }));
      }
    } else {
      setSelectedFilters((prev) => ({ ...prev, [step]: value }));
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header row align-items-center">
          {/* Left Column: Product Image */}
          <div className="col-md-6 text-center">
            <div className="product-image-gallery">
              {product.image_urls.map((url, index) => (
                <img key={index} src={getAssetUrl(url)} alt={product.product_name} className="img-fluid modal-image" />
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="col-md-6 product-details-container">
            <h2 className="product-title">{product.product_name}</h2>
            <div className="product-info-container">
              <p><strong>Product Information:</strong></p>
              {product.description ? (
                <table className="product-info-table">
                  <tbody>
                    {product.description.split('\n').map((line, index) => {
                      const [key, value] = line.split(':');
                      return (
                        <tr key={index}>
                          <td className="product-info-key">{key.trim()}</td>
                          <td className="product-info-value">{value ? value.trim() : 'N/A'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p className="no-description">No product description available.</p>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="filter-color-section">
            <h4>Configure Your Product</h4>
            {filterSteps.map((step, index) => (
              <div key={step} className={`filter-step ${currentStep === index ? 'active' : ''}`}>
                <h5>{step}</h5>
                <div className="filter-buttons">
                  {product[keyMapping[step]]?.map((option, idx) => (
                    <button
                      key={idx}
                      className={`filter-button ${selectedFilters[step] === (option.id || option) ? 'selected' : ''}`}
                      onClick={() => handleFilterSelect(step, option.name || option)}
                    >
                      {option.name || option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {selectedFilters['Finish'] && (
              <div className="color-filter-container">
                {/* Left Column: Colors */}
                <div className="colors-column">
                  <h5>Colors:</h5>
                  {filteredColors.length > 0 ? (
                    <div className="color-swatch-grid">
                      {filteredColors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-swatch ${selectedColor?.name === color.name ? 'selected' : ''}`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          onClick={() => handleColorSelect(color)}
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <p>No color variations available for the selected finish</p>
                  )}
                </div>

                {/* Right Column: Circular Filter */}
                <div className="filter-column">
                  <div
                    className="color-swatch-large mt-3"
                    style={{
                      backgroundColor: selectedColor?.hex || '#f0f0f0',
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
