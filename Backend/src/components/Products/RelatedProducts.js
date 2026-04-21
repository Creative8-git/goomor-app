import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ relatedProductIds }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        if (!relatedProductIds || relatedProductIds.length === 0) {
          console.log("No relatedProductIds provided.");
          setRelatedProducts([]);
          setLoading(false);
          return;
        }

        const endpoints = [
          { url: 'goomorproducts', brandName: 'goomor' },
          { url: 'laserliteproducts', brandName: 'laserlite' },
          // { url: 'ampeliteproducts', brandName: 'ampelite' },
          { url: 'stratcoproducts', brandName: 'stratco' },
          { url: 'stramitproducts', brandName: 'stramit' },
          { url: 'metrollproducts', brandName: 'metroll' },
          { url: 'versicladproducts', brandName: 'versiclad' },
          { url: 'lysaghtproducts', brandName: 'lysaght' },
          { url: 'bondorproducts', brandName: 'bondor' },
          { url: 'palramproducts', brandName: 'palram' },
        ];

        const fetchFromAPI = async ({ url, brandName }) => {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/${url}`);
          if (!response.ok) {
            console.error(`Error fetching from ${url}:`, response.statusText);
            throw new Error(`Failed to fetch products from ${url}`);
          }
          const data = await response.json();
          return data.map((product) => ({ ...product, brandName }));
        };

        const allProducts = (await Promise.all(endpoints.map(fetchFromAPI))).flat();
        console.log("All Fetched Products:", allProducts);

        const matchedProducts = allProducts.filter((product) =>
          relatedProductIds.includes(String(product.id))
        );
        console.log("Matched Related Products:", matchedProducts);

        setRelatedProducts(matchedProducts);
      } catch (err) {
        console.error("Error fetching related products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    console.log("Related Product IDs:", relatedProductIds);
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

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <button className="scroll-btn left" onClick={() => (carouselRef.current.scrollLeft -= 200)}>◀</button>
      <div className="carousel-container" ref={carouselRef}>
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.brandName, product.id)}
          >
            <img
              src={product.carouselImages?.[0] || 'https://via.placeholder.com/150'}
              alt={product.title || 'Product'}
              className="product-image"
            />
            <p className="product-title">{product.title || 'Unnamed Product'}</p>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => (carouselRef.current.scrollLeft += 200)}>▶</button>
      <style jsx>{`
        .related-products {
          margin: 20px;
          text-align: center;
          position: relative;
        }
        .carousel-container {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          cursor: grab;
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
          padding: 15px 0;
        }
        .carousel-container::-webkit-scrollbar {
          height: 8px;
        }
        .carousel-container::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .carousel-container::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #fff;
          border: 1px solid #ddd;
          cursor: pointer;
          font-size: 18px;
          padding: 5px 10px;
          z-index: 10;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .scroll-btn.left {
          left: -30px;
        }
        .scroll-btn.right {
          right: -30px;
        }
        .product-card {
          flex: 0 0 auto;
          width: 200px;
          text-align: center;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 15px;
          transition: transform 0.2s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        .product-card:hover {
          transform: scale(1.1);
        }
        .product-image {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          object-fit: cover;
        }
        .product-title {
          font-size: 16px;
          margin-top: 10px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

RelatedProducts.propTypes = {
  relatedProductIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RelatedProducts;
