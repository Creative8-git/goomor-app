import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const Flatdek = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Flatdek/Flatdek_1.png',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Flatdek/Flatdek_2.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Flatdek/Flatdek_3.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Flatdek/Flatdek_4.jpg',
  ];

  const highlightDetails = {
    features: ['Durable and lightweight', 'Low-maintenance', 'Perfect for outdoor and indoor applications'],
    productInfo:
      'Lysaght Flatdek is an advanced roofing and walling solution that combines durability with a sleek modern look. It is ideal for applications requiring both strength and aesthetic appeal.',
    specifications: {
      'Nominal Cover Width': '250mm',
      'Nominal Rib Height': '45mm',
      'Base Metal Thickness': '0.42mm',
      'Minimum Roof Slope': '1.3° to 2°',
      'Suitable For': 'Roofing',
    },
  };

  

  const doubleside = [
    {
      nametop: 'Classic Cream',
      hextop: '#E9DCB8',
      nameunder: 'Classic Cream',
      hexunder: '#E9DCB8',
    },
    {
      nametop: 'Manor Red',
      hextop: '#7A2F34',
      nameunder: 'Classic Cream',
      hexunder: '#E9DCB8',
    },
    {
      nametop: 'Monument',
      hextop: '#4A4B4D',
      nameunder: 'Surfmist',
      hexunder: '#E4E2D5',
    },
    {
      nametop: 'Paperbark',
      hextop: '#CABFA4',
      nameunder: 'Paperbark',
      hexunder: '#CABFA4',
    },
    {
      nametop: 'Gully',
      hextop: '#73695A',
      nameunder: 'Paperbark',
      hexunder: '#CABFA4',
    },
    {
      nametop: 'Monument',
      hextop: '#4A4B4D',
      nameunder: 'Classic Cream',
      hexunder: '#E9DCB8',
    },
    {
      nametop: 'Monument',
      hextop: '#4A4B4D',
      nameunder: 'Thredbo White',
      hexunder: '#F5EFE3',
    },
    {
      nametop: 'Surfmist',
      hextop: '#E4E2D5',
      nameunder: 'Surfmist',
      hexunder: '#E4E2D5',
    },
    {
      nametop: 'Surfmist',
      hextop: '#E4E2D5',
      nameunder: 'Thredbo White',
      hexunder: '#F5EFE3',
    },
    {
      nametop: 'Woodland Grey',
      hextop: '#464543',
      nameunder: 'Paperbark',
      hexunder: '#CABFA4',
    },
    {
      nametop: 'Woodland Grey',
      hextop: '#464543',
      nameunder: 'Classic Cream',
      hexunder: '#E9DCB8',
    },
    {
      nametop: 'Woodland Grey',
      hextop: '#464543',
      nameunder: 'Thredbo White',
      hexunder: '#F5EFE3',
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
            
            doubleside={doubleside}
            onColorClick={handleColorClick}
            selectedColor={selectedColor}
            getContrastColor={getContrastColor}
          />
        </div>

        <div className="col-md-6">
          <HighlightDetail
            title="FLATDEK®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/flatdek-design-and-installation-guide"
            accessoriesLink="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/PDF/Flatdek_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Flatdek;
