// src/components/Home.js
import React from 'react';
import Modelviewer from '../components/Modelviewer';
import Patioform from '../components/Order';


function Testing() {
  return (
    <div>
      <div className="container custom-product-container">
      <div className="row">
        {/* Left Column for Form */}
        <div className="col-lg-6 col-md-12">
          <Patioform />
        </div>

        {/* Right Column for Images */}
        <div className="col-lg-6 col-md-12">
          <Modelviewer />
        </div>
      </div>
    </div>
    </div>
  );
};


export default Testing;