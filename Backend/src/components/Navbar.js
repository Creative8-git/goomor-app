import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Manage main dropdowns
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Manage submenus

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.navbar')) {
            setActiveDropdown(null);
            setActiveSubmenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="container-fluid sticky-top px-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
                <a href="/" className="navbar-brand p-0">
                    <img className="logo" src="/images/logo_transparent.png" alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubmenu(null);
                    }}
                >
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <NavLink to="/" className="nav-item nav-link">HOME</NavLink>


                        <div className="nav-item dropdown">
                            <a
                                href="javascript:void(0);"
                                className="nav-link dropdown-toggle"
                                onClick={() => toggleDropdown('products')}
                            >
                                CATALOGUE
                            </a>
                            <div className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
                            <div className="dropdown">
                                    <a
                                        href="/products"
                                        className="dropdown-item dropdown-toggle"
                                    >
                                        All Products
                                    </a>
                                    
                                </div>
                               
                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item dropdown-toggle"
                                        onClick={() => toggleSubmenu('Goomor')}
                                    >
                                        Beam, Post and Accessories
                                    </a>
                                    <div className={`dropdown-menu ${activeSubmenu === 'Goomor' ? 'show' : ''}`}>
                                        {/* <a href="/goomor" className="dropdown-item">All Products</a> */}
                                        <a href="/goomor/post" className="dropdown-item">Post</a>
                                        <a  href="/goomor/beam" className="dropdown-item">Beam</a>
                                        <a  href="/goomor/accessories" className="dropdown-item">Accessories</a>
                                        {/* <a  href="javascript:void(0);" className="dropdown-item">DIY Kits</a> */}
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item dropdown-toggle"
                                        onClick={() => toggleSubmenu('Colorbond')}
                                    >
                                        Colorbond® products
                                    </a>
                                    <div className={`dropdown-menu ${activeSubmenu === 'Colorbond' ? 'show' : ''}`}>

                                        <a href="/lysaght" className="dropdown-item">Lysaght®</a>
                                        <a href="/metroll" className="dropdown-item">Metroll®</a>
                                        <a href="/stramit" className="dropdown-item">Stramit®</a>
                                        <a href="/stratco" className="dropdown-item">Stratco®</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item dropdown-toggle"
                                        onClick={() => toggleSubmenu('Polycarbonate')}
                                    >
                                        Polycarbonate and Fiberglass products
                                    </a>
                                    <div className={`dropdown-menu ${activeSubmenu === 'Polycarbonate' ? 'show' : ''}`}>
                                        <a href="/palram" className="dropdown-item">Palram®</a>
                                        <a href="/laserlite" className="dropdown-item">Laserlite®</a>
                                        {/* <a href="/ampelite" className="dropdown-item">Ampelite®</a> */}
                                    </div>
                                </div>
                                <div className="dropdown">

                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item dropdown-toggle"
                                        onClick={() => toggleSubmenu('Insulation')}
                                    >
                                        Insulated products
                                    </a>
                                    <div className={`dropdown-menu ${activeSubmenu === 'Insulation' ? 'show' : ''}`}>
                                        <a href="/bondor" className="dropdown-item">Bondor®</a>
                                        <a href="/Versiclad" className="dropdown-item">Versiclad®</a>
                                        <a href="/Stratco/CoolDek" className="dropdown-item">StratCo®</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a
                                href="javascript:void(0);"
                                className="nav-link dropdown-toggle"
                                onClick={() => toggleDropdown('guide')}
                            >
                                DIY
                            </a>
                            <div className={`dropdown-menu ${activeDropdown === 'guide' ? 'show' : ''}`}>

                                {/* <div className="dropdown">
                                    <a
                                        href="/inspiration"
                                        className="dropdown-item dropdown-toggle"
                                    >
                                        Ideas for your next project
                                    </a>
                                </div> */}
                                <div className="dropdown">
                                    <a
                                        href="/goomor/beamrecommendation"
                                        className="dropdown-item dropdown-toggle"
                                        
                                    >
                                        Beam Selection
                                    </a>
                                    
                                </div>
                            </div>
                        </div>

                        {/* <NavLink to="/Product" className="nav-item nav-link">Catalogue</NavLink> */}
                        <NavLink to="/About" className="nav-item nav-link">ABOUT US</NavLink>
                        <NavLink to="/Contact" className="nav-item nav-link">CONTACT</NavLink>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap pt-3 pt-lg-0 ms-lg-2">
                        {/* <button className="btn btn-primary py-2 px-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i className="fas fa-search"></i>
                        </button> */}
                        <NavLink to="/contact" className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0">Get a Quote</NavLink>
                    </div>
                    <div>
                        {/* <a href="/#"    >
                            <i className="fa fa-shopping-cart fa-2x mx-2" aria-hidden="true"></i>
                        </a> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
