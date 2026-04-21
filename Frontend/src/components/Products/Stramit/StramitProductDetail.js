// src/data/productData.js

// src/data/productData.js

export const commonLinks = [
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-C-Design-Stramit-Cladding-Solutions-for-Region-C-March-2013.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-D-Design-Cyclonic-Battens-Stramit-Cladding-Solutions-for-Region-D-Feb-2013-6755.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Customer-Update-Region-D-Design-Stramit-Cladding-Solutions-for-Region-D-Feb-2013-6754.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Cyclonic-Areas-Roof-And-Wall-Cladding-Product-Technical-Design-Supplement.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Patio-Roofing-Cyclonic-Span-Tables.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Roof-And-Wall-Flashing-Architectural-Detailing-Design-Guide.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Patio-Roofing-Span-Tables-Brochure.pdf',
    '/goomorproductimage/Stramit/Roofing/CommonPDF/Stramit-Roof-Slope-Design-Guide-v2.pdf',
];
export const commonwallcladdingLinks = [
    '/goomorproductimage/Stramit/WallCladding/MonoPanel/PDF/Wall-Sheeting-And-Cladding-Central-Region-Product-Technical-Manual.pdf',
    '/goomorproductimage/Stramit/WallCladding/MonoPanel/PDF/Wall-Sheeting-and-Cladding-Southern-Region-Product-Technical-Manual.pdf',
    '/goomorproductimage/Stramit/WallCladding/KPanel/PDF/Wall-Sheeting-And-Cladding-Northern-Region-Product-Technnical-Manual.pdf',
    '/goomorproductimage/Stramit/WallCladding/KPanel/PDF/Wall-Sheeting-And-Cladding-Western-Region-Product-Technical-Manual.pdf',
    '/goomorproductimage/Stramit/WallCladding/MiniCorry/PDF/Cyclonic-Areas-Roof-And-Wall-Cladding-Product-Technical-Design-Supplement.pdf',
];

export const commonRainwaterLinks = [
    '/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Bat-Clip-Product-Installation-Supplement.pdf',
    '/goomorproductimage/Stramit/RainWater/QuadGutter/PDF/Stramit-Gutter-Spacer-Installation-DL.pdf',
    '/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Gutter-Overflow-Options-Technical-Supplement_AUG23.pdf',
    '/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Rainwater-Products-New-South-Wales-Product-Technical-Manual.pdf',
];

export const ColorBondColors = [
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

const filteredColors = ColorBondColors.filter(color => color.name !== 'Classic Cream');
export const products = [
    
    

    
    //roofing
    {
        id: 'corrugated-roofing',
        title: 'Stramit Corrugated Roofing',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/Roofing/Corrugated/Corrugated_1.svg',
            '/goomorproductimage/Stramit/Roofing/Corrugated/Corrugated_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Lightweight and easy to handle',
                'Cost-effective to use and quick to install',
                'Uses conventional through-fixed screws',
                'Available in an extensive range of colours'
            ],
            productInfo: 'Stramit Corrugated cladding is a traditional roofing profile enhanced by modern materials and finishes.',
            specifications: {
                'Nominal Cover Width': '762mm',
                'Nominal Rib Height': '16mm',
                'Base Metal Thickness': '0.42, 0.48, 0.60mm',
                'Rib Spacing': '76.2mm',
                'Minimum Roof Slope': '5°',
                'Suitable For': 'Roofing, Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/Roofing/Corrugated/PDF/Stramit-Corrugated-Product-Technical-Manual-APR24.pdf',
            ...commonLinks
        ],
    },
    {
        id: 'monoclad-roofing',
        title: 'Stramit Monoclad® Roofing',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/Roofing/MonoClad/MonoClad_1.svg',
            '/goomorproductimage/Stramit/Roofing/MonoClad/MonoClad_2.jpg',
        ],
        highlightDetails: {
            features: [
                '29mm ribs provide excellent spanning and water-carrying capacity',
                'Compatible Stramit Monolap® lap joint system allows for single plane, long run roofs',
                'Some system and span combinations certified to FM Global approval standard FM4471',
            ],
            productInfo: 'A balanced design of water-carrying capacity, wind load performance and simple fixing makes Monoclad cladding versatile to use.',
            specifications: {
                'Nominal Cover Width': '762mm',
                'Nominal Rib Height': '29mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Rib Spacing': '190mm',
                'Minimum Roof Slope': '2°',
                'Suitable For': 'Roofing, Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/Roofing/MonoClad/PDF/Stramit-Monoclad-Product-Technical-Manual-NOV23.pdf',
            '/goomorproductimage/Stramit/Roofing/MonoClad/PDF/Stramit-MonoSky-Installation-Supplement.pdf',
            ...commonLinks
        ],
    },
    {
        id: 'longspan-roofing',
        title: 'Stramit Longspan® Roofing',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/Roofing/LongSpan/LongSpan_1.svg',
            '/goomorproductimage/Stramit/Roofing/LongSpan/LongSpan_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Cost-effective to use and easy to install',
                'Architectural flexibility accommodates curved roofs',
                'Variable fixing screw patterns give design flexibility',
                'Suitable for wall cladding'
            ],
            productInfo: 'Longspan cladding is a high-performance roofing system that offers a combination of strength, durability, and aesthetic appeal.',
            specifications: {
                'Nominal Cover Width': '700mm',
                'Nominal Rib Height': '27mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Rib Spacing': '100mm',
                'Minimum Roof Slope': '3°',
                'Suitable For': 'Roofing, Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/Roofing/LongSpan/PDF/Stramit-LongSpan-Product-Technical-Manual-NOV23.pdf',
            ...commonLinks
        ],
    },
    {
        id: 'speed-deck-ultra',
        title: 'Stramit Speed Deck Ultra®',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/SpeedDeckUltra_1.svg',
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/SpeedDeckUltra_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Outstanding wind load resistance and water-carrying capacity',
                'Compatible Stramit Farlap® roof lap joint system gives a multiple sheet option for long length concealed fixed roofs',
                'Full length clips to correctly locate ribs and compress insulations',
                'Automatic bird proofing reduces need for extra components',
                'Australian design award winner'
            ],
            productInfo: 'Speed Deck Ultra is a high-performance roofing system that offers a combination of strength, durability, and aesthetic appeal.',
            specifications: {
                'Nominal Cover Width': '700mm',
                'Nominal Rib Height': '43mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Rib Spacing': '233mm',
                'Minimum Roof Slope': '1°',
                'Suitable For': 'Roofing, Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/PDF/SkyLap-Product-Installation-Supplement.pdf',
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/PDF/Stramit-Farlap-Product-Installation-Supplement.pdf',
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/PDF/Stramit-SkyLap-Joint-System-Installation-Supplement.pdf',
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/PDF/Stramit-Speed-Deck-Ultra-Installation-Procedure.pdf',
            '/goomorproductimage/Stramit/Roofing/SpeedDeckUltra/PDF/Stramit-Speed-Deck-Ultra-Product-Technical-Manual-APR24.pdf',
            ...commonLinks
        ],
    },
    {
        id: 'sunset-patio-panel',
        title: 'Stramit Sunset Patio Panel®',
        type: 'roofing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/Roofing/SunsetPatioPanel/SunsetPatioPanel_1.svg',
            '/goomorproductimage/Stramit/Roofing/SunsetPatioPanel/SunsetPatioPanel_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Unique design provides continuous surface for roof underside',
                'Interlocking panels provide strength and water-tight seal',
                'Can be supplied with beams and accessories',
                'Available with matching translucent panels',
            ],
            productInfo: 'The clean, glossy soffit lines of Stramit Patio Panels enhance any home with outdoor living areas.',
            specifications: {
                'Nominal Cover Width': '290mm',
                'Nominal Rib Height': '44mm',
                'Base Metal Thickness': '0.42mm',
                'Minimum Roof Slope': '2°',
                'Suitable For': 'Roofing',
            },
        },
        colors: [
            { name: 'Dover White', hex: '#F9FBF1' },
            { name: 'Surfmist', hex: '#E4E2D5' },
            { name: 'Classic Cream', hex: '#E9DCB8' },
            { name: 'Paperbark', hex: '#CABFA4' },
            { name: 'Woodland Grey', hex: '#4B4C46' },
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/Roofing/SunsetPatioPanel/PDF/Stramit-Sunset-Patio-Panels-Product-Technical-Manual-DEC23.pdf',
            '/goomorproductimage/Stramit/Roofing/SunsetPatioPanel/PDF/Stramit-Sunset-Patio-Roof-Panels-Flyer.pdf',
            ...commonLinks
        ],
    },

    //Wall cladding
    {
        id: 'mono-panel-wall-cladding',
        title: 'Stramit Monopanel® Wall Cladding',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/WallCladding/MonoPanel/MonoPanel_1.svg',
            '/goomorproductimage/Stramit/WallCladding/MonoPanel/MonoPanel_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Durable system of interlocking panels with fully concealed fasteners',
                'Suitable for horizontal and vertical applications',
                'Suitable for wall cladding'
            ],
            productInfo: 'Easy to use, Monopanel wall cladding features concealed fixing and traditional lines that enhance any house or shed.',
            specifications: {
                'Nominal Cover Width': '250mm',
                'Nominal Rib Height': '12.5mm',
                'Base Metal Thickness': '0.48mm',
                'Suitable For': 'Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/WallCladding/MonoPanel/PDF/Stramit-Architecural-Range-Brochure.pdf',
            ...commonwallcladdingLinks
        ],
    },
    {
        id: 'k-panel-wall-cladding',
        title: 'Stramit K-Panel® Wall Sheeting',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/WallCladding/KPanel/KPanel_1.svg',
            '/goomorproductimage/Stramit/WallCladding/KPanel/KPanel_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Wide cover makes cost-effective to use',
                'Quick to install with simple conventional fastening',
                'Lower profile facilitates smaller flashings for small projects'
            ],
            productInfo: 'A low profile, K-Panel wide cover cladding is ideal for smaller buildings and sheds.',
            specifications: {
                'Nominal Cover Width': '864mm',
                'Nominal Rib Height': '12mm',
                'Base Metal Thickness': '0.35, 0.42mm',
                'Suitable For': 'Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonwallcladdingLinks
        ],
    },
    {
        id: 'monoclad-wall-sheeting',
        title: 'Stramit Monoclad® Wall Sheeting',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/WallCladding/MonoCladSheeting/MonoCladSheeting_1.svg',
            '/goomorproductimage/Stramit/WallCladding/MonoCladSheeting/MonoCladSheeting_2.jpg',
        ],
        highlightDetails: {
            features: [
                '29mm ribs provide excellent spanning capacity',
                'Low weight for easy installation',
                'Suitable for wall cladding'
            ],
            productInfo: 'A strong and economical profile, Monoclad wall sheeting is ideal for industrial or agricultural buildings.',
            specifications: {
                'Nominal Cover Width': '762mm',
                'Nominal Rib Height': '29mm',
                'Nominal Rib Spacing': '190mm',
                'Base Metal Thickness': '0.35mm',
                'Suitable For': 'Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/WallCladding/MonoClad/PDF/Stramit-Monoclad-Product-Technical-Manual-NOV23.pdf',
            ...commonwallcladdingLinks
        ],
    },
    {
        id: 'mini-corry',
        title: 'Stramit Mini Corry® Wall Cladding',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/WallCladding/MiniCorry/MiniCorry_1.svg',
            '/goomorproductimage/Stramit/WallCladding/MiniCorry/MiniCorry_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Small rib size visually complements Stramit®Corrugated roof sheeting',
                'Conventional fixing for quick installation and seamless finish',
                'Roll formed to deliver consistent profile and lengths made to order'
            ],
            productInfo: 'A corrugated look-a-like, Mini Corry is a versatile wall cladding that brings architectural features to life.',
            specifications: {
                'Nominal Cover Width': '825mm',
                'Nominal Rib Height': '6mm',
                'Base Metal Thickness': '0.42, 0.48mm',
                'Suitable For': 'Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonwallcladdingLinks
        ],
    },
    {
        id: 'mini-rib',
        title: 'Stramit Mini Rib® Wall Cladding',
        type: 'walling',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/WallCladding/MiniRib/MiniRib_1.svg',
            '/goomorproductimage/Stramit/WallCladding/MiniRib/MiniRib_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Ideal for internal wall linings, fascias, eaves, transport siding and transportable buildings',
                'Conventional fixing makes it quick to install',
                'Stramit’s widest cover cladding'
            ],
            productInfo: 'The wide cover and low rib height of Minirib makes for near-flat panelling suitable for a range of applications.',
            specifications: {
                'Nominal Cover Width': '900mm',
                'Nominal Rib Height': '4mm',
                'Base Metal Thickness': '0.35, 0.42mm',
                'Suitable For': 'Walling',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/WallCladding/MiniRib/PDF/Customer-Update-Region-D-Design-Wall-Cladding-Minirib-with-Miniseam-June-2012-W.pdf',
            ...commonwallcladdingLinks
        ],
    },

    //Rainwater Products
    {
        id: 'fascia',
        title: 'Stramit® Fascia',
        type: 'fascia',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/MetalFascia/MetalFascia_1.svg',
            '/goomorproductimage/Stramit/RainWater/MetalFascia/MetalFascia_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Made of hi-tensile steel and provide continuous support',
                'Suit any style of home, from heritage and traditional to the most modern of contemporary designs',
                'Specifically developed fascia solution to support Western Australia gutters'
            ],
            productInfo: 'The simple yet elegant lines of Stramit Fascia products ensure your gutter solution remains straight and true.',
            specifications: {
                'Nominal Fascia Width': '33mm',
                'Nominal Fascia Height': '189mm',
                'Suitable For': 'Fascia',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            '/goomorproductimage/Stramit/RainWater/MetalFascia/PDF/Stramit-Fascia-Installation-Procedure.pdf',
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'capping',
        title: 'Stramit® Capping',
        type: 'flashing',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/Capping/Capping_1.svg',
            '/goomorproductimage/Stramit/RainWater/Capping/Capping_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Capping sections are available with most Stramit® Square Gutters to maintain the sight lines in both fascia and barge areas',
                'Made in matching materials and finishes to the selected gutter',
                'Alternative custom-made flashings are also suitable for capping applications'
            ],
            productInfo: 'An essential rainwater product accessory, Stramit Capping products maintain roof sight lines while providing added protection.',
            specifications: {
                'Nominal Capping Width': '125mm',
                'Nominal Capping Height': '138mm',
                'Suitable For': 'Fascia',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'quad-gutter',
        title: 'Stramit® Quad Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/QuadGutter/QuadGutter_1.svg',
            '/goomorproductimage/Stramit/RainWater/QuadGutter/QuadGutter_2.svg',
            '/goomorproductimage/Stramit/RainWater/QuadGutter/QuadGutter_3.jpg',
        ],
        highlightDetails: {
            features: [
                'Available in a range of sizes to handle rainfall levels in your area',
                'Overflow slots are available on request',
                'Complete range of guttering accessories also available'
            ],
            productInfo: 'Classic in design, Stramit Quad gutter profiles work well with traditional or contemporary homes.',
            specifications: {
                'Nominal Gutter Width': '117mm for Hi-Front and 115mm for Low-Front',
                'Nominal Gutter Height': '89mm for Hi-Front and 70mm for Low-Front',
                'Nominal Gutter Back Height': '57mm for Hi-Front and 54mm for Low-Front',
                'Suitable For': 'Guttering',
            },
        },
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'o-gee',
        title: 'Stramit® O-Gee',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/OGee/OGee_1.svg',
            '/goomorproductimage/Stramit/RainWater/OGee/OGee_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Heritage design suitable for the older-style house',
                'Economical to use',
                'Pairs with a full range of accessories'
            ],
            productInfo: 'A traditional architectural shape, the O-Gee gutter is the perfect gutter profile for Australian heritage homes.',
            specifications: {
                'Nominal Gutter Width': '154mm',
                'Nominal Gutter Height': '75mm',
                'Nominal Gutter Back Height': '93mm',
                'Suitable For': 'Guttering',
            },
        },
        colors: [   
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'triline',
        title: 'Stramit® Triline',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/TriLine/TriLine_1.svg',
            '/goomorproductimage/Stramit/RainWater/TriLine/TriLine_2.jpg',
        ],
        highlightDetails: {
            features: [
                'Stramit Square gutter range offers unique and stylish gutters for home improvements through to commercial projects.',
                'Easy to install, with concealed brackets or snap clips',
                'Can come with slots to help stormwater overflow',
                'Matching cappings for continuous sight lines'
            ],
            productInfo: 'Stramit Square gutter range offers unique and stylish gutters for home improvements through to commercial projects.',
            specifications: {
                'Nominal Gutter Width': '123mm',
                'Nominal Gutter Front Height': '140mm',
                'Nominal Gutter Back Height': '88mm',
                'Suitable For': 'Guttering',
            },
        },  
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],  
    },
    {
        id: 'half-round',
        title: 'Stramit® Half Round 150mm Gutter',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/HalfRound/HalfRound_1.svg',
            '/goomorproductimage/Stramit/RainWater/HalfRound/HalfRound_2.jpg',
        ],
        highlightDetails: {
            features: [
                'High water-carrying capacity',
                'High water-carrying capacity',
                'High water-carrying capacity',
                'Available with external brackets only brackets snap clip to Stramit® Fascia on certain profiles'
            ],
            productInfo: 'The classic lines of the Stramit Half Round gutters enhance any architectural design.',
            specifications: {
                'Nominal Gutter Width': '163mm',
                'Nominal Gutter Front Height': '104mm',
                'Nominal Gutter Back Height': '79mm',
                'Suitable For': 'Guttering',
            },
        },  
        colors: [
            ...filteredColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'square-downpipe',
        title: 'Stramit® Square Downpipe',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/SquareDownPipes/SquareDownPipes_1.svg',
            '/goomorproductimage/Stramit/RainWater/RoundDownPipes/SquareDownPipes_2.png',
        ],
        highlightDetails: {
            features: [
                'Available in lengths up to 2.4m and 3.0m in some regions',
                'Rectangular and tapered round options with crush-folded lock seam',
                'Astragals, shoes, elbows and other fabricated shapes are available to order.'
            ],
            productInfo: 'Stramit Downpipes are made in a range of profiles to blend seamlessly with your roofing solution.',
            specifications: {
                'Available Dimentions': '100x50mm, 100x75mm',
                'Suitable For': 'Guttering',
            },
        },              
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    },
    {
        id: 'round-downpipe',
        title: 'Stramit® Round Downpipe',
        type: 'guttering',
        model: '',
        carouselImages: [
            '/goomorproductimage/Stramit/RainWater/RoundDownPipes/RoundDownPipes_1.svg',
            '/goomorproductimage/Stramit/RainWater/RoundDownPipes/SquareDownPipes_2.png',
        ],
        highlightDetails: {
            features: [
                'Available in lengths up to 2.4m and 3.0m in some regions',
                'Rectangular and tapered round options with crush-folded lock seam',
                'Astragals, shoes, elbows and other fabricated shapes are available to order.'
            ],
            productInfo: 'Stramit Downpipes are made in a range of profiles to blend seamlessly with your roofing solution.',
            specifications: {
                'Available Diameters': '90mm, 100mm',
                'Suitable For': 'Guttering',
            },
        },              
        colors: [
            ...ColorBondColors
        ],
        doubleside: [],
        finishes: [],
        learnMoreLinks: [
            ...commonRainwaterLinks
        ],
    }
];

