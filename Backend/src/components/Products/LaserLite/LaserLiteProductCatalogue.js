import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomCarousel from '../Highlight/CustomCarousel';
import ColorPicker from '../Highlight/ColorPicker';
import ImageColorPicker from '../Highlight/ImageColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';
import RelatedProducts from "../RelatedProducts";

const LaserLiteProductCatalogue = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null); // State for the fetched product
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  // Fetch the product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/laserliteproducts/${productId}`); // Replace with actual backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleColorClick = (color) => setSelectedColor(color);

  const getContrastColor = (hex = '#FFFFFF') => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000000' : '#FFFFFF';
  };

  const handleLearnMore = (links) => {
    if (Array.isArray(links) && links.length > 1) {
      navigate('/pdf-listing', { state: { pdfFiles: links } });
    } else {
      window.open(links[0], '_blank');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found. Please check the product ID in the URL.</div>;
  }

  // Determine which color picker to use
  const hasImageSamples = product.colors.some((color) => color.url);

  return (
    <div className="container mt-5 LaserLite">
      <div className="row">
        <div className="col-md-6 mb-4">
          <CustomCarousel images={product.carouselImages} />
          <CustomCarousel images={product.flashing}  />
          {hasImageSamples ? (
            <ImageColorPicker
              colors={product.colors}
              doubleside={product.doubleside}
              finishes={product.finishes}
            />
          ) : (
            <ColorPicker
              colors={product.colors}
              doubleside={product.doubleside}
              onColorClick={handleColorClick}
              selectedColor={selectedColor}
              getContrastColor={getContrastColor}
            />
          )}
        </div>
        <div className="col-md-6">
        <HighlightDetail
                        title={product.title}
                        details={product.highlightDetails}
                        learnMoreLinks={product.learnMoreLinks || []} // Pass array instead of a single link
                        accessoriesLink={product.accessoriesLink}
                    />
          
          <RelatedProducts relatedProductIds={product.relatedProducts || []} />
        </div>
      </div>
    </div>
  );
};

export default LaserLiteProductCatalogue;
