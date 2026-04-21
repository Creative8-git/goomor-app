import React, { useState } from 'react';
import { getAssetUrl } from '../../../utils/assetUrl';

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
  };

  const backdropStyle = {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.85)',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90%',
    zIndex: 10000,
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '-40px',
    right: '-40px',
    fontSize: '48px',
    color: 'white',
    cursor: 'pointer',
  };


  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="carousel-custom-container">
      <div
        className="carousel-custom-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-custom-item">
            <img
              src={getAssetUrl(img)}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              onClick={() => openOverlay(index)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-custom-button carousel-custom-button-prev"
        onClick={goToPrevSlide}
      >
        &#8249;
      </button>
      <button
        className="carousel-custom-button carousel-custom-button-next"
        onClick={goToNextSlide}
      >
        &#8250;
      </button>

      <div className="carousel-custom-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-custom-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      {isOverlayOpen && (
        <div style={overlayStyle}>
          <div style={backdropStyle} onClick={closeOverlay}></div>
          <div style={contentStyle}>
            <span style={closeButtonStyle} onClick={closeOverlay}>
              &times;
            </span>
            <img
              src={getAssetUrl(images[currentIndex])}
              alt={`Large Slide ${currentIndex + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default CustomCarousel;
