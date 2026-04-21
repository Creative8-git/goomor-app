import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomCarousel from '../Highlight/CustomCarousel';
import ColorPicker from '../Highlight/ColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';
import RelatedProducts from '../RelatedProducts';
import ProductDetail from '../Highlight/ProductDetail';
import Seemore from '../Highlight/Seemore';

const CustomFlashingCatalogue = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState({
        name: 'Select a color',
        hex: '#FFFFFF',
        nametop: 'Top Color',
        hextop: '#FFFFFF',
        nameunder: 'Under Color',
        hexunder: '#FFFFFF',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/customflashing/${productId}`);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found. Please check the product ID in the URL.</div>;
    }

    return (
        <>
  <div className="container mt-5 Goomor">
    {/* All your main content */}
    <div className="row">
      <div className="col-md-6 mb-4">
        <CustomCarousel images={product.carouselImages} />
        <RelatedProducts relatedProductIds={product.relatedProducts || []} />
      </div>
      <div className="col-md-6">
        <HighlightDetail
          title={product.title}
          details={product.highlightDetails}
          learnMoreLinks={product.learnMoreLinks || []}
          accessoriesLink={product.accessoriesLink}
        />
         <Seemore
          title={product.title}
          details={product.highlightDetails}
          learnMoreLinks={product.learnMoreLinks || []}
          accessoriesLink={product.accessoriesLink}
        />
        <ColorPicker
          className="my-5"
          colors={product.colors}
          doubleside={product.doubleside}
          onColorClick={handleColorClick}
          selectedColor={selectedColor}
          getContrastColor={getContrastColor}
        />
       
      </div>
    </div>
  </div>

  {/* FULL-WIDTH SECTION OUTSIDE CONTAINER */}
  <div className="w-100 bg-light py-5">
    <div className="container">
      <ProductDetail
        title={product.title}
        details={product.highlightDetails}
      />
    </div>
  </div>
</>

        
    );
};

export default CustomFlashingCatalogue;
