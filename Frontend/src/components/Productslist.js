import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images[0]?.src} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
