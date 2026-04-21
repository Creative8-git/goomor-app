import React from 'react';
import MoreInfoButton from './MoreInfoButton'; // Import MoreInfoButton
import GetQuoteButton from './GetQuote';

const HighlightDetail = ({ title, details, learnMoreLinks, accessoriesLink }) => {
  const { features, productInfo, specifications } = details;

  return (
    <div>
      <h1 className="product-name">{title}</h1>
      <div className="mb-4 mt-2">
        <h3>Specifications</h3>
        <ul className="specifications-list">
          {Object.entries(specifications).map(([key, value], index) => (
            <li key={index}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default HighlightDetail;
