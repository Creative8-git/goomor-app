import React, { useState } from "react";
import AboutSupplier from "./Supplier/AboutSupplier";

const suppliers = [
  {
    name: "Colorbond",
    cssClass: "Colorbond",
    placement: 1,
    logo: "images/colorbond-logo.svg",
    title: "Why Colorbond",
    description:
      "Tested and refined for over 50 years in some of Australia’s most challenging environments. Inspired by the natural colours and forms of its most unique landscapes. Lived in and relied on by generations of Australians, past and future.",
    backgroundImage:
      "https://colorbond.com/sites/default/files/styles/wide/public/media/why.png?itok=rtOCkO4x",
    link: "/ColorBondProduct"
      
  },
  {
    name: "Stratco",
    cssClass: "Stratco",
    placement: 6,
    logo: "images/stratco-logo.svg",
    title: "Choose Stratco",
    description:
      "Stratco takes great pride in the safety, capability and presentation standard of all manufacturing facilities and the equipment installed in these locations. The company’s continual investment in plant and equipment coupled with the design and manufacturing capabilities of the engineering support team has ensured that leading edge technology is present in all manufacturing facilities.",
    backgroundImage:
      "https://cdn2.hubspot.net/hubfs/479885/Higgins%20Projects%20-%20New/National%20Projects/Stratco%203.jpg",
    link: "/stratco"
  },
  {
    name: "Versiclad",
    cssClass: "Versiclad",
    placement: 3,
    logo: "images/versiclad-logo.svg",
    title: "Think Versiclad",
    description:
      "Versiclad is the leading brand of high performance insulated roofing panels used in various architectural, design, residential and industrial applications. Our roofing panels provide a weather tight cover, outstanding insulation, and a pre-finished maintenance free ceiling that will deliver a comfortable atmosphere all year round.",
    backgroundImage:
      "https://versiclad.com.au/wp-content/uploads/2023/01/Creative-Homes_Picton-3-scaled-e1675055927470.jpg",
    link: "/versiclad"
  },
  {
    name: "Bondor",
    cssClass: "Bondor",
    placement: 4,
    logo: "images/bondor-logo.png",
    title: "About Bondor",
    description:
      "Bondor® has been the market leader and driver of innovation and change in the Australian insulated panel sector for over 65 years. Recently, Bondor® has taken this experience and applied it to wider market opportunities developing a range of light weight structural insulated panels for wall, roof and architectural applications using proven core material technology, that is tested and compliant with Australian Standards. With a strict product testing regime using NATA Certified laboratories, Bondor® prides itself in providing its customers with the confidence and assurance of consistent quality, performance and standards based insulated panel products for Australian conditions.",
    backgroundImage:
      "https://bondor.com.au/wp-content/uploads/2021/06/M3A3905_0-1.jpg",
    link: "/bondor"
  },
  {
    name: "Laserlite",
    cssClass: "Laserlite",
    placement: 9,
    logo: "images/laserlite-logo.svg",
    title: "Choose Laserlite",
    description:
      "Established in 2020, Laserlite Building Products is a merger of Mulford Building Products, Galaxy Rooflite and more recently, FGW Corporation. Laserlite Building Products Services all regions across Australia with 10 Distribution centres, 2 Fibreglass Manufacturing Plants along with a large National reseller network stocking market-leading roofing brands including Laserlite® Polycarbonate and Topglass® Fibreglass sheeting. With over 1075 resellers Australia-wide, Laserlite Building Products is well positioned to meet the needs of its customers and has a product to suit your next project.",
    backgroundImage:
      "https://laserlite.com.au/wp-content/uploads/2022/03/LL2000.-scaled.jpg",
    
  },
  {
    name: "Lysaght",
    cssClass: "Lysaght",
    placement: 2,
    logo: "images/lysaght-logo.svg",
    title: "About Lysaght",
    description:
      "Lysaght is a business of BlueScope in Australia and has been manufacturing steel building products for residential and non-residential projects across Australia for over 150 years. Throughout this long history, Lysaght is well know for the extensive technical expertise offered by our people across a national network of locations Australia-wide.",
    backgroundImage:
      "https://lysaght.com/sites/default/files/styles/792xauto/public/pictures/hero-19.jpg?itok=Yh4Bf-Fr",
    link: "/lysaght"
  },
  {
    name: "Metroll",
    cssClass: "Metroll",
    placement: 7,
    logo: "images/metroll-logo.jpg",
    title: "Why Metroll",
    description:
      "Metroll plays a key role in Australia’s built environment by offering a wide range of building products and building solutions for households, commercial, industrial, government and rural structures.",
    backgroundImage:
      "https://www.metroll.com.au/wp-content/uploads/resources_page_banner-ovl.png",
    link: "/metroll"
    
  },
  {
    name: "Ampelite",
    cssClass: "Ampelite",
    placement: 8,
    logo: "images/ampelite-logo.gif",
    title: "About Ampelite",
    description:
      "Ampelite Australia Pty Ltd is a leading provider of high-quality roofing and building solutions in Australia. With a commitment to innovation and excellence, we specialize in manufacturing and distributing a wide range of products including fiberglass and polycarbonate roofing, skylights, and architectural panels. Our products are trusted by builders, architects, and engineers alike for their durability, versatility, and aesthetic appeal.",
    backgroundImage:
      "https://www.ampelite.com.au/wp-content/uploads/2019/09/Thermoclick-Melbourne-Jet-Base.jpg",
    link: "/ampelite"
  },
  {
    name: "Palram",
    cssClass: "Palram",
    placement: 5,
    logo: "images/palram-logo.webp",
    title: "About Palram",
    description:
      "For over 60 years, Palram has continually pushed the limits of thermoplastic technology to solve emerging market challenges. Today, our products are used in countless applications around the world – from stadiums and airports to agricultural facilities, commercial buildings, and private residences. Whether you’re a builder, fabricator, architect, printer, or even a homeowner interested in DIY projects, Palram’s range of polycarbonate and PVC solutions will help make your vision a reality. Together, we will Build On.",
    backgroundImage:
      "https://www.palram.com/au/wp-content/uploads/sites/3/2019/06/Pergola-1.jpg",
    link: "/palram"
  },
  {
    name: "Stramit",
    cssClass: "Stramit",
    placement: 10,
    logo: "images/stramit-logo.svg",
    title: "About Palram",
    description:
      "We’re one of Australia’s leading manufacturers and suppliers of roll formed steel building products – and for good reason.",
    backgroundImage:
      "https://www.stramit.com.au/assets/Banner-images/e26edd6074/About-Stramit-Employee.jpg",
    link: "/stramit"  
  },
  {
    name: "Wakaflex",
    cssClass: "Wakaflex",
    placement: 11,
    logo: "images/wakaflex-logo.png",
    title: "About Wakaflex",
    description:
      "Established in 2004 (under the Combined Group of Companies) we are a leading national supplier of innovative building and roofing products throughout Australia. Evobuilds lead-free flashing range is the most comprehensive available in the Australian market and directly reflects the relevance of this growing category. The launch of Wakaflex, currently the leading lead-free roof flashing solution, has allowed us to grow and develop our focus on providing next-generation building solutions through a network of national resellers. We will continue to bring the Australian building industry the best time and labour saving roofing products and building materials available from around the world.",
    backgroundImage:
      "https://wakaflex.com.au/wp-content/uploads/2021/03/5.jpg",
    
  },
  {
    name: "Trifixx",
    cssClass: "Trifixx",
    placement: 12,
    logo: "images/trifix-logo.svg",
    title: "About Trifixx",
    description:
      "With almost 35 years of experience servicing and supplying fasteners to the Australian construction and industrial markets, Tri-Fixx has formed an industry leading reputation and commitment to Fasteners On Site On Time. From the demands of high moving production lines to CBD high rise construction sites, Tri-Fixx is your fastener solution.",
    backgroundImage:
      "https://trifixx.com.au/wp-content/uploads/2019/12/History-Trevor-Web-1024x680.jpg",
    
  },
];

const SupplierTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add window resize listener
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sort suppliers by placement
  const sortedSuppliers = suppliers.sort((a, b) => a.placement - b.placement);

  // Separate main tabs and dropdown suppliers based on screen size
  const mainTabs = isMobile 
    ? sortedSuppliers.slice(0, 2) 
    : sortedSuppliers.filter((supplier) => supplier.placement <= 5);
    
  const dropdownTabs = isMobile 
    ? sortedSuppliers.slice(2) 
    : sortedSuppliers.filter((supplier) => supplier.placement > 5);

  const handleTabChange = (index) => {
    if (index === activeTab || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 500); // Match the CSS transition duration
  };

  const activeSupplier = sortedSuppliers[activeTab];

  return (
    <div className="container">
      <h2 className="text-center pt-5">Our partners</h2>
      <div className="supplier-tabs-container p-0 justify-content-center">
        {/* Updated Main Tabs container with flex-wrap */}
        <div className="supplier-tabs-navigation d-flex flex-wrap text center">
          {mainTabs.map((supplier, index) => (
            <button
              key={supplier.placement}
              className={`tab-button ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {supplier.name}
            </button>
          ))}

          {/* Dropdown for extra suppliers */}
          {dropdownTabs.length > 0 && (
            <div className="dropdown">
              <button className="tab-button dropdown-toggle">More</button>
              <div className="dropdown-menu">
                {dropdownTabs.map((supplier, index) => (
                  <button
                    key={supplier.placement}
                    className={`dropdown-item ${
                      mainTabs.length + index === activeTab ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(mainTabs.length + index)}
                  >
                    {supplier.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Banner */}
        <AboutSupplier
  logo={activeSupplier.logo}
  title={activeSupplier.title}
  description={activeSupplier.description}
  backgroundImage={activeSupplier.backgroundImage}
  name={activeSupplier.name}
  link={activeSupplier.link}
/>

      </div>
    </div>
  );
};

export default SupplierTabs;