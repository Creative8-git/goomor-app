import React, { useState } from 'react';
import CustomCarousel from '../Highlight/CustomCarousel';
import ImageColorPicker from '../Highlight/ImageColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';

const CorroLink765 = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    url: '', // Add url to track selected image
  });

  const carouselImages = [
    '/goomorproductimage/Versiclad/Corrolink765/Corrolink765_1.jpg',
  ];

  const highlightDetails = {
    features: [
      'Made in Australia for Australian conditions',
      'Efficient installation.',
      'Strong, easy to handle, and long-lasting.',
      'Classic corrugated design for any architectural style.',
    ],
    productInfo:
      'A widely popular insulated roof panel with a 765mm cover. The Versiclad Corrolink 765 offers a lightweight and easy-to-install panel that meets both environmental and aesthetic requirements.',
    specifications: {
      'Nominal Cover Width': '765mm',
      'Nominal Rib Height': '16mm',
      'Base Metal Thickness': '0.60 or 0.80mm',
      'Roof Slope': '3°',
      'Suitable For': 'Roofing',
    },
  };

  const colors = [
    {
      name: 'Mist Green',
      hex: '#7C846A',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_MistGreen.jpg',
    },
    {
      name: 'Mountain Blue',
      hex: '#364152',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_MountainBlue.jpg', // No URL
    },
    {
      name: 'Off White',
      hex: '#E4E2D5',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_OffWhite.jpg', // No URL
    },
    {
      name: 'Smooth Cream',
      hex: '#E9DCB8',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_SmoothCream.jpg', // No URL
    },
    {
      name: 'Merino',
      hex: '#CABFA4',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Merino.jpg', // No URL
    },
    {
      name: 'Dusk',
      hex: '#B1ADA3',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Dusk.jpg', // No URL
    },
    {
      name: 'Gull Grey',
      hex: '#888B8A',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_GullGrey.jpg', // No URL
    },
    {
      name: 'Birch  Grey',
      hex: '#BDBFBA',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_BirchGrey.jpg', // No URL
    },
    {
      name: 'Armour Grey',
      hex: '#BDBFBA',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_ArmourGrey.jpg', // No URL
    },
    {
      name: 'Wallaroo',
      hex: '#857E73',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Wallaroo.jpg', // No URL
    },
    {
      name: 'Gulf',
      hex: '#857E73',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Gulf.jpg', // No URL
    },
    {
      name: 'Basal',
      hex: '#6D6C6E',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Basal.jpg', // No URL
    },
    {
      name: 'Jasmine Brown',
      hex: '#6C6153',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_JasmineBrown.jpg', // No URL
    },
    {
      name: 'Slate Grey',
      hex: '#4B4C46',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_SlateGrey.jpg', // No URL
    },
    {
      name: 'Heritage Red',
      hex: '#5E1D0E',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_HeritageRed.jpg', // No URL
    },
    {
      name: 'Unizinc',
      hex: '#d1d1d1',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Unizinc.jpg', // No URL
    },
    {
      name: 'Caulfield Green',
      hex: '#304C3C',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_CaulfieldGreen.jpg', // No URL
    },
    {
      name: 'Iron Grey',
      hex: '#3E434C',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_IronGrey.jpg', // No URL
    },
    {
      name: 'Monolith',
      hex: '#323233',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Monolith.jpg', // No URL
    },
    {
      name: 'Ebony',
      hex: '#000000',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Ebony.jpg', // No URL
    },
    {
      name: 'Surfmist - Matt',
      hex: '#E4E2D5',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_OffWhite.jpg', // No URL
    },
    {
      name: 'Shale Grey - Matt',
      hex: '#888B8A',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_GullGrey.jpg', // No URL
    },
    {
      name: 'Dune - Matt',
      hex: '#BDBFBA',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_BirchGrey.jpg', // No URL
    },
    {
      name: 'Basalt - Matt',
      hex: '#6D6C6E',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Basal.jpg', // No URL
    },
    {
      name: 'Monument - Matt',
      hex: '#323233',
      url: '/goomorproductimage/Versiclad/Corrolink765/ColorSamples/Corrolink765_Monolith.jpg', // No URL
    },
  ];

  const doubleside = []; // Add doubleside definition if needed

  const ceilingData = {
    color: [
      { name: "Pearl White",
      hex: "#f8f6f0" },
    ]
    ,
    finishes: [
      { name: "Micraline", image: "https://versiclad.com.au/wp-content/uploads/2023/02/Micraline.png" },
      { name: "Smooth", image: "https://versiclad.com.au/wp-content/uploads/2023/02/Smooth-Pearl.png" },
    ],
  };



  const handleImageClick = (color) => {
    console.log("Selected Color:", color); // Debugging log
    setSelectedColor(color); // Update state with the selected color
  };

  return (
    <div className="container mt-5 versiclad">
      <div className="row">
        <div className="col-md-6 mb-4">
          <CustomCarousel images={carouselImages} />
          <ImageColorPicker
  colors={colors}
  doubleside={doubleside}
  finishes={ceilingData} // Contains the updated array for ceiling colors
  onColorClick={handleImageClick}
  selectedColor={selectedColor}
/>


        </div>

        <div className="col-md-6">
          <HighlightDetail
            title="Corrolink 765"
            details={highlightDetails}
            learnMoreLink=""
          />
        </div>
      </div>
    </div>
  );
};

export default CorroLink765;
