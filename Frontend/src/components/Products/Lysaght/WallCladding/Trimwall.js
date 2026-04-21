import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const Trimwall = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    '/goomorproductimage/Lysaght/Trimdek/Trimdek_1.png',
    '/goomorproductimage/Lysaght/Trimdek/Trimdek_2.jpg',
    '/goomorproductimage/Lysaght/Trimdek/Trimdek_3.jpg',
    '/goomorproductimage/Lysaght/Trimdek/Trimdek_4.jpg',
  ];

  const highlightDetails = {
    features: ['Versatile Application: Ideal for walling.', 'Wide Cover Width: 762mm for more efficient installation.', 'Modern Design: Sleek trapezoidal profile perfect for contemporary architecture.', 'Durable and Lightweight: High strength with easy handling and installation.', 'Low Maintenance: Resistant to weathering and corrosion.', 'Efficient Water Drainage: Performs well on roofs with slopes as low as 2°.', 'Trimdek® is the perfect blend of functionality, style, and reliability for any project.'],
    productInfo:
      'Trimwall® is a versatile roofing and walling profile known for its strength, durability, and modern aesthetic appeal. Manufactured using high-quality steel, Trimdek® combines functionality and design, making it an ideal choice for a wide range of applications, including residential, commercial, and industrial structures.',
    specifications: {
      'Nominal Cover Width': '762mm',
      'Nominal Rib Height': '28mm',
      'Base Metal Thickness': ' 0.42 or 0.48mm',
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
    {
      nametop: 'Classic Cream',
      hextop: '#E9DCB8',
      nameunder: 'Classic Cream gloss',
      hexunder: '#E9DCB8',
    },
    {
      nametop: 'Manor Red',
      hextop: '#5E1D0E',
      nameunder: 'Classic Cream gloss',
      hexunder: '#E9DCB8',
    },
   
    {
      nametop: 'Paperbark',
      hextop: '#CABEAA',
      nameunder: 'Paperbark gloss',
      hexunder: '#CABEAA',
    },
    {
      nametop: 'Surfmist',
      hextop: '#F1F0E6',
      nameunder: 'Thredbo White gloss',
      hexunder: '#FFFFFF',
    },
    
    {
      nametop: 'Monument',
      hextop: '#2C2A29',
      nameunder: 'Thredbo White gloss',
      hexunder: '#FFFFFF',
    },
    {
      nametop: 'Woodland Grey',
      hextop: '#4E4B45',
      nameunder: 'Classic Cream gloss',
      hexunder: '#E9DCB8',
    },
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
            title="TRIMWALL®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/walling-solutions"
            accessoriesLink="/goomorproductimage/Lysaght/PDF/Trimwall_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Trimwall;
