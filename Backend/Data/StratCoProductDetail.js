// src/data/productData.js

// src/data/productData.js
const commonLinks = [
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-C-Design-Stramit-Cladding-Solutions-for-Region-C-March-2013.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-D-Design-Cyclonic-Battens-Stramit-Cladding-Solutions-for-Region-D-Feb-2013-6755.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-D-Design-Stramit-Cladding-Solutions-for-Region-D-Feb-2013-6754.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Cyclonic-Areas-Roof-And-Wall-Cladding-Product-Technical-Design-Supplement.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Patio-Roofing-Cyclonic-Span-Tables.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Roof-And-Wall-Flashing-Architectural-Detailing-Design-Guide.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Patio-Roofing-Span-Tables-Brochure.pdf",
  "/goomorproductimage/Stramit/Roofing/CommonPDF/Stramit-Roof-Slope-Design-Guide-v2.pdf",
];
const commonwallcladdingLinks = [
  "/goomorproductimage/Stramit/WallCladding/MonoPanel/PDF/Wall-Sheeting-And-Cladding-Central-Region-Product-Technical-Manual.pdf",
  "/goomorproductimage/Stramit/WallCladding/MonoPanel/PDF/Wall-Sheeting-and-Cladding-Southern-Region-Product-Technical-Manual.pdf",
  "/goomorproductimage/Stramit/WallCladding/KPanel/PDF/Wall-Sheeting-And-Cladding-Northern-Region-Product-Technnical-Manual.pdf",
  "/goomorproductimage/Stramit/WallCladding/KPanel/PDF/Wall-Sheeting-And-Cladding-Western-Region-Product-Technical-Manual.pdf",
  "/goomorproductimage/Stramit/WallCladding/MiniCorry/PDF/Cyclonic-Areas-Roof-And-Wall-Cladding-Product-Technical-Design-Supplement.pdf",
];

const commonRainwaterLinks = [
  "/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Bat-Clip-Product-Installation-Supplement.pdf",
  "/goomorproductimage/Stramit/RainWater/QuadGutter/PDF/Stramit-Gutter-Spacer-Installation-DL.pdf",
  "/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Gutter-Overflow-Options-Technical-Supplement_AUG23.pdf",
  "/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Rainwater-Products-New-South-Wales-Product-Technical-Manual.pdf",
];



const ColorBondColors = [
  { name: "Dover White - Snow Drift", hex: "#F9FBF1" },
  { name: "Surfmist - Off White", hex: "#E4E2D5" },
  { name: "Evening Haze - Moss Vale Sand", hex: "#C5C2AA" },
  { name: "Classic Cream - Smooth Cream", hex: "#E9DCB8" },
  { name: "Paperbark - Merino", hex: "#CABFA4" },
  { name: "Dune - Birch", hex: "#B1ADA3" },
  { name: "Southerly - Lunar Grey", hex: "#D2D1CB" },
  { name: "Shale Grey - Gull Grey", hex: "#BDBFBA" },
  { name: "Bluegum", hex: "#969799" },
  { name: "Windspray - Armour Grey", hex: "#888B8A" },
  { name: "Gully - Driftwood", hex: "#857E73" },
  { name: "Jasper - Banyan Brown", hex: "#6C6153" },
  { name: "Wallaby - Cobble Stone", hex: "#7F7C78" },
  { name: "Basalt - Granite", hex: "#6D6C6E" },
  { name: "Woodland Grey - Slate Grey", hex: "#4B4C46" },
  { name: "Monument - Gun Metal Grey", hex: "#323233" },
  { name: "Night Sky - Ebony", hex: "#000000" },
  { name: "Ironstone - Dark Stone", hex: "#3E434C" },
  { name: "Deep Ocean - Mountain Blue", hex: "#364152" },
  { name: "Cottage Green - Caulfield Green", hex: "#304C3C" },
  { name: "Pale Eucalypt - Mist Green", hex: "#7C846A" },
  { name: "Manor Red - Heritage Red", hex: "#5E1D0E" },
];
const StratCoColors = [
  { name: "Federation Cream", hex: "#FFFDD0" },
  { name: "Thredbo White", hex: "#F3F4EF" },
]

const StratCoHorizon290 = [
  { name: "Paperbark - Merino", hex: "#CABFA4" },
  { name: "Woodland Grey - Slate Grey", hex: "#4B4C46" },
  { name: "Domain - Primrose", hex: "#E8DBAE" },
]

const Fascia = [
  { name: "Dune - Birch", hex: "#B1ADA3" },
  { name: "Shale Grey - Gull Grey", hex: "#BDBFBA" },
  { name: "Cottage Green - Caulfield Green", hex: "#304C3C" },
  { name: "Manor Red - Heritage Red", hex: "#5E1D0E" },
  { name: "Paperbark - Merino", hex: "#CABFA4" },
  { name: "Surfmist - Off White", hex: "#E4E2D5" },
]


const Copper = [
  { name: "Copper", hex: "#b87333" },
]
const FederationGreen = [
  { name: "Federation Green", hex: "#34350" },
]

const filteredColors = ColorBondColors.filter(color => color.name !== "Classic Cream - Smooth Cream");
const StratCoProductDetail = [

  //roofing
  {
      id: "cooldek",
      title: " CoolDek",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/CoolDek/CoolDek50.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco CoolDek is a high-performance roofing profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "50 mm",
              "Base Metal Thickness": "0.42mm",
          }
      },
      colors: [
          {
              name: "Armour Grey",
              hex: "#888B8A",
          },
          {
              name: "Banyan Brown",
              hex: "#6C6153",
          },
          {
              name: "Gull Grey",
              hex: "#BDBFBA",
          },
          {
              name: "Merino",
              hex: "#CABFA4",
          },
          {
              name: "Off White",
              hex: "#E4E2D5",
          },
          {
              name: "Slate Grey",
              hex: "#4B4C46",
          },
          {
              name: "Gun Metal Grey",
              hex: "#323233",
          },
          {
              name: "Mist Green",
              hex: "#7C846A",
          },
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/CoolDek/PDF/CoolDek.pdf",
          "/goomorproductimage/StratCo/PDF/cooldek_design_guide.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "cooldekfasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "corrugated",
      title: " Corrugated Roofing",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/Corrugated/CGI.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Corrugated cladding is a traditional roofing profile enhanced by modern materials and finishes.",
          specifications: {
              "Profile Height": "16mm",
              "Base Metal Thickness": "0.42, 0.48mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "4.300 KG/M2",
              "Effective Cover": "762.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/Corrugated/PDF/Corrugated.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "corrugatedfasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "horizon290",
      title: " Horizon 290",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/Horizon290/Horizon290.png",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Horizon 290 is a high-performance roofing profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "50 mm",
              "Base Metal Thickness": "0.42 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "5.677 KG/M2",
              "Effective Cover": "290.0 mm",
          },
      },
      colors: [
          ...StratCoHorizon290,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "horizon290fasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "prodek",
      title: " Prodek",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/ProDek/ProDek_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Prodek is a high-performance roofing profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "50 mm",
              "Base Metal Thickness": "0.42,0.48 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "5.000 KG/M2",
              "Effective Cover": "650.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/ProDek/PDF/ProDek.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "prodekfasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "smartpan",
      title: " smartpan",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/SmartPan/SmartPan_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco smartpan is a high-performance roofing profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "24 mm",
              "Base Metal Thickness": "0.42 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "4.700 KG/M2",
              "Effective Cover": "700.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/SmartPan/PDF/SmartPan.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "smartpanfasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "superdek",
      title: " Superdek",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/SuperDek/SuperDek_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Superdek is a high-performance roofing profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "28 mm",
              "Base Metal Thickness": "0.42, 0.48 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "4.300 KG/M2",
              "Effective Cover": "762.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/SuperDek/PDF/SuperDek.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "superdekfasteners" ],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],
  },
  {
      id: "topdek700",
      title: " Topdek 700",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Roofing/TopDek700/TopDek700_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Topdek 700 is a high-performance roofing profile that offers a sleek and modern look.",

          specifications: {
              "Profile Height": "42 mm",
              "Base Metal Thickness": "0.42, 0.48 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "4.700 KG/M2",
              "Effective Cover": "700.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/Roofing/TopDek700/PDF/TopDek.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "topdekfasteners" ,"topdekaccessories"],
      flashing: [
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
          "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      ],

  },


  //Wall cladding
  {
      id: "cgimini",
      title: " CGI Mini",
      type: "walling",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/WallCladding/CGIMini/CGIMini_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco CGI Mini is a high-performance wall cladding profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "6 mm",
              "Base Metal Thickness": "0.42, 0.48mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "4.000 KG/M2",
              "Effective Cover": "825.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/WallCladding/CGIMini/PDF/CGIMini.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "cgiminifasteners"],
      flashing: [],
  },
  {
      id: "maxirib",
      title: " MaxiRib",
      type: "walling",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/WallCladding/MaxiRib/MaxiRib_1.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco MaxiRib is a high-performance wall cladding profile that offers a sleek and modern look.",
          specifications: {
              "Profile Height": "4 mm",
              "Base Metal Thickness": "0.42, 0.48mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "3.800 KG/M2",
              "Effective Cover": "850.0 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/WallCladding/MaxiRib/PDF/MaxiRib.pdf",
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "maxiribfasteners"],
      flashing: [],
  },

  //fascia and Gutters
  {
      id: "fascia&cover",
      title: " Fascia & Cover",
      type: "fascia",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/ContourFascia/ContourFascia.jpg",
          "/goomorproductimage/StratCo/RainWater/ContourFascia/ContourFasciaGuide.jpg",
          "/goomorproductimage/StratCo/RainWater/ContourFascia/ContourFasciaspecs.jpg",
          "/goomorproductimage/StratCo/RainWater/ContourFascia/ContourFasciaAccessories.jpg",
          
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Contour Fascia is a high-performance fascia profile that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.45 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "1.064 KG/LM",
              "Compatiple accessories": "Can be ordered", 
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/ContourFascia/PDF/Fascia.pdf",
      ],
      relatedProducts: [,"fasciaaccessories"],
      flashing: [],
  },
  {
      id: "edge-gutter",
      title: " Edge Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/EdgeGutter/EdgeGutter_1.jpg",
          "/goomorproductimage/StratCo/RainWater/EdgeGutter/EdgeGutterAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Edge Gutter is a high-performance gutter profile that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.55 mm",
              "Tensile Strength": "G300",
              "Product Coating": "AZ150",
              "Product Weight": "1.960 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: ["edgeguttersaccessories"],
      flashing: [],
  },
  {
      id: "half-round-gutter",
      title: " Half Round Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/HalfRoundGutter/HalfRoundGutter_1.jpg",
          "/goomorproductimage/StratCo/RainWater/HalfRoundGutter/HalfRoundGutterAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Half Round Gutter is a high-performance gutter that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.45 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "1.187 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/HalfRoundGutter/PDF/HalfRoundGutter.pdf",
      ],
      relatedProducts: [ "halfroundaccessories" ],
      flashing: [],
  },
  {
      id: "hi-front-gutter",
      title: " Quad Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/HiFrontGutter/HiFrontGutter_1.jpg",
          "/goomorproductimage/StratCo/RainWater/HiFrontGutter/HiFrontGutterAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Hi Front Gutter is a high-performance gutter that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.55 mm",
              "Tensile Strength": "G300",
              "Product Coating": "AZ150",
              "Product Weight": "1.960 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
          ...Copper,
          ...FederationGreen,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/HiFrontGutter/PDF/HiFrontGutter.pdf",
      ],
      relatedProducts: ["quadaccessories"],
      flashing: [],
  },
  {
      id: "og-gutter",
      title: " OG Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/OGGutter/OGGutter_1.jpg",
          "/goomorproductimage/StratCo/RainWater/OGGutter/OGGutterAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco OG Gutter is a high-performance gutter that offers a sleek and traditional look.",
          specifications: {
              "Base Metal Thickness": "0.45 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "1.064 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/OGGutter/PDF/OGGutter.pdf",
      ],
      relatedProducts: ["ogguttersaccessories"],
      flashing: [],
  },
  {
      id: "smoothline",
      title: " Smoothline Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/SmoothLine/SmoothLine_1.jpg",
          "/goomorproductimage/StratCo/RainWater/SmoothLine/SmoothLineAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Smoothline is a high-performance gutter that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.45 mm",
              "Tensile Strength": "G550",
              "Product Coating": "AZ150",
              "Product Weight": "1.187 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/SmoothLine/PDF/SmoothLine.pdf",
      ],
      relatedProducts: [ "smoothlineaccessories" ],
      flashing: [],
  },
  {
      id: "vf-gutter",
      title: " VF Gutter",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/VFGutter/VFGutter_1.jpg",
          "/goomorproductimage/StratCo/RainWater/VFGutter/VFGutterAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco VF Gutter is a high-performance gutter that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.55 mm",
              "Tensile Strength": "G300",
              "Product Coating": "AZ150",
              "Product Weight": "1.620 KG/LM",
          },
      },
      colors: [
          ...ColorBondColors,
          ...StratCoColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
          "/goomorproductimage/StratCo/RainWater/VFGutter/PDF/VFGutter.pdf",
      ],
      relatedProducts: [ "vfguttersaccessories" ],
      flashing: [],
  },
  {
      id: "scdownpipes",
      title: " Downpipes",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/RainWater/DownPipes/RoundDownPipes_1.jpg",
          "/goomorproductimage/StratCo/RainWater/DownPipes/SquareDownPipes_1.jpg",
          "/goomorproductimage/StratCo/RainWater/DownPipes/DownPipesAccessories.jpg",
      ],
      highlightDetails: {
          features: [
              "Lightweight and easy to handle",
              "Cost-effective to use and quick to install",
          ],
          productInfo: "Stratco Round Downpipes is a high-performance downpipe that offers a sleek and modern look.",
          specifications: {
              "Base Metal Thickness": "0.4 mm",
              "Tensile Strength": "G300",
              "Product Coating": "AZ150",
              "Diameter": "90, 100 mm",
          },
      },
      colors: [
          ...ColorBondColors,
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "downpipeaccessories"],
      flashing: [],
  },
  //accessories
  {
      id: "cooldekfasteners",
      title: " Cooldek Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Cooldek+Accessories/Fasterners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Cooldek",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/PDF/cooldek_design_guide.pdf",
          "/goomorproductimage/StratCo/Roofing/CoolDek/PDF/CoolDek.pdf",
      ],
      relatedProducts: [ "cooldek",],
      flashing: [],
  },
  {
      id: "corrugatedfasteners",
      title: " Corrugated Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Corrugated+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Corrugated",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/Roofing/Corrugated/PDF/Corrugated.pdf",
      ],
      relatedProducts: [ "corrugated",],
      flashing: [],
  },
  {
      id: "horizon290fasteners",
      title: " Horizon 290 Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Horizon290+Accessories/Items.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Horizon 290",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "horizon290",],
      flashing: [],
  },
  {
      id: "prodekfasteners",
      title: " Prodek Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Prodek+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Prodek",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/Roofing/ProDek/PDF/ProDek.pdf",
          ],
      relatedProducts: [ "prodek",],
      flashing: [],
  },
  {
      id: "smartpanfasteners",
      title: " Smartpan Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Smartpan+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Smartpan",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/Roofing/SmartPan/PDF/SmartPan.pdf",
      ],
      relatedProducts: [ "smartpan",],
      flashing: [],
  },
  {
      id: "superdekfasteners",
      title: " Superdek Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Superdek+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Superdek",
          specifications: {
          },
      },  
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/Roofing/SuperDek/PDF/SuperDek.pdf",
      ],
      relatedProducts: [ "superdek",],
      flashing: [],
  },
  {
      id: "topdekaccessories",
      title: " Topdek Accessories",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Topdek+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Topdek+Accessories/Items2.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Topdek",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "topdek700","topdekfasteners"],
      flashing: [],
  },
  {
      id: "topdekfasteners",
      title: " Topdek Fasteners",
      type: "roofing",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Topdek+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Topdek",
          specifications: {
          },
      },
      colors: [
      ],  
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
          "/goomorproductimage/StratCo/Roofing/TopDek700/PDF/TopDek.pdf"
      ],
      relatedProducts: [ "topdek700","topdekaccessories"],
      flashing: [],
  },
  {
      id: "cgiminifasteners",
      title: " CGIMini Fasteners",
      type: "walling",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/CGIMini+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              
          ],
          productInfo: "Fasteners screws for CGIMini",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "cgimini"],
      flashing: [],
  },
  {
      id: "maxiribfasteners",
      title: " Maxirib Fasteners",
      type: "walling",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Maxirib+Accessories/Fasteners.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Fasteners screws for Maxirib",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf",
      ],
      relatedProducts: [ "maxirib"],
      flashing: [],
  },
  {
    id: "lysaght-panelrib",
    title: "PanelRib",
    type: "walling",
    model: "",
    carouselImages: [
      "/goomorproductimage/Lysaght/PanelRib/PanelRib_1.png",
      "https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46986.jpg?itok=TOW1LBGk",
      "https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46984.jpg?itok=5KVSvOPA",
    ],
    highlightDetails: {
      features: [
        "Durable and lightweight",
        "Low-maintenance",
        "Perfect for outdoor and indoor applications"
      ],
      productInfo: "Lysaght PanelRib is an advanced walling solution that combines durability with a sleek modern look. It is ideal for applications requiring both strength and aesthetic appeal.",
      specifications: {
        "Nominal Cover Width": "250mm",
        "Nominal Rib Height": "45mm",
        "Base Metal Thickness": "0.42mm",
        "Minimum Roof Slope": "1.3° to 2°",
        "Suitable For": "Walling",
      },
    },
    colors: [
      { name: "Dover White", hex: "#F9FBF1" },
      { name: "Surfmist", hex: "#E4E2D5" },
      { name: "Evening Haze", hex: "#C5C2AA" },
      { name: "Classic Cream", hex: "#E9DCB8" },
      { name: "Paperbark", hex: "#CABFA4" },
      { name: "Dune", hex: "#B1ADA3" },
      { name: "Southerly", hex: "#D2D1CB" },
      { name: "Shale Grey", hex: "#BDBFBA" },
      { name: "Bluegum", hex: "#969799" },
      { name: "Windspray", hex: "#888B8A" },
      { name: "Gully", hex: "#857E73" },
      { name: "Jasper", hex: "#6C6153" },
      { name: "Wallaby", hex: "#7F7C78" },
      { name: "Basalt", hex: "#6D6C6E" },
      { name: "Woodland Grey", hex: "#4B4C46" },
      { name: "Monument", hex: "#323233" },
      { name: "Night Sky", hex: "#000000" },
      { name: "Ironstone", hex: "#3E434C" },
      { name: "Deep Ocean", hex: "#364152" },
      { name: "Cottage Green", hex: "#304C3C" },
      { name: "Pale Eucalypt", hex: "#7C846A" },
      { name: "Manor Red", hex: "#5E1D0E" }
    ],
    doubleside: [],
    finishes: [],
    learnMoreLinks: ["https://cdn.dcs.lysaght.com/download/walling-solutions",
      "/goomorproductimage/Lysaght/PDF/MultiClad_accessories.pdf",
    ],
    relatedProducts: [],
    flashing: [
      "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ValleyGutter.png",
      "/goomorproductimage/Flashing/Lysaght/StandardFlashing/Ridge+Capping.png",
      "/goomorproductimage/Flashing/Lysaght/StandardFlashing/BargeGutter.png",
      "/goomorproductimage/Flashing/Lysaght/StandardFlashing/ApronFlashing.png",
      "/goomorproductimage/Flashing/Lysaght/StandardFlashing/TileFlashing.png",
    ],
  },
  {
    id: "lysaght-multi-clad",
    title: "MultiClad",
    model: "",
    type: "walling",
    carouselImages: [
      "/goomorproductimage/Lysaght/MultiClad/MultiClad_1.png",
      "https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46986.jpg?itok=TOW1LBGk",
      "https://lysaght.com/sites/default/files/styles/max_1300x1300/public/2022-06/46984.jpg?itok=5KVSvOPA",
    ],
    highlightDetails: {
      features: [
        "An efficient walling profile thanks to its lightness and broad cover width, MULTICLAD® is an ideal wall cladding for sheds & garages.",
        "The profile features raised rib sections of two varying heights across the sheet width, providing an attractive appearance.",
        "MULTICLAD® is an ideal wall cladding profile option when an inexpensive, lightweight and quick-to-install cladding is required.",
      ],
      productInfo:
        "MULTICLAD® is an efficient walling profile thanks to its lightness and broad cover width, making it an ideal wall cladding for sheds & garages. The profile features raised rib sections of two varying heights across the sheet width, providing an attractive appearance. MULTICLAD® is an ideal wall cladding profile option when an inexpensive, lightweight and quick-to-install cladding is required.",
      specifications: {
        "Nominal Cover Width": "840mm",
        "Nominal Rib Height": "12mm",
        "Base Metal Thickness": " 0.35 or 0.42mm",
        "Suitable For": "Walling",
      },
    },
    colors: [
      { name: "Dover White", hex: "#F9FBF1" },
      { name: "Surfmist", hex: "#E4E2D5" },
      { name: "Evening Haze", hex: "#C5C2AA" },
      { name: "Classic Cream", hex: "#E9DCB8" },
      { name: "Paperbark", hex: "#CABFA4" },
      { name: "Dune", hex: "#B1ADA3" },
      { name: "Southerly", hex: "#D2D1CB" },
      { name: "Shale Grey", hex: "#BDBFBA" },
      { name: "Bluegum", hex: "#969799" },
      { name: "Windspray", hex: "#888B8A" },
      { name: "Gully", hex: "#857E73" },
      { name: "Jasper", hex: "#6C6153" },
      { name: "Wallaby", hex: "#7F7C78" },
      { name: "Basalt", hex: "#6D6C6E" },
      { name: "Woodland Grey", hex: "#4B4C46" },
      { name: "Monument", hex: "#323233" },
      { name: "Night Sky", hex: "#000000" },
      { name: "Ironstone", hex: "#3E434C" },
      { name: "Deep Ocean", hex: "#364152" },
      { name: "Cottage Green", hex: "#304C3C" },
      { name: "Pale Eucalypt", hex: "#7C846A" },
      { name: "Manor Red", hex: "#5E1D0E" }
    ],
    doubleside: [],
    learnMoreLinks: ["https://cdn.dcs.lysaght.com/download/walling-solutions",
      "/goomorproductimage/Lysaght/PDF/MultiClad_accessories.pdf",
    ],
    relatedProducts: ["multicladfastener"],
    flashing: [],
  },
  {
      id: "fasciaaccessories",
      title: " Fascia Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items4.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items5.png",
          "/goomorproductimage/StratCo/Accessories/Fascia+Accessories/Items6.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Fascia",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "fascia&cover"],
      flashing: [],
  },
  {
      id: "edgeguttersaccessories",
      title: " Edge Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Edgegutter+Accessories/Items.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Edge Gutters",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "edge-gutter"],
      flashing: [],
  },
  {
      id: "halfroundaccessories",
      title: " Halfround Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items4.png",
          "/goomorproductimage/StratCo/Accessories/Halfround+Accessories/Items5.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Halfround",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],   
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "half-round-gutter"],
      flashing: [],   
  },
  {
      id: "quadaccessories",
      title: " Quad Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items4.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items5.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items6.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items7.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items8.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items9.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items10.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items11.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items12.png",
          "/goomorproductimage/StratCo/Accessories/Quad+Accessories/Items13.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Quad gutter",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "hi-front-gutter"],
      flashing: [],
  },
  {
      id: "ogguttersaccessories",
      title: " OG Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items4.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items5.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items6.png",
          "/goomorproductimage/StratCo/Accessories/Oggutter+Accessories/Items7.png",
      ],  
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for OG Gutters",
          specifications: {
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "og-gutter"],
      flashing: [],
  },
  {
      id: "smoothlineaccessories",
      title: " Smoothline Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Smoothline+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Smoothline+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Smoothline+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Smoothline+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Smoothline+Accessories/Items4.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Smoothline",
          specifications: {
          },
      },  
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],
      relatedProducts: [ "smoothline"],
      flashing: [],   
  },
  {
      id: "vfguttersaccessories",
      title: " VF Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Vfgutter+Accessories/Items.png",
          "/goomorproductimage/StratCo/Accessories/Vfgutter+Accessories/Items1.png",  
          "/goomorproductimage/StratCo/Accessories/Vfgutter+Accessories/Items2.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for VF Gutters",
          specifications: {   
          },
      },
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],  
      relatedProducts: [ "vf-gutter"],
      flashing: [],
  },
  {
      id: "downpipeaccessories",
      title: " Downpipe Accessories",
      type: "guttering",
      model: "",
      carouselImages: [
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items1.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items2.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items3.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items4.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items5.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items6.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items7.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items8.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items9.png",
          "/goomorproductimage/StratCo/Accessories/Downpipe+Accessories/Items10.png",
      ],
      highlightDetails: {
          features: [
              ,
          ],
          productInfo: "Accessories for Downpipe",
          specifications: {
          },
      },  
      colors: [
      ],
      doubleside: [],
      finishes: [],
      learnMoreLinks: [
          "/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf",
      ],      
      relatedProducts: [ "scdownpipes"],
      flashing: [],
  },

  
];

module.exports = StratCoProductDetail;