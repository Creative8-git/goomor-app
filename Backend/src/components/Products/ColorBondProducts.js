import React from 'react';
import { Link } from 'react-router-dom';

const suppliers = [
  { name: 'StratCo', path: '/stratco', logo: '/images/stratco-logo.svg', order: 1 },
  { name: 'Stramit', path: '/stramit', logo: '/images/stramit-logo.svg', order: 2 },
  { name: 'Metroll', path: '/metroll', logo: '/images/metroll-logo.jpg', order: 3 },
  { name: 'Lysaght', path: '/lysaght', logo: '/images/lysaght-logo.svg', order: 4 },
  { name: 'Flashing', path: '/Product/flashing', logo: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Util/fLASHING.png', order: 5 },
];

const ColorBondProducts = () => {
  return (
    <section className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-6">ColorBond Products</h1>
      </header>
      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-5 g-4 my-4">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="col text-center my-5">
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

export default ColorBondProducts;
