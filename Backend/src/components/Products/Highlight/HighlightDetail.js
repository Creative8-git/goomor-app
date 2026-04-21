import React from 'react';
import MoreInfoButton from './MoreInfoButton'; // Import MoreInfoButton

const HighlightDetail = ({ title, details, learnMoreLinks, accessoriesLink }) => {
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
      <div className="row">

        <div className="col-sm-6">
          <MoreInfoButton links={learnMoreLinks} />
        </div>
        <div className="col-sm-6">
          <a href="tel:(+61) 0287989204" className="btn btn-secondary">
          Get Quote
        </a>
        </div>
      </div>
      <div className="mt-4">
        <h3>Product Information</h3>
        {Array.isArray(productInfo) ? (
          productInfo.map((paragraph, index) => (
            <p className="mx-3" key={index}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className="mx-3">{productInfo}</p>
        )}
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

      <div className="text-end mt-4">
        {/* More Info Button (Now inside HighlightDetail) */}
        

        {accessoriesLink && (
          <a
            href={accessoriesLink}
            className="btn btn-secondary me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessories and Guides
          </a>
        )}

        {/* Get Quote Button */}
        
      </div>
    </div>
  );
};

export default HighlightDetail;
