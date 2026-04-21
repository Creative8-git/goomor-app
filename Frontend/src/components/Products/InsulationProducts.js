import React from 'react';
import { Link } from 'react-router-dom';

const suppliers = [
  { name: 'StratCo', path: '/stratco/cooldek', logo: '/images/stratco-logo.svg', order: 1 },
  { name: 'Versiclad', path: '/versiclad', logo: '/images/versiclad-logo.svg', order: 2 },
  { name: 'Bondor', path: '/bondor', logo: '/images/bondor-logo.png', order: 3 },
];

const InsulationProducts = () => {
  return (
    <section className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-6">Insulated Panels Suppliers</h1>
      </header>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 my-5">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="col text-center my-4">
            <Link to={supplier.path} className="text-decoration-none">
              <img
                src={supplier.logo}
                alt={`${supplier.name} Logo`}
                className="img-fluid mb-3"
                style={{ maxHeight: '100px', maxWidth: '70%' }}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsulationProducts;
