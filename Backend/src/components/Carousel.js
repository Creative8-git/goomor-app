import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    const track = document.querySelector('.carousel-brands-track');
    const clone = track.innerHTML;
    track.innerHTML += clone;

    // Delay animation start for Safari iPhone issue
    const startAnimation = () => {
      track.style.animation = 'none'; // Disable animation to reset
      setTimeout(() => {
        track.style.animation = ''; // Re-enable the animation after a delay
      }, 500); // 500ms delay
    };

    // Start animation with delay to ensure proper loading
    startAnimation();

    // Attach resize event to force reflow on Safari
    const handleResize = () => {
      startAnimation(); // Reset the animation on resize
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="carousel-brands-container bg-light">
      <div className="carousel-brands-wrapper bg-light">
        <div className="carousel-brands-track">
          <img src="images/stratco-logo.svg" alt="Logo 1" className="carousel-brands-logo" />
          <img src="images/colorbond-logo.svg" alt="Logo 2" className="carousel-brands-logo" />
          <img src="images/versiclad-logo.svg" alt="Logo 3" className="carousel-brands-logo" />
          <img src="images/bondor-logo.png" alt="Logo 4" className="carousel-brands-logo non-svg" />
          <img src="images/lysaght-logo.svg" alt="Logo 5" className="carousel-brands-logo" />
          
          <img src="images/metroll-logo.jpg" alt="Logo 6" className="carousel-brands-logo non-svg" />
          <img src="images/palram-logo.webp" alt="Logo 7" className="carousel-brands-logo non-svg" />
          <img src="images/stramit-logo.svg" alt="Logo 8" className="carousel-brands-logo" />
          <img src="images/trifix-logo.svg" alt="Logo 9" className="carousel-brands-logo" />
          <img src="images/wakaflex-logo.png" alt="Logo 10" className="carousel-brands-logo non-svg" />
          <img src="images/laserlite-logo.svg" alt="Logo 11" className="carousel-brands-logo" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
