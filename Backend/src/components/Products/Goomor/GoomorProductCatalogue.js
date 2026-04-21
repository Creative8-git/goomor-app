import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductGallery from './Component/ProductGallery';
import ColorPicker from '../Highlight/ColorPicker';
import ImageColorPicker from '../Highlight/ImageColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';
import RelatedProducts from "../RelatedProducts";
import CustomCarousel from "../Highlight/CustomCarousel";

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
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/goomorproducts/${productId}`);
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
            navigate('/pdf-listing', { state: { pdfFiles: links } });
        } else {
            window.open(links[0], '_blank');
        }
    };

    const galleryData = [
        { src: product.model, thumbnail: product.carouselImages[0] || '', alt: product.title },
        ...product.carouselImages.slice(1).map((img) => ({ src: '', thumbnail: img, alt: product.title })),
    ];

    const hasImageSamples = product?.colors?.some((color) => color.url);
    const hasMultipleLearnMoreLinks = product.learnMoreLinks?.length > 1;

    return (
        <div className="container mt-5 Goomor">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <ProductGallery data={galleryData} />
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
                        learnMoreLinks={product.learnMoreLinks || []}
                        accessoriesLink={product.accessoriesLink}
                    />
                    {product.learnMoreLinks.length > 1 && (
                        <div className="mt-4 text-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleLearnMore(product.learnMoreLinks)}
                            >
                                More Details
                            </button>
                        </div>
                    )}
                    <RelatedProducts relatedProductIds={product.relatedProducts || []} />
                </div>
            </div>
        </div>
    );
};

export default GoomorProductCatalogue;
