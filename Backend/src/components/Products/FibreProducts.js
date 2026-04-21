import React from 'react';
import { Link } from 'react-router-dom';

const suppliers = [
  { name: 'Palram', path: '/palram', logo: '/images/palram-logo.webp', order: 1 },
  { name: 'LaserLite', path: '/laserlite', logo: '/images/laserlite-logo.svg', order: 2 },
];

const FibreProducts = () => {
  return (
    <section className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-6">Fibreglass and Polycarbonate Suppliers</h1>
      </header>
      <div className="row row-cols-1 row-cols-sm-2 g-4 my-5">
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

export default FibreProducts;
