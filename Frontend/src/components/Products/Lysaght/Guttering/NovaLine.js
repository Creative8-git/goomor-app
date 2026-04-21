import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const NovaLine = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    '/goomorproductimage/Lysaght/NovaLine/NovaLine_1.png',
  ];

  const highlightDetails = {
    features: ['Complete range of accessories available including brackets and stop ends.', 'Manufactured from aluminium/zinc/magnesium alloy-coated ZINCALUME® and COLORBOND® steel, featuring Activate® technology for improved corrosion resistance. COLORBOND® steel is available in a range of finishes and colours','Compatible with a broad range of LYSAGHT® Guttering products','Replaces traditional timber fascia, subsequently removing painting and reducing maintenance requirements.'],
    productInfo:
      'An easy to use and fast to install steel fascia compatible with an extensive range of LYSAGHT® Guttering profiles, NOVALINE® Fascia is complemented by a range of steel accessories to deliver a complete fascia system for residential properties.',
    specifications: {
      'Nominal  Height': '185mm',
      'Nominal Top Width': '18mm',
      'Nominal Bottom Width': '35mm',
      'suitable for' :  'Fascia'
    },
  };

  const colors = [
    { name: 'Dover White', hex: '#F9FBF1' },
    { name: 'Surfmist', hex: '#E4E2D5' },
    { name: 'Evening Haze', hex: '#C5C2AA' },
    { name: 'Classic Cream', hex: '#E9DCB8' },
    { name: 'Paperbark', hex: '#CABFA4' },
    { name: 'Dune', hex: '#B1ADA3' },
    { name: 'Southerly', hex: '#D2D1CB' },
    { name: 'Shale Grey', hex: '#BDBFBA' },
    { name: 'Bluegum', hex: '#969799' },
    { name: 'Windspray', hex: '#888B8A' },
    { name: 'Gully', hex: '#857E73' },
    { name: 'Jasper', hex: '#6C6153' },
    { name: 'Wallaby', hex: '#7F7C78' },
    { name: 'Basalt', hex: '#6D6C6E' },
    { name: 'Woodland Grey', hex: '#4B4C46' },
    { name: 'Monument', hex: '#323233' },
    { name: 'Night Sky', hex: '#000000' },
    { name: 'Ironstone', hex: '#3E434C' },
    { name: 'Deep Ocean', hex: '#364152' },
    { name: 'Cottage Green', hex: '#304C3C' },
    { name: 'Pale Eucalypt', hex: '#7C846A' },
    { name: 'Manor Red', hex: '#5E1D0E' }
  ];

  const doubleside = [
    
  ];
  

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const getContrastColor = (hex = '#FFFFFF') => {
    if (!hex || hex.length !== 7 || !hex.startsWith('#')) return '#000000';

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <CustomCarousel images={carouselImages} />
          <ColorPicker
            colors={colors}
            doubleside={doubleside}
            onColorClick={handleColorClick}
            selectedColor={selectedColor}
            getContrastColor={getContrastColor}
          />
        </div>

        <div className="col-md-6">
          <HighlightDetail
            title="TRIMLINE®"
            details={highlightDetails}
            learnMoreLink=""
            accessoriesLink=""
          />
        </div>
      </div>
    </div>
  );
};

export default NovaLine;
