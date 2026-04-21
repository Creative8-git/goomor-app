import React from 'react';

const OrderSummary = ({
  orderItems,
  handleSearchProduct,
  handleProductSelectRow,
  handleQuantityChange,
  removeProductFromTable,
}) => {
  return (
    <div className="mt-5">
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
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    list={`product-list-${index}`}
                    value={item.productName || ''}
                    onChange={(e) => {
                      const updatedItems = [...orderItems];
                      updatedItems[index].productName = e.target.value;
                      handleSearchProduct(e.target.value, index);
                    }}
                    onBlur={(e) => handleProductSelectRow(e.target.value, index)}
                  />
                  <datalist id={`product-list-${index}`}>
                    {item.filteredSuggestions &&
                      item.filteredSuggestions.map((product) => (
                        <option key={product.product_id} value={product.product_name} />
                      ))}
                  </datalist>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.productCode || 'N/A'}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.color || ''}
                    onChange={(e) => {
                      const updatedItems = [...orderItems];
                      updatedItems[index].color = e.target.value;
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={item.length || ''}
                    onChange={(e) => {
                      const updatedItems = [...orderItems];
                      updatedItems[index].length = e.target.value;
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.note || ''}
                    onChange={(e) => {
                      const updatedItems = [...orderItems];
                      updatedItems[index].note = e.target.value;
                    }}
                  />
                </td>
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
  );
};

export default OrderSummary;
