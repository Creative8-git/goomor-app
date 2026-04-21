import React, { useState } from 'react';
import ShadowDOM from 'react-shadow';


const HotspotViewer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hotspots = [
    {
      x: 10,
      y: 5.5,
      label: '1. Metal Insulated Roofing Panels',
      description: 'Provides UV protection and style, Available in a variety of colors',
      length: ['Varied sizes, can be delivered up to 9m'],
      dimensions: ['Standard by provider'],
      color: ['Standard Metal Colors'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Versiclad/SpaceMaker/SpaceMaker_1.png',
      link: '/versiclad/spacemaker'
    },
    
    {
      x: 5.5,
      y: 17,
      label: '2. Metal Gutter',
      description: 'Available in a variety of colors',
      length: ['Varied, up to 9m'],
      dimensions: ['Standard Fascia gutter 125mm'],
      color: ['Standard Metal Colors'],
      image: 'https://stratco-arc.com.au/wp-content/uploads/2024/06/Stratco-Edge-Gutter-1.jpg',
      link: ''
    },
    {
      x: 98.5,
      y: 18,
      label: '3. Downlight Kit',
      description: 'Suitable for all types of roofs',
      length: [''],
      dimensions: ['Standard by provider'],
      color: ['White only'],
      image: 'https://static.wixstatic.com/media/1e8de8_6089e840e245483dbfb088a512d1d43a~mv2.jpg/v1/fill/w_881,h_626,al_c,q_85,enc_avif,quality_auto/1e8de8_6089e840e245483dbfb088a512d1d43a~mv2.jpg',
      link: ''
    },
    {
      x: 99,
      y: 36,
      label: '4. Aluminium Beam',
      description: 'Available in 6 standard colors, Powder coat option available',
      length: [''],
      dimensions: ['Standard by provider'],
      color: ['6 standard colors, Powder coat option available'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Beam+165.png',
      link: '/goomor/beam'
    },
    {
      x: 5.3,
      y: 29.5,
      label: '5. End Bracket',
      description: 'Available in 6 standard colors, Powder coat option available',
      length: [''],
      dimensions: ['Standard by provider'],
      color: ['6 standard colors, Powder coat option available'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Steel+End+Bracket+150x50.png',
      link: '/goomor/Accessories/'
    },
    {
      x: 11,
      y: 42,
      label: '6. Nozzle for PVC Downpipes 80mm',
      description: 'Available in 6 standard colors, Powder coat option available',
      length: [''],
      dimensions: ['Standard by provider'],
      color: ['Zinc finish only'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Nozzle+80mm.png',
      link: '/goomor/nozzle80mm/'
    },
    {
      x: 98.8,
      y: 48,
      label: '7. Aluminium Post',
      description: 'Stainless steel/Aluminium, availble in variety of colors',
      dimensions: ['110x110mm', '90x90mm', '65x65mm'],
      length: ['8m', '6.5m', '6m', '4m', '3.5m', '3m'],
      color: ['6 standard colors, Powder coat option available'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/post+100.png',
      link: '/goomor/post110'
    },
    {
      x: 7.5,
      y: 61,
      label: '8. 80mm PVC Downpipe',
      description: 'Available in 6 standard colors',
      length: ['N/a'],
      dimensions: ['80mm in width'],
      color: ['6 standard colors'],
      image: 'https://media.bunnings.com.au/api/public/content/f71f41b543854419829271cb0e29427e?v=55e6d5b3&t=w700dpr2',
      link: ''
    },
    {
      x: 98.5,
      y: 82,
      label: '9. Free standing post holder',
      description: 'Available in 6 standard colors, can be Powder coated',
      length: ['N/a'],
      dimensions: [''],
      color: ['Mill finish only, can be powder coated'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Steel+Bottom+Post+Freestanding+110.png',
      link: '/goomor/steelbottompostfreestanding110'
    },
    {
      x: 7,
      y: 78.5,
  label: '10. Aluminium Post Skirt',
      description: 'Available in 6 standard colors, can be Powder coated',
      length: ['N/a'],
      dimensions: ['100mm in width'],
      color: ['6 standard colors, Powder coated'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Aluminium+Post+Skirt+110x110x2mm.png',
      link: '/goomor/aluminiumpostskirt110x110x2mm'
    },
    {
      x: 6.5,
      y: 88,
      label: '11. PVC Elbow 80mm',
      description: 'Available in 6 standard colors',
      length: ['N/a'],
      dimensions: [''],
      color: ['6 standard colors'],
      image: 'https://m.media-amazon.com/images/I/41gqfB+XoZL._SS400_.jpg',
      link: 'https://example.com/sofa'
    },
    {
      x: 98,
      y: 28,
      label: '12. steel gutter clip',
      description: 'Available in Galvanize Finish',
      length: ['N/a'],
      dimensions: [''],
      color: ['Can be powder coated'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Steel+Gutter+Clip.png',
      link: '/goomor/steelgutterclip'
    },
    {
      x: 99.5,
      y: 94,
      label: '13. PVC Downpipe Clip',
      description: 'Available in 6 standard colors',
      length: ['N/a'],
      dimensions: [''],
      color: ['Available in 6 standard colors'],
      image: 'https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Accessories/Clip+downpipe+80.png',
      link: '/goomor/clipdownpipe80'
    },
  ];

  return (
    <ShadowDOM.div>
      <style>{`@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`}</style>
      <style>{`
   @keyframes pulseHighlight {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(223, 94, 23, 0.6);
    }
    50% {
      box-shadow: 0 0 0 12px rgba(223, 94, 23, 0);
    }
  }

  .pulse-ring {
    animation: pulseHighlight 2s infinite;
  }
`}</style>
      <style>{`
  @keyframes slowBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }

  .slow-bounce {
    animation: slowBounce 2s infinite;
  }
`}</style>
      <style>{`
  .hotspot-btn { transform: translate(-50%, -50%); }

  .featured-card {
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .featured-card:hover {
    background-color: #fff7f2;
    border-color: #df5e17;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`}</style>


      <style>{`.hotspot-btn { transform: translate(-50%, -50%); }`}</style>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="text-center my-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#df5e17' }}>
              Free Standing Patios
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Transform Your Outdoor Space with our Free Standing Patios.
              Click on the hotspots below to explore featured element in detail.
            </p>

            <div className="mt-6 flex justify-center">
              <div className="flex flex-col items-center slow-bounce">
                <div
                  className="w-12 h-12 flex items-center justify-center shadow"
                  style={{ backgroundColor: '#df5e17', color: 'white' }}
                >
                  ▼
                </div>
                <p className="text-sm mt-2 font-medium" style={{ color: '#df5e17' }}>
                  Scroll to explore
                </p>
              </div>
            </div>


          </div>



          <div className="mt-16 w-full max-w-6xl mx-auto rounded-lg overflow-hidden text-center">
            
            <img
              src="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Patios/FreeStanding/pic/FREE+STANDING.jpg" // Replace with actual hosted path if needed
              alt="Patio Structure Diagram"
              className="w-full h-auto mx-auto rounded shadow"
            />
            <p className="text-sm text-gray-600 mt-2 italic">
              *Please note that the image is for reference only. Lighting condition can cause images to appear different.
            </p>
          </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#df5e17] mb-4">
              Structural Overview
            </h3>
        </div>

          <div id="hotspot-section" className="relative w-full max-w-6xl mx-auto rounded-lg overflow-visible shadow-lg">
            
            <img
              src="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Goomor/Patios/FreeStanding/pic/FREE+STANDING+DETACH.png"
              alt="Room"
              className="w-full h-auto object-cover rounded"
            />

            {hotspots.map((item, index) => (
              <div
                key={index}
                className="absolute hotspot-btn z-30 group"
                style={{ top: `${item.y}%`, left: `${item.x}%` }}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-[#0c1c3f] text-white flex items-center justify-center text-lg font-bold cursor-pointer hover:scale-110 transition ${activeIndex === null ? 'pulse-ring' : ''}`}

                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  
                </div>


                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition mt-1 text-xs bg-white text-black px-2 py-1 rounded shadow text-center">
                  {item.label}
                </div>

                {activeIndex === index && (
                  <>
                    {/* Dimming Background */}
                    <div
                      className="fixed inset-0 bg-black bg-opacity-40 z-40"
                      onClick={() => setActiveIndex(null)}
                    />

                    {/* Compact Popup */}
                    <div
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 bg-white text-black p-4 rounded-lg shadow-xl z-50"
                    >
                      {/* Close Button */}
                      <div className="flex justify-end mb-2">
                        <button
                          className="text-gray-400 hover:text-red-500 text-lg font-bold"
                          onClick={() => setActiveIndex(null)}
                          aria-label="Close"
                        >
                          ✕
                        </button>
                      </div>

                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-auto rounded mb-2"
                      />
                      <h3 className="text-base font-semibold mb-1">{item.label}</h3>
                      <p className="text-sm mb-2">{item.description}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-medium underline"
                      >
                        View More
                      </a>
                    </div>
                  </>

                )}
              </div>
            ))}
          </div>

          {/* Structural Diagram Image */}
          

          {/* Featured Items List (Scrollable, only 3 visible at a time) */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#df5e17] mb-6 text-center">
              Featured Items
            </h3>

            <div
              className="overflow-y-auto"
              style={{
                maxHeight: '600px', // adjust based on real item height (approx 3 items)
                paddingRight: '6px'
              }}
            >
              <div className="flex flex-col gap-4">
                {hotspots.map((item, index) => (
                  <div
                    key={index}
                    className="featured-card flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
                  >

                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full sm:w-40 h-40 object-contain rounded mb-4 sm:mb-0 sm:mr-4"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{item.label}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#df5e17] font-medium underline self-start"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          

          {/* Value Proposition Section */}
          <div className="mt-20 bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="text-lg font-bold text-[#0c1c3f] mb-1">Premium Quality</h4>
                <p className="text-sm text-gray-600">
                  Hand-selected materials from trusted manufacturers with excellent ratings.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="text-lg font-bold text-[#0c1c3f] mb-1">Expert Curation</h4>
                <p className="text-sm text-gray-600">
                  Our experts carefully curate each component for style, strength, and durability.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-bold text-[#0c1c3f] mb-1">Guaranteed Satisfaction</h4>
                <p className="text-sm text-gray-600">
                  100% satisfaction with free returns and comprehensive warranties.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-[#0c1c3f] mb-2">
                Ready to Transform Your Patio?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Contact our friendly sales team to place your order today.
              </p>
            </div>
          </div>


        </div>
      </div>
    </ShadowDOM.div>
  );
};

export default HotspotViewer;
