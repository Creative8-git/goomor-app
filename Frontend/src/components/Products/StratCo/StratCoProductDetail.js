// src/data/productData.js

// src/data/productData.js


export const ColorBondColors = [
    { name: 'Dover White - Snow Drift', hex: '#F9FBF1' },
            { name: 'Surfmist - Off White', hex: '#E4E2D5' },
            { name: 'Evening Haze - Moss Vale Sand', hex: '#C5C2AA' },
            { name: 'Classic Cream - Smooth Cream', hex: '#E9DCB8' },
            { name: 'Paperbark - Merino', hex: '#CABFA4' },
            { name: 'Dune - Birch', hex: '#B1ADA3' },
            { name: 'Southerly - Lunar Grey', hex: '#D2D1CB' },
            { name: 'Shale Grey - Gull Grey', hex: '#BDBFBA' },
            { name: 'Bluegum', hex: '#969799' },
            { name: 'Windspray - Armour Grey', hex: '#888B8A' },
            { name: 'Gully - Driftwood', hex: '#857E73' },
            { name: 'Jasper - Banyan Brown', hex: '#6C6153' },
            { name: 'Wallaby - Cobble Stone', hex: '#7F7C78' },
            { name: 'Basalt - Granite', hex: '#6D6C6E' },
            { name: 'Woodland Grey - Slate Grey', hex: '#4B4C46' },
            { name: 'Monument - Gun Metal Grey', hex: '#323233' },
            { name: 'Night Sky - Ebony', hex: '#000000' },
            { name: 'Ironstone - Dark Stone', hex: '#3E434C' },
            { name: 'Deep Ocean - Mountain Blue', hex: '#364152' },
            { name: 'Cottage Green - Caulfield Green', hex: '#304C3C' },
            { name: 'Pale Eucalypt - Mist Green', hex: '#7C846A' },
            { name: 'Manor Red - Heritage Red', hex: '#5E1D0E' },
];
export const StratCoColors = [
    { name: 'Federation Cream', hex: '#FFFDD0' },
    { name: 'Thredbo White', hex: '#F3F4EF' },
]

export const StratCoHorizon290 = [
    { name: 'Paperbark - Merino', hex: '#CABFA4' },
    { name: 'Woodland Grey - Slate Grey', hex: '#4B4C46' },
    { name: 'Domain - Primrose', hex: '#E8DBAE' },
]

export const FasciaCover = [
    { name: 'Dune - Birch', hex: '#B1ADA3' },
    { name: 'Shale Grey - Gull Grey', hex: '#BDBFBA' },
    { name: 'Cottage Green - Caulfield Green', hex: '#304C3C' },
    { name: 'Manor Red - Heritage Red', hex: '#5E1D0E' },
    { name: 'Paperbark - Merino', hex: '#CABFA4' },
    { name: 'Surfmist - Off White', hex: '#E4E2D5' },
]
export const ContourFasciaColors = [
    {name: 'Pale Eucalypt - Mist Green', hex: '#7C846A'},
]

export const Copper = [
    { name: 'Copper', hex: '#b87333' },
]
export const FederationGreen = [
    { name: 'Federation Green', hex: '#34350' },
]
export const products = [

    //roofing
    {
        id: 'corrugated',
        title: 'Stratco Corrugated Roofing',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/Roofing/Corrugated/CGI.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Corrugated cladding is a traditional roofing profile enhanced by modern materials and finishes.',
            specifications: {
                'Profile Height': '16mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '4.300 KG/M2',
                'Effective Cover': '762.0 mm',
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id: 'horizon290',
        title: 'Stratco Horizon 290',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/images/stratco-logo.svg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Horizon 290 is a high-performance roofing profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '50 mm',
                'Base Metal Thickness': '0.42 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '5.677 KG/M2',
                'Effective Cover': '290.0 mm',
            },
        },
        colors: [
            ...StratCoHorizon290,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id:'prodek',
        title: 'Stratco Prodek',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/Roofing/ProDek/ProDek_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Prodek is a high-performance roofing profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '50 mm',
                'Base Metal Thickness': '0.42,0.48 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '5.000 KG/M2',
                'Effective Cover': '650.0 mm',  
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id: 'smartpan',
        title: 'Stratco smartpan',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/Roofing/SmartPan/SmartPan_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco smartpan is a high-performance roofing profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '24 mm',
                'Base Metal Thickness': '0.42 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '4.700 KG/M2',
                'Effective Cover': '700.0 mm',  
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id: 'superdek',
        title: 'Stratco Superdek',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/Roofing/SuperDek/SuperDek_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Superdek is a high-performance roofing profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '28 mm',
                'Base Metal Thickness': '0.42, 0.48 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '4.300 KG/M2',
                'Effective Cover': '762.0 mm',
            },  
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id:'topdek700',
        title: 'Stratco Topdek 700',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/Roofing/TopDek700/TopDek700_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Topdek 700 is a high-performance roofing profile that offers a sleek and modern look.',
            
            specifications: {
                'Profile Height': '42 mm',
                'Base Metal Thickness': '0.42, 0.48 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '4.700 KG/M2',
                'Effective Cover': '700.0 mm',  
            },
        },  
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],

    },


    //Wall cladding
    {
        id:'cgimini',
        title: 'Stratco CGI Mini',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/WallCladding/CGIMini/CGIMini_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco CGI Mini is a high-performance wall cladding profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '6 mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '4.000 KG/M2',
                'Effective Cover': '825.0 mm',
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    {
        id:'maxirib',
        title: 'Stratco MaxiRib',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/WallCladding/MaxiRib/MaxiRib_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco MaxiRib is a high-performance wall cladding profile that offers a sleek and modern look.',
            specifications: {
                'Profile Height': '4 mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '3.800 KG/M2',
                'Effective Cover': '850.0 mm',
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Roofing%26Cladding.pdf',
        ],
    },
    
    //fascia and Gutters
    {
        id:'contourfascia',
        title: 'Stratco Contour Fascia',
        type: 'fascia',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/ContourFascia/ContourFascia.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Contour Fascia is a high-performance fascia profile that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.45 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '1.064 KG/LM',    
            },
        },
        colors: [
            ...ContourFasciaColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'fascia-cover',
        title: 'Stratco Fascia Cover',
        type: 'fascia',
        model: '',
        carouselImages: [
            '/images/stratco-logo.svg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Fascia Cover is a high-performance fascia cover that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.55 mm',
                'Tensile Strength': 'G300',
                'Product Coating': 'AZ150',    
            },
        },
        colors: [
            ...FasciaCover,
        ],  
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'edge-gutter',   
        title: 'Stratco Edge Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/EdgeGutter/EdgeGutter_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Edge Gutter is a high-performance gutter profile that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.55 mm',
                'Tensile Strength': 'G300',
                'Product Coating': 'AZ150',
                'Product Weight': '1.960 KG/LM',    
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'half-round-gutter',
        title: 'Stratco Half Round Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/HalfRoundGutter/HalfRoundGutter_1.jpg',
        ], 
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Half Round Gutter is a high-performance gutter that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.45 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '1.187 KG/LM',    
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'hi-front-gutter',
        title: 'Stratco Hi Front Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/HiFrontGutter/HiFrontGutter_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Hi Front Gutter is a high-performance gutter that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.55 mm',
                'Tensile Strength': 'G300',
                'Product Coating': 'AZ150',
                'Product Weight': '1.960 KG/LM',    
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
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'og-gutter',
        title: 'Stratco OG Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/OGGutter/OGGutter_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco OG Gutter is a high-performance gutter that offers a sleek and traditional look.',
            specifications: {
                'Base Metal Thickness': '0.45 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '1.064 KG/LM',    
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'smoothline',
        title: 'Stratco Smoothline',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/SmoothLine/SmoothLine_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Smoothline is a high-performance gutter that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.45 mm',
                'Tensile Strength': 'G550',
                'Product Coating': 'AZ150',
                'Product Weight': '1.187 KG/LM',    
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'vf-gutter',
        title: 'Stratco VF Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/VFGutter/VFGutter_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco VF Gutter is a high-performance gutter that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.55 mm',
                'Tensile Strength': 'G300',
                'Product Coating': 'AZ150',
                'Product Weight': '1.620 KG/LM',    
            },
        },
        colors: [
            ...ColorBondColors,
            ...StratCoColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'round-downpipes',
        title: 'Stratco Round Downpipes',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/RoundDownPipes/RoundDownPipes_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Round Downpipes is a high-performance downpipe that offers a sleek and modern look.',
            specifications: {
                'Base Metal Thickness': '0.4 mm',
                'Tensile Strength': 'G300',
                'Product Coating': 'AZ150',
                'Diameter': '90, 100 mm',    
            },
        },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    },
    {
        id:'square-downpipes',
        title: 'Stratco Square Downpipes',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/StratCo/RainWater/SquareDownPipes/SquareDownPipes_1.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
            ],
            productInfo: 'Stratco Square Downpipes is a high-performance downpipe that offers a sleek and modern look.',
        
            specifications: {
                'Base Metal Thickness': '0.55 mm',
                'Size': '100X75, 100x50mm',
                'Material': 'COPPER',
            },
            },
        colors: [
            ...ColorBondColors,
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/StratCo/PDF/Guttering%26Fascia.pdf',
        ],
    }
];

