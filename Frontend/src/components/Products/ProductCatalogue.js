import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSearchBar from './ProductSearchBar';
import ProductDetailModal from './ProductDetailModal';
import { getAssetUrl } from '../../utils/assetUrl';

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNoProducts, setShowNoProducts] = useState(false);

  const itemsPerPage = 20;

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/retail/products`);
      setProducts(response.data);
      setFilteredProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
      setFilteredProducts([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    const timeout = setTimeout(() => {
      if (isLoading) setShowNoProducts(true);
    }, 20000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (results) => {
    setFilteredProducts(results);
    setCurrentPage(1);
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="product-catalogue">
      <h1>Product Catalogue</h1>
      <ProductSearchBar
        data={products}
        placeholder="Search for products..."
        onSearch={handleSearch}
      />
      <div className="product-list">
        {isLoading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.product_id}
              className="product-card"
              onClick={() => openModal(product)}
            >
              <div className="product-image-container">
                <img
                  src={getAssetUrl(product.image_urls?.[0]) || '/images/logo.png'}
                  alt={product.product_name}
                  className="product-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/logo.png';
                  }}
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.product_name}</h3>
                <p className="product-info">Product ID: {product.product_id}</p>
                <p className="product-info">Product Code: {product.product_code}</p>
              </div>
            </div>
          ))
        ) : showNoProducts ? (
          <p>No products found.</p>
        ) : null}
      </div>
      <div className="pagination-container">
        <button
          className="btn btn-secondary me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(5)].map((_, index) => {
          const page = currentPage - 2 + index;
          if (page > 0 && page <= totalPages) {
            return (
              <button
                key={page}
                className={`btn btn-pagination ${page === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          }
          return null;
        })}
        <button
          className="btn btn-secondary ms-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductCatalogue;
