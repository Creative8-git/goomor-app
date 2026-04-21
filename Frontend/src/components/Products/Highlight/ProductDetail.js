import React from 'react';
import MoreInfoButton from './MoreInfoButton'; // Import MoreInfoButton

const FeatureDetail = ({ title, details, learnMoreLinks, accessoriesLink }) => {
  const { features, productInfo, specifications } = details;

  return (
    <div>
      <div className="mt-4">
  <h3>Product Information</h3>
  <ul>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
  {Array.isArray(productInfo) ? (
    productInfo.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
  ) : (
    <p>{productInfo}</p>
  )}
</div>

    </div>
  );
};

export default FeatureDetail;
