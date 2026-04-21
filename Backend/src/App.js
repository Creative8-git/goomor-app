import React, { } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './components/Utils/NotFound';
import ColorBondProducts from './components/Products/ColorBondProducts';
import PatioComponent from './components/Products/Goomor/PatioComponent';
import PostNavigation from './components/Products/Goomor/Post/PostNavigation';
import SteelBeam from './components/Products/Goomor/Beam/SteelBeam';
import AluminiumBeam from './components/Products/Goomor/Beam/AluminiumBeam';
import BeamNavigation from './components/Products/Goomor/Beam/BeamNavigation';
import BeamRecommendation from './components/Products/Goomor/Component/BeamRecommendation';
import Products from './components/Products/Products';
// import Order from './pages/Order';

// Patio
import HotspotViewer from './components/Products/Patio/FreeStandingPatios/FreeStandingPatio';
import AttachedPatios from './components/Products/Patio/AttachedPatios/AttachedPatios';
import PatiosCategories from './components/Products/Patio/PatiosCategories';
import AttachedPatios2 from './components/Products/Patio/AttachedPatios2/AttachedPatios2';
import FlyOverPatios from './components/Products/Patio/FlyOverPatios/FlyOverPatios';
import FlyOverOverHangPatios from './components/Products/Patio/FlyOverOverHangPatios/FlyOverOverHangPatios';
import Gable225 from './components/Products/Patio/Gable225/Gable225';
import Gable15 from './components/Products/Patio/Gable15/Gable15';

// const Order = React.lazy(() => import('./pages/Order'));
// import Login from './components/Login';


import Lysaght from './components/Products/Lysaght/Lysaght';
import LysaghtProductCatalogue from './components/Products/Lysaght/LysaghtProductCatalogue';
import Metroll from './components/Products/Metroll/Metroll';
import MetrollProductCatalogue from './components/Products/Metroll/MetrollProductCatalogue';
import Stramit from './components/Products/Stramit/Stramit';
import StramitProductCatalogue from './components/Products/Stramit/StramitProductCatalogue';
import PDFListing from './components/Products/Highlight/PDFListing';
import StratCo from './components/Products/StratCo/StratCo';
import StratCoProductCatalogue from './components/Products/StratCo/StratCoProductCatalogue';
import Versiclad from './components/Products/Versiclad/Versiclad';
import VersicladProductCatalogue from './components/Products/Versiclad/VersicladProductCatalogue';
import Palram from './components/Products/Palram/Palram';
import PalramProductCatalogue from './components/Products/Palram/PalramProductCatalogue';
import LaserLite from './components/Products/LaserLite/LaserLite';
import LaserLiteProductCatalogue from './components/Products/LaserLite/LaserLiteProductCatalogue';
// import AmpeLite from './components/Products/AmpeLite/AmpeLite';
// import AmpeLiteProductCatalogue from './components/Products/AmpeLite/AmpeLiteProductCatalogue';
import Bondor from './components/Products/Bondor/Bondor';
import BondorProductCatalogue from './components/Products/Bondor/BondorProductCatalogue';
import PatioCarport from './components/Products/PatioCarport';

import Accessories from './components/Products/Goomor/Accessories/Accessories';

import GoomorProductCatalogue from './components/Products/Goomor/GoomorProductCatalogue';
import AluminiumPost from './components/Products/Goomor/Post/AluminiumPost';
import SteelPost from './components/Products/Goomor/Post/SteelPost';
import PDFguide from './components/Products/Goomor/PDFguide';
import Flashing from './components/Products/Flashing';
import BeamandPost from './components/Products/Goomor/BeamandPost';
// import TradeLogin from './components/Order/Login/TradeLogin';
// import Dashboard from './components/Order/User/Dashboard';
// import useAuth from './Hooks/useAuth';
import InsulationProducts from './components/Products/InsulationProducts';
import FibreProducts from './components/Products/FibreProducts';
import GoomorProducts from './components/Products/GoomorProducts';


function App() {
  //** TODO: tesing user/ order page*/
  // const { user, loading } = useAuth();

  // if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/ColorBondProduct" element={<ColorBondProducts />} />
      <Route path="/insulationproducts" element={<InsulationProducts />} />
      <Route path="/fibreproducts" element={<FibreProducts />} />
      <Route path="/goomorproducts" element={<GoomorProducts />} />
      <Route path="/Product/carportandpatio" element={<PatioCarport />} />
      <Route path="/Product/flashing" element={<Flashing />} />
      {/* <Route path="/login" element={<Login />} /> */}

      <Route path="/pdf-listing" element={<PDFListing />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/goomor" element={<PatioComponent />} />
      <Route path="/inspiration" element={<PDFguide />} />

      <Route path="/goomor/post" element={<PostNavigation />} />
      <Route path="/goomor/beam" element={<BeamNavigation />} />

      <Route path="/lysaght" element={<Lysaght />} />
      <Route path="/lysaght/:productId" element={<LysaghtProductCatalogue />} />

      <Route path="/metroll" element={<Metroll />} />
      <Route path="/metroll/:productId" element={<MetrollProductCatalogue />} />

      <Route path="/stramit" element={<Stramit />} />
      <Route path="/stramit/:productId" element={<StramitProductCatalogue />} />

      <Route path="/versiclad" element={<Versiclad />} />
      <Route path="/versiclad/:productId" element={<VersicladProductCatalogue />} />

      <Route path="/stratco" element={<StratCo />} />
      <Route path="/stratco/:productId" element={<StratCoProductCatalogue />} />

      <Route path="/palram" element={<Palram />} />
      <Route path="/palram/:productId" element={<PalramProductCatalogue />} />

      <Route path="/laserlite" element={<LaserLite />} />
      <Route path="/laserlite/:productId" element={<LaserLiteProductCatalogue />} />

      {/* <Route path="/ampelite" element={<AmpeLite />} />
      <Route path="/ampelite/:productId" element={<AmpeLiteProductCatalogue />} />  */}


      <Route path="/bondor" element={<Bondor />} />
      <Route path="/bondor/:productId" element={<BondorProductCatalogue />} />

      <Route path="/goomor/:productId" element={<GoomorProductCatalogue />} />

      <Route path="/goomor/aluminiumpost" element={<AluminiumPost />} />
      <Route path="/goomor/steelpost" element={<SteelPost />} />
      <Route path="/goomor/aluminiumbeam" element={<AluminiumBeam />} />
      <Route path="/goomor/steelbeam" element={<SteelBeam />} />
      <Route path="/goomor/beamrecommendation" element={<BeamRecommendation />} />
      <Route path="/goomor/beamandpost" element={<BeamandPost />} />
      <Route path="/goomor/accessories" element={<Accessories />} />

      {/* Patio */}
      <Route path="/goomor/freestandingpatio" element={<HotspotViewer />} />
      <Route path="/goomor/attachedpatio" element={<AttachedPatios />} />
      <Route path="/goomor/patioscategories" element={<PatiosCategories />} />
      <Route path="/goomor/attachedpatio2" element={<AttachedPatios2 />} />
      <Route path="/goomor/flyoverpatios" element={<FlyOverPatios />} />
      <Route path="/goomor/flyoveroverhangpatios" element={<FlyOverOverHangPatios />} />
      <Route path="/goomor/gable225" element={<Gable225 />} />
      <Route path="/goomor/gable15" element={<Gable15 />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <TradeLogin />} /> */}
      {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} /> */}
      {/* <Route path="/order" element={user ? <Order /> : <Navigate to="/login" replace />} /> ✅ Add Order page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
