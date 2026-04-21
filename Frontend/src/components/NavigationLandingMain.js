import React from 'react';
import ShadowDOM from 'react-shadow';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

const NavigationLandingMain = () => {
  const items = [
    {
      label: 'Patios, Pergolas & Verandas',
      src: [
        '/goomorproductimage/Goomor/Patios/gable+225.jpg',
        '/goomorproductimage/Util/7c69e2b1-f78e-4221-a588-4be9ba59ce0c.jpeg',
        '/goomorproductimage/Util/demo1.jpeg',
        '/goomorproductimage/Util/demo2.jpeg',
        '/goomorproductimage/Util/demo3.jpeg',

      ],
      path: '/goomor/patioscategories'
    },
    {
      label: 'Colorbond & Roofing',
      src: ['/goomorproductimage/Util/ColorbondRef.png',
        '/goomorproductimage/Lysaght/Flatdek/Flatdek_2.jpg',
        '/goomorproductimage/Stramit/Roofing/MonoClad/MonoClad_2.jpg',
        '/goomorproductimage/Lysaght/Trimdek/Trimdek_3.jpg',
        '/goomorproductimage/Stramit/Roofing/SunsetPatioPanel/SunsetPatioPanel_2.jpg',
      ],
      path: '/ColorBondProduct'
    },
    {
      label: 'Insulated Panels',
      src: [
        '/goomorproductimage/Util/insulation.png',
        '/goomorproductimage/Util/Insulated/Spacemaker.jpg',
        '/goomorproductimage/Util/Insulated/Spacemaker2.jpg',
        '/goomorproductimage/Util/Insulated/Versalink.jpg',

      ],
      path: '/insulationproducts'
    },
    {
      label: 'Polycarbonate and Fibreglass',
      src: ['/goomorproductimage/Util/poly.png',
        '/goomorproductimage/Palram/EzGlaze/EzGlaze_2.jpg',
        '/goomorproductimage/Palram/SunPal/SunPal_2.jpg',
        '/goomorproductimage/Palram/SunLite/SunLite_1.jpg'
      ],
      path: '/fibreproducts'
    },
    {
      label: 'Fencing',
      src: ['https://www.clicksteel.com.au/wp-content/uploads/2022/09/COLORBOND-steel-Trimclad-3125mm-Long-Fence-Panels.jpg'],
      path: '/demo'
    },
    {
      label: 'Goomor Products',
      src: ['/goomorproductimage/Goomor/Accessories/Beam+100.png',
        '/goomorproductimage/Goomor/Accessories/Post+90.png',
        '/goomorproductimage/Goomor/Accessories/Steel+Gable+End+Bracket+225x50x225deg.png'
      ],
      path: '/goomorproducts'
    },
    {
      label: 'Decking',
      src: ['/goomorproductimage/Util/composite-decking-nav.jpg'],
      path: '/'
    },
  ];

  return (
    <ShadowDOM.div>
      <style>
        {`@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`}
      </style>
      <div className="bg-[#FFF7E8] text-black font-sans py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-60 bg-gray-100">
                  <ImageSlider images={item.src} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold  text-center px-2 drop-shadow-md" style={{ color: '#f57200' }}>{item.label}</h3>

                  </div>
                </div>
                {/* Top-right "+" badge */}
                <div className="absolute top-2 right-2 bg-orange-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center z-10">+</div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </ShadowDOM.div>
  );
};

export default NavigationLandingMain;




const ImageSlider = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img
      src={getAssetUrl(images[currentIndex])}
      alt=""
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
};
