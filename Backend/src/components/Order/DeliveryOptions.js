import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
 // Include custom styles for the toggle switch

const DeliveryOptions = ({
  deliveryOption,
  setDeliveryOption,
  pickupDate,
  setPickupDate,
  pickupNote,
  setPickupNote,
  deliveryDate,
  setDeliveryDate,
  deliveryAddress,
  setDeliveryAddress,
  deliveryNote,
  setDeliveryNote,
  suggestions,
  handleAddressChange,
  handleSuggestionClick,
}) => {
  const handleToggle = () => {
    setDeliveryOption((prevOption) => (prevOption === 'pickup' ? 'delivery' : 'pickup'));
  };

  return (
    <div>
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <label className="form-label">Delivery Options</label>
          <div className="custom-toggle">
            <span className={deliveryOption === 'pickup' ? 'active' : ''}>Pickup</span>
            <div className="toggle-switch" onClick={handleToggle}>
              <div className={`toggle-thumb ${deliveryOption === 'delivery' ? 'delivery' : 'pickup'}`}></div>
            </div>
            <span className={deliveryOption === 'delivery' ? 'active' : ''}>Delivery</span>
          </div>
        </div>
      </div>

      {deliveryOption === 'pickup' && (
        <div className="row mt-3">
          <div className="col-md-3 mt-2">
            <label>Pickup Date</label>
            <DatePicker
              className="form-control mt-2"
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select pickup date"
              minDate={new Date(new Date().setDate(new Date().getDate() + 3))}
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
                minDate={new Date(new Date().setDate(new Date().getDate() + 3))}
              />
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <label>Delivery Note</label>
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
    </div>
  );
};

export default DeliveryOptions;
