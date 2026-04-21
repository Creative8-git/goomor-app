import React from 'react';
import { Link } from 'react-router-dom';

const suppliers = [
  { name: 'StratCo', path: '/stratco', logo: '/images/colorbond-logo.svg', order: 1 },
  { name: 'Flashing', path: '/Product/flashing', logo: '/images/Gutter.png', order: 2 },
];

const ColorBondProducts = () => {
  return (
    <section className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-6">ColorBond Products</h1>
      </header>

      {/* Centered row */}
      <div className="row justify-content-center g-4 my-1">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="col-auto text-center">
            <Link to={supplier.path} className="text-decoration-none mx-5 d-inline-block">
              <img
                src={supplier.logo}
                alt={`${supplier.name} Logo`}
                className="img-fluid mb-2 d-block mx-5"
                style={{ width: '150px', height: 'auto' }}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorBondProducts;
