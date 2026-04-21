import React from 'react';

const FinalOrderConfirmation = ({
  contactDetails,
  deliveryOption,
  deliveryAddress,
  orderItems,
  uploadedFiles,
  isConfirmed,
  handleConfirmChange,
  handleCloseConfirmation,
  handleSubmitOrder,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Final Order Confirmation</h3>
        <div>
          <h5>Contact Details</h5>
          <p>Name: {contactDetails.name || ''}</p>
          <p>Email: {contactDetails.email || ''}</p>
          <p>Phone: {contactDetails.phone || ''}</p>
          <p>Reference: {contactDetails.reference || ''}</p>
        </div>

        <div>
          <h5>Delivery Option</h5>
          <p>
            {deliveryOption === 'pickup'
              ? 'Pickup'
              : `Delivery to: ${deliveryAddress || ''}`}
          </p>
        </div>

        <div>
          <h5>Order Summary</h5>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Code</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Length</th>
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
                    <td>{item.length || 'N/A'}</td>
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
              ? uploadedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))
              : <p>No files uploaded.</p>}
          </ul>
        </div>

        <div className="mt-3">
          <input
            type="checkbox"
            id="confirmCheckbox"
            checked={isConfirmed}
            onChange={handleConfirmChange}
          />
          <label htmlFor="confirmCheckbox" className="ml-2">
            I've confirmed my order
          </label>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-secondary mr-2"
            onClick={handleCloseConfirmation}
          >
            Go Back
          </button>
          <button
            className="btn btn-primary"
            disabled={!isConfirmed}
            onClick={handleSubmitOrder}
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalOrderConfirmation;
