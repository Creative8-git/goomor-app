import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductGallery from './Component/ProductGallery';
import ColorPicker from '../Highlight/ColorPicker';
import ImageColorPicker from '../Highlight/ImageColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';
import RelatedProducts from "../RelatedProducts";
import CustomCarousel from "../Highlight/CustomCarousel";
import { getAssetUrl } from '../../../utils/assetUrl';
import Seemore from '../Highlight/Seemore';
import ProductDetail from '../Highlight/ProductDetail';

const GoomorProductCatalogue = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
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
                const apiBase = process.env.REACT_APP_API_URL || '';
                const response = await fetch(`${apiBase}/api/goomorproducts/${productId}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [productId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleColorClick = (color) => setSelectedColor(color);

    const getContrastColor = (hex = '#FFFFFF') => {
        const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
        return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000000' : '#FFFFFF';
    };

    const handleLearnMore = (links) => {
        if (Array.isArray(links) && links.length > 1) {
            navigate('/pdf-listing', { state: { pdfFiles: links.map(getAssetUrl) } });
        } else if (links?.length) {
            window.open(getAssetUrl(links[0]), '_blank');
        }
    };

    const galleryData = [
        { src: getAssetUrl(product.model) || product.model, thumbnail: getAssetUrl(product.carouselImages?.[0]) || '', alt: product.title },
        ...(product.carouselImages?.slice(1) || []).map((img) => ({ src: '', thumbnail: getAssetUrl(img), alt: product.title })),
    ];

    const hasImageSamples = product?.colors?.some((color) => color.url);
    const hasMultipleLearnMoreLinks = product.learnMoreLinks?.length > 1;

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

export default GoomorProductCatalogue;
