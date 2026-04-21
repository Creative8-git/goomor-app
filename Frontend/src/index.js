import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Modalsearch from './components/Modalsearch';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
      <Router>
        <Topbar />
        <Navbar />
        <Modalsearch />
        <App />
        <Footer />
      </Router>
    
  </React.StrictMode>
);

