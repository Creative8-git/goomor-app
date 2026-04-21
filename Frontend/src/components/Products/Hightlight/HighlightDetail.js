import React from 'react';

const HighlightDetail = ({ title, details, learnMoreLink }) => {
  const { features, productInfo, specifications } = details;

  return (
    <div>
      <h1 className="product-name">{title}</h1>

      <div className="mt-4">
        <h3>Features</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3>Product Information</h3>
        <p className='mx-3'>{productInfo}</p>
      </div>

      <div className="mb-4">
        <h3>Specifications</h3>
        <table className="table table-bordered table-striped specifications-table">
          <tbody>
            {Object.entries(specifications).map(([key, value], index) => (
              <tr key={index}>
                <th>{key}:</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {learnMoreLink && (
        <div className="text-end mt-4">
          <a
            href={learnMoreLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
};

export default HighlightDetail;
