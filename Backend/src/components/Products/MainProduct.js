import React from 'react';
import { Link } from 'react-router-dom';
 // Import the CSS file for styling

const suppliers = [
  { name: 'Versiclad', path: '/versiclad', logo: '/images/versiclad-logo.svg', order: 1 },
  { name: 'StratCo', path: '/stratco', logo: '/images/stratco-logo.svg', order: 2 },
  { name: 'Stramit', path: '/stramit', logo: '/images/stramit-logo.svg', order: 3 },
  { name: 'Metroll', path: '/metroll', logo: '/images/metroll-logo.jpg', order: 4 },
  { name: 'Lysaght', path: '/lysaght', logo: '/images/lysaght-logo.svg', order: 5 },
];

// Function to sort suppliers based on their `order` attribute
const sortedSuppliers = [...suppliers].sort((a, b) => a.order - b.order);

const MainProduct = () => {
  return (
    <div className="container text-center justify-content-center my-4 py-5">
      <h1 className="text-center display-6 mb-4 mx-auto">Our Suppliers</h1>
      <div className="d-flex justify-content-center my-5">
        <ul className="list-group list-group-horizontal">
          {sortedSuppliers.map((supplier, index) => (
            <li key={index} className="list-group-item border-0 mx-1">
              <Link to={supplier.path} className="text-decoration-none">
                <img
                  src={supplier.logo}
                  alt={`${supplier.name} Logo`}
                  className="supplier-logo"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainProduct;
