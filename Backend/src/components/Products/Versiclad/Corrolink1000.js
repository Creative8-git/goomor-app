import React, { useState } from 'react';
import CustomCarousel from '../Highlight/CustomCarousel';
import ImageColorPicker from '../Highlight/ImageColorPicker';
import HighlightDetail from '../Highlight/HighlightDetail';

const CorroLink1000 = () => {
  const [selectedColor, setSelectedColor] = useState({
    name: 'Select a color',
    hex: '#FFFFFF',
    url: '', // Add url to track selected image
  });

  const carouselImages = [
    'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/Corrolink765_1.jpg',
  ];

  const highlightDetails = {
    features: [
      'Light weight, self mating 1000mm wide panels for fast and efficient installation with less visible ceiling joins',
      'Suitable for use in coastal regions with optional MagnaFlow™ prepainted steel',
      'Bushfire rated – suitable for use in bush fire zones up to BAL-40',
      'Excellent thermal performance of up to RT3.8, dramatically reduces heat transfer during summer and mould and condensation during winter',
    ],
    productInfo:
      'Versiclad Spacemaker insulated roof panel is the perfect roof solution for a variety of structures including outdoor living areas, complete house roofs and commercial applications.',
    specifications: {
      'Cover Width': '1000mm',
      'Length': '1800 - 15000 mm',
      'Overall thickness': '180mm',
      'Roof Slope': '3°',
      'Suitable For': 'Roofing',
    },
  };

  const colors = [
    {
      name: 'Alpine White',
      hex: '#F8F6F0',
      url: 'https://versiclad.com.au/wp-content/uploads/2022/08/Alpine-White-scaled.jpg',
    },
    {
      name: 'Mist Green',
      hex: '#7C846A',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_MistGreen.jpg',
    },
    {
      name: 'Mountain Blue',
      hex: '#364152',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_MountainBlue.jpg', // No URL
    },
    {
      name: 'Off White',
      hex: '#E4E2D5',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_OffWhite.jpg', // No URL
    },
    {
      name: 'Smooth Cream',
      hex: '#E9DCB8',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_SmoothCream.jpg', // No URL
    },
    {
      name: 'Merino',
      hex: '#CABFA4',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Merino.jpg', // No URL
    },
    {
      name: 'Dusk',
      hex: '#B1ADA3',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Dusk.jpg', // No URL
    },
    {
      name: 'Gull Grey',
      hex: '#888B8A',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_GullGrey.jpg', // No URL
    },
    {
      name: 'Birch  Grey',
      hex: '#BDBFBA',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_BirchGrey.jpg', // No URL
    },
    {
      name: 'Armour Grey',
      hex: '#BDBFBA',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_ArmourGrey.jpg', // No URL
    },
    {
      name: 'Wallaroo',
      hex: '#857E73',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Wallaroo.jpg', // No URL
    },
    {
      name: 'Gulf',
      hex: '#857E73',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Gulf.jpg', // No URL
    },
    {
      name: 'Basal',
      hex: '#6D6C6E',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Basal.jpg', // No URL
    },
    {
      name: 'Jasmine Brown',
      hex: '#6C6153',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_JasmineBrown.jpg', // No URL
    },
    {
      name: 'Slate Grey',
      hex: '#4B4C46',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_SlateGrey.jpg', // No URL
    },
    {
      name: 'Heritage Red',
      hex: '#5E1D0E',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_HeritageRed.jpg', // No URL
    },
    {
      name: 'Unizinc',
      hex: '#d1d1d1',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Unizinc.jpg', // No URL
    },
    {
      name: 'Caulfield Green',
      hex: '#304C3C',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_CaulfieldGreen.jpg', // No URL
    },
    {
      name: 'Iron Grey',
      hex: '#3E434C',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_IronGrey.jpg', // No URL
    },
    {
      name: 'Monolith',
      hex: '#323233',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Monolith.jpg', // No URL
    },
    {
      name: 'Ebony',
      hex: '#000000',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Ebony.jpg', // No URL
    },
    {
      name: 'Off White - UniCote Coastal™',
      hex: '#E4E2D5',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_OffWhite.jpg', // No URL
    },
    {
      name: 'Armour Grey - UniCote Coastal™',
      hex: '#BDBFBA',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_GullGrey.jpg', // No URL
    },
    {
      name: 'Monolith - UniCote Coastal™',
      hex: '#323233',
      url: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/Corrolink765/ColorSamples/Corrolink765_Monolith.jpg', // No URL
    },
  ];

  const doubleside = [

  ]; // Add doubleside definition if needed

  const ceilingData = {
    color: [
      {name: "Pearl White",
      hex: "#f8f6f0"},
      {name: "Cream",
      hex: "#E9DCB8"},
      {name: "Merino",
      hex: "#CABFA4"},
      ],
    finishes: [
      { name: "Micraline", image: "https://versiclad.com.au/wp-content/uploads/2023/02/Micraline.png" },
      { name: "Smooth", image: "https://versiclad.com.au/wp-content/uploads/2023/02/Smooth-Pearl.png" },
      { name: "Embossed", image: "https://versiclad.com.au/wp-content/uploads/2023/07/Untitled-design-81.png" },
      { name: "Lux Line", image: "https://versiclad.com.au/wp-content/uploads/2023/02/Luxline-Pearl-White.png" },
      { name: "Golden Oak", image: "https://versiclad.com.au/wp-content/uploads/2023/07/Untitled-design-81.png" },
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
            title="Corrolink 1000"
            details={highlightDetails}
            learnMoreLink="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/PDF/Product_Flyer_Corrolink1000.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default CorroLink1000;
