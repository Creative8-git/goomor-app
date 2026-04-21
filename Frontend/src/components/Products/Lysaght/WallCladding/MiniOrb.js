import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const MiniOrb = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    '/goomorproductimage/Lysaght/MiniOrb/MiniOrb_1.png',
    'https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/41181.jpg?itok=s0OA48tw',
    'https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/28544.jpg?itok=0NXndJlZ',
  ];

  const highlightDetails = {
    features: ['Ideal for both roofing and walling.', 'efficient installation.', 'Strong, easy to handle, and long-lasting.', 'Classic corrugated design for any architectural style.'],
    productInfo:
      'Its subtle mini corrugations make MINI ORB® a popular accent or feature, contrasting against other walling products & materials. MINI ORB® is suitable for both flat and curved installations and is suitable for interior and exterior applications. Its trademark corrugations can be installed either vertically or horizontally.',
    specifications: {
      'Nominal Cover Width': '820mm',
      'Nominal Rib Height': '6mm',
      'Base Metal Thickness': '0.42mm ',
      'Roof Slope': '2°',
      'Suitable For': 'Walling',
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
            title="Mini Orb®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/walling-solutions"
            accessoriesLink="/goomorproductimage/Lysaght/PDF/MiniOrb_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniOrb;
