import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactRedirect from '../Contact/ContactRedirect';

const AboutUs = forwardRef((props, ref) => {
  const imagePaths = [
    '/images/About/Front.jpg',
    '/images/About/storage.jpg',
    '/images/About/storage2.jpg',
    '/images/About/storage3.jpg',
    '/images/About/storage4.jpg',
  ];

  const navigate = useNavigate();

  return (
    <div className="about-us-container bg-light pt-5" ref={ref}>
      <div className="about-us-logo mt-5">
        <img
          src="images/logo_transparent.png"
          alt="Goomor Alybeam Logo"
          className="company-logo"
        />
      </div> 
      <div className="about-us-content p-auto">
        <div className="about-us-text">
          <p>
            Welcome to <strong>Goomor Alybeam</strong>, your trusted supplier of
            high-quality home improvement products across Sydney and its
            surrounding regions. With years of experience in the
            industry, we deliver top-notch engineered posts, beams, and
            accessories to contractors and homeowners.
          </p>
        </div>
        <div className="aboutus-carousel">
          {imagePaths.map((image, index) => (
            <div key={index} className="aboutus-carousel-item">
              <img src={image} alt={`About Goomor Alybeam ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="about-us-text">
          <p>
            Our products are available in 7 standard finishes, with custom
            powder coating options to suit any project. We specialize in
            aluminum beams, posts, and a wide range of accessories to meet your
            construction needs.
          </p>
          <div className="about-us-button-container">
            <button
              className="about-us-button"
              onClick={() => navigate('/Product')}
            >
              Explore Our Products
            </button>
          </div>
          <ContactRedirect />
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
