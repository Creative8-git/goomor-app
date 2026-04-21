import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../../utils/assetUrl';

const RelatedProducts = ({ relatedProductIds }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const scrollInterval = useRef(null);
  const [readyToScroll, setReadyToScroll] = useState(false);


  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        if (!relatedProductIds || relatedProductIds.length === 0) {
          setRelatedProducts([]);
          setLoading(false);
          return;
        }

        const endpoints = [
          { url: 'goomorproducts', brandName: 'goomor' },
          { url: 'laserliteproducts', brandName: 'laserlite' },
          { url: 'stratcoproducts', brandName: 'stratco' },
          { url: 'stramitproducts', brandName: 'stramit' },
          { url: 'metrollproducts', brandName: 'metroll' },
          { url: 'versicladproducts', brandName: 'versiclad' },
          { url: 'lysaghtproducts', brandName: 'lysaght' },
          { url: 'bondorproducts', brandName: 'bondor' },
          { url: 'palramproducts', brandName: 'palram' },
          { url: 'standardflashing', brandName: 'goomor' },
          { url: 'customflashing', brandName: 'goomor' }
        ];

        const fetchFromAPI = async ({ url, brandName }) => {
          const apiBase = process.env.REACT_APP_API_URL || '';
          const response = await fetch(`${apiBase}/api/${url}`);
          if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
          const data = await response.json();
          return data.map((product) => ({ ...product, brandName }));
        };

        const allProducts = (await Promise.all(endpoints.map(fetchFromAPI))).flat();
        const matched = allProducts.filter((p) =>
          relatedProductIds.includes(String(p.id))
        );
        setRelatedProducts(matched);
        setReadyToScroll(true); // ✅ mark ready for auto-scroll
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [relatedProductIds]);






  const handleCardClick = (brandName, productId) => {
    navigate(`/${brandName}/${productId}`);
  };

  if (loading) {
    return <div>Loading related products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (relatedProducts.length === 0) {
    return <div>No related products available.</div>;
  }

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 200;

    if (direction === 'left') {
      if (container.scrollLeft === 0) {
        // Loop to end
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    } else {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        // Loop to start
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };


  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <button className="nav-button left" onClick={() => scrollCarousel('left')}>&lt;</button>
      <div className="carousel-container" ref={carouselRef}>
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.brandName, product.id)}
          >
            <img
              src={getAssetUrl(product.carouselImages?.[0]) || 'https://via.placeholder.com/150'}
              alt={product.title || 'Product'}
              className="product-image"
            />
            <div className="product-overlay">
              {product.title || 'Unnamed Product'}
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={() => scrollCarousel('right')}>&gt;</button>

      <style jsx>{`
  .related-products {
    position: relative;
    padding: 0 30px;
    text-align: center;
  }

  .carousel-container {
    display: flex;
    overflow: hidden;
    gap: 0; /* No gap between items */
    scroll-behavior: smooth;
  }

  .product-card {
    flex: 0 0 auto;
    width: 180px;
    height: 180px;
    background: #fff;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 0;     /* Remove rounded corners */
    box-shadow: none;     /* Remove shadow */
    margin: 0;            /* No spacing */
  }

  .product-card:hover {
    transform: scale(1.02);
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    padding: 10px;
    font-size: 14px;
  }

  .product-card:hover .product-overlay {
    opacity: 1;
  }

  .nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.2s ease;
  padding: 0;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.7);
}

.nav-button.left {
  left: -16px; /* slightly outside */
}

.nav-button.right {
  right: -16px;
}

`}</style>

    </div>
  );

};

RelatedProducts.propTypes = {
  relatedProductIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RelatedProducts;
