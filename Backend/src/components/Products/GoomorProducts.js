import React from 'react';
import ShadowDOM from 'react-shadow';
import { Link } from 'react-router-dom';

const suppliers = [
  {
    name: 'Post',
    path: '/goomor/post',
    logo: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/post+50.png',
  },
  {
    name: 'Beam',
    path: '/goomor/beam',
    logo: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Beam+100.png',
  },
  {
    name: 'Accessories',
    path: '/goomor/accessories',
    logo: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Steel+Gable+End+Bracket+225x50x225deg.png',
  },
];

const GoomorProducts = () => {
  return (
    <ShadowDOM.div>
      <style>
        {`@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`}
      </style>

      <div className="bg-[#FFF7E8] text-black font-sans py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold">Goomor Products</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suppliers.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-md bg-[#f5f6f8] hover:shadow-xl transition duration-300"
              >
                <div className="w-full h-80 flex items-center justify-center p-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[300px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold  text-center px-2 drop-shadow-md" style={{ color: '#f57200' }}>{item.label}</h3>
                </div>
                <div className="absolute top-2 right-2 bg-orange-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center z-10">+</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ShadowDOM.div>
  );
};

export default GoomorProducts;
