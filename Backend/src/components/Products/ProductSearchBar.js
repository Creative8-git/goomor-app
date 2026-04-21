import React, { useState } from 'react';
import Fuse from 'fuse.js';

const ProductSearchBar = ({
  data,
  fuseOptions = {
    keys: [
      { name: 'product_name', weight: 0.7 },
      { name: 'product_code', weight: 0.5 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
  },
  placeholder = 'Search for products...',
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = new Fuse(data, fuseOptions);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm.trim()).map((result) => result.item);
      if (onSearch) onSearch(results);
    } else {
      if (onSearch) onSearch(data); // Reset to all products if search term is empty
    }
  };

  return (
    <div className="product-search-bar" style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        className="form-control me-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default ProductSearchBar;
