import React, { useState } from 'react';
import CustomCarousel from '../../Highlight/CustomCarousel';
import ColorPicker from '../../Highlight/ColorPicker';
import HighlightDetail from '../../Highlight/HighlightDetail';

const Spandek = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    nametop: 'Top Color',
    hextop: '#FFFFFF',
    nameunder: 'Under Color',
    hexunder: '#FFFFFF',
  });

  const carouselImages = [
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Spandek/Spandek_1.png',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Spandek/Spandek_2.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Spandek/Spandek_3.jpg',
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/Spandek/Spandek_4.jpg',
  ];

  const highlightDetails = {
    features: ['Enhancing the visual appeal of both residential and commercial structures.','SPANDEK® combines strength with lightness and rigidity, offering excellent durability and impact resistance.','Suitable for both roofing and walling, making it a flexible choice for various architectural designs.','With a nominal cover width of 700mm and the ability to be used on roof slopes as low as 2°'],
    productInfo:
      'The contemporary-looking, square-corrugated profile of SPANDEK® is ideal where a stronger, striking and defined corrugated roofing or walling is required. Combining strength with lightness and rigidity, this popular cladding delivers durability, impact-resistance and economy with richly textured good looks.',
    specifications: {
      'Nominal Cover Width': '700mm',
      'Nominal Rib Height': '24mm',
      'Base Metal Thickness': ' 0.42 or 0.48mm',
      'Minimum Roof Slope': '2°',
      'Suitable For': 'Roofing',
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
            title="SPANDEK®"
            details={highlightDetails}
            learnMoreLink="https://cdn.dcs.lysaght.com/download/lysaght-spandek-design-and-installation-guide"
            accessoriesLink="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Lysaght/PDF/Spandek_accessories.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Spandek;
