import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DemoModel from './DemoModel';

const ProductGallery = ({ data, fallbackImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="gallery-carousel">
            {/* Main Viewer Section */}
            <div className="gallery-carousel-main">
                {currentIndex === 0 && data[0].src ? (
                    <DemoModel src={data[0].src} />
                ) : (
                    <img
                        src={data[currentIndex]?.thumbnail || fallbackImage}
                        alt={data[currentIndex]?.alt || 'Fallback'}
                        className="gallery-main-image"
                    />
                )}
            </div>

            {/* Thumbnail Navigation */}
            <div className="gallery-carousel-thumbnails">
    {data.map((item, index) => (
        <div
            key={index}
            className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
        >
            <img
                src={item.thumbnail || fallbackImage}
                alt={item.alt || `Thumbnail ${index}`}
                style={{ height: '100px', objectFit: 'cover' }} // Added height limit
            />
        </div>
    ))}
</div>

        </div>
    );
};

ProductGallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string, // `src` is optional for the fallback
            thumbnail: PropTypes.string.isRequired,
            alt: PropTypes.string, // Optional alt text
        })
    ).isRequired,
    fallbackImage: PropTypes.string, // URL for the fallback image
};

ProductGallery.defaultProps = {
    fallbackImage: 'https://via.placeholder.com/580x326?text=No+Model+Available', // Default fallback image
};

export default ProductGallery;
