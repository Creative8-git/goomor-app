import React from 'react';
import ShadowDOM from 'react-shadow';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../../utils/assetUrl';

const PatiosCategories = () => {
  const items = [
   
    {
      label: 'Attached Patios Type 1',
      src: '/goomorproductimage/Goomor/Patios/Wall-Attached/Pic/PIC+ATTACK+WALL+1.jpg',
      path: '/goomor/attachedpatio'
    },
    {
      label: 'Attached Patios Type 2',
      src: '/goomorproductimage/Goomor/Patios/Wall-Attached2/Pic/PIC+ATTACK+WALL+2.jpg',
      path: '/goomor/attachedpatio2'
    },
    {
      label: 'Flyover Patios',
      src: '/goomorproductimage/Goomor/Patios/FlyOver/Pic/Flyover.jpg',
      path: '/goomor/flyoverpatios'
    },
    {
      label: 'Flyover Over Hang Patios',
      src: '/goomorproductimage/Goomor/Patios/Flyover+Over+Hang+Type/Pic/Flyover+overhang.jpg',
      path: '/goomor/flyoveroverhangpatios'
    },
    {
      label: 'Free Standing patios with Gable roof 22.5 Degrees',
      src: '/goomorproductimage/Goomor/Patios/Gable+22/Pic/gable+225.jpg',
      path: '/goomor/gable225'
    },
    {
      label: 'Free Standing patios with Gable roof 15 Degrees',
      src: '/goomorproductimage/Goomor/Patios/Gable+15/Pic/Gable+15.jpg',
      path: '/goomor/gable15'
    },
    {
      label: 'Free Standing Patios',
      src: '/goomorproductimage/Goomor/Patios/FreeStanding/pic/FREE+STANDING.jpg',
      path: '/goomor/freestandingpatio'
    },
  ];

  return (
    <ShadowDOM.div>
      <style>
        {`@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`}
      </style>
      <div className="bg-[#FFF7E8] text-black font-sans min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-center">
            <img
              src="/images/logo_transparent.png"
              alt="Goomor Logo"
              className="h-auto w-auto max-h-20 max-w-[120px] object-contain mb-2"
            />
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <Link
              to={item.path}
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-60 bg-gray-100">
                <img
                  src={getAssetUrl(item.src)}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-bold text-center px-2">{item.label}</h3>
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

export default PatiosCategories;
