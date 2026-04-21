import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const Kliplok700HL = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Kliplok700HL/Kliplok700HL_1.png',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Kliplok700/Kliplok700_2.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Kliplok700/Kliplok700_3.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Kliplok700/Kliplok700_4.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Kliplok700/Kliplok700_5.jpg',
  ];

  const highlightDetails = {
    features: ['Utilizes a clip-fixed installation method, eliminating the need for exposed fasteners and ensuring superior watertightness.', 'Features bold ribs rising from wide, fluted pans, creating a distinctive linear visual suitable for both modern and traditional designs', 'Manufactured from high-tensile steel, providing excellent spanning capacity and resistance to harsh environmental conditions.'],
    productInfo:
      'An advanced profile featuring fluting across the length of the pan',
    specifications: {
      'Nominal Cover Width': '700mm',
      'Nominal Rib Height': '43mm',
      'Base Metal Thickness': '0.42 or 0.48mm',
      'Roof Slope': '1°',
      'Suitable For': 'Roofing, Walling',
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
            onColorClick={handleColorClick}
            selectedColor={selectedColor}
            getContrastColor={getContrastColor}
          />
        </div>

        <div className="col-md-6">
          <HighlightDetail
            title="KLIP-LOK 700 HI-STRENGTH® Longtitudinal Fluting"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/lysaght-klip-lok-700-hi-strength-brochure"
            accessoriesLink="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/PDF/Kliplok700_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Kliplok700HL;
