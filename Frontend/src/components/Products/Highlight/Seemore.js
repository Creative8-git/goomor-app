import React from 'react';
import MoreInfoButton from './MoreInfoButton'; // Import MoreInfoButton
import GetQuoteButton from './GetQuote';

const Seemore = ({ title, details, learnMoreLinks, accessoriesLink }) => {
  const { features, productInfo, specifications } = details;

  return (
    <div>
      <div className="row mt-3">

        <div className="col-sm-6">
          <MoreInfoButton links={learnMoreLinks} />
        </div>
        <div className="col-sm-6">
          
        <GetQuoteButton links={'/contact'} />
        </div>
      </div>
    </div>
  );
};

export default Seemore;
