import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const Quad = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    '/goomorproductimage/Lysaght/Quad/Quad_1.png',
    '/goomorproductimage/Lysaght/Quad/Quad_2.png',
  ];

  const highlightDetails = {
    features: ['Complete range of accessories available including brackets and stop ends.', 'Manufactured from aluminium/zinc/magnesium alloy-coated ZINCALUME® and COLORBOND® steel, featuring Activate® technology for improved corrosion resistance. COLORBOND® steel is available in a range of finishes and colours'],
    productInfo:
      'A classic gutter shape suited to both new homes and replacement of existing gutters. Readily used for both steel and tile roofs, QUAD gutter is an allrounder suitable for a broad range of architectural styles and applications on houses, patios, carports & sheds.',
    specifications: {
      'Profile style': 'Quad/D',
      'Nominal Front Height': '19mm for Hi-Front and 70mm for Lo-Front',
      'Nominal Width': '115mm',
      'Nominal Back Height': '65mm',
      'Slotting':'Slotted or unslotted',
      'suitable for' :  'guttering.'
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
            title="QUAD 115  HI-FRONT® AND QUAD 115 LO-FRONT®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/lysaght-rainwater-solutions-new-south-wales-brochure"
            accessoriesLink=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quad;
