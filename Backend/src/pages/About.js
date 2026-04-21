import React, { useRef } from 'react';
import Info from '../components/Info';
import SupplierTabs from '../components/About/SupplierTabs';
import AboutUs from '../components/About/AboutUs';

function About() {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Info onDiscoverMoreClick={scrollToAboutUs} />
      <AboutUs ref={aboutUsRef} />
      <SupplierTabs />
    </div>
  );
}

export default About;
