import React, { useState } from 'react';

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-custom-container ">
      <div
        className="carousel-custom-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-custom-item">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
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
    </div>
  );
};

export default CustomCarousel;
