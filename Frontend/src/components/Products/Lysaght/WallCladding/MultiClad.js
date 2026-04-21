import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const MultiClad = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    '/goomorproductimage/Lysaght/MultiClad/MultiClad_1.png',
    'https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46986.jpg?itok=TOW1LBGk',
    'https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46984.jpg?itok=5KVSvOPA',
  ];

  const highlightDetails = {
    features: ['An efficient walling profile thanks to its lightness and broad cover width, MULTICLAD® is an ideal wall cladding for sheds & garages. It features raised rib sections of two varying heights across the width of the sheet. MULTICLAD® is an ideal wall cladding profile option when an inexpensive, lightweight and quick-to-install cladding is required.','The profile features raised rib sections of two varying heights across the sheet width, providing an attractive appearance. Its long, clean lines contribute to a modern look.','The lightweight nature of MULTICLAD® facilitates quick and easy installation, making it a cost-effective cladding solution.'],
    productInfo:
      'An efficient walling profile thanks to its lightness and broad cover width, MULTICLAD® is an ideal wall cladding for sheds & garages. It features raised rib sections of two varying heights across the width of the sheet. MULTICLAD® is an ideal wall cladding profile option when an inexpensive, lightweight and quick-to-install cladding is required.',
    specifications: {
      'Nominal Cover Width': '840mm',
      'Nominal Rib Height': '12mm',
      'Base Metal Thickness': ' 0.35 or 0.42mm',
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
            title="MULTI CLAD®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/walling-solutions"
            accessoriesLink="/goomorproductimage/Lysaght/PDF/Trimwall_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiClad;
