const Footer = () => {
    return (
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Get a quote</h4>
                                <div className="position-relative mx-auto">
                                    <input className="form-control w-100 py-3 ps-4 pe-5" type="text"
                                        placeholder="Enter your email"></input>
                                    <button type="button"
                                        className="btn btn-secondary position-absolute top-0 end-0 py-2 mt-2 me-2">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Explore</h4>
                            <a href="/#"><i className="fas fa-angle-right me-2"></i> Home</a>
                            <a href="/products"><i className="fas fa-angle-right me-2"></i> Product</a>
                            <a href="/About"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="/Contact"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Our Services</h4>
                            <a href="/ColorBondProduct"><i className="fas fa-angle-right me-2"></i> Colorbond Products</a>
                            <a href="/goomor/beamandpost"><i className="fas fa-angle-right me-2"></i> Post and Beam</a>
                            <a href="/goomor/accessories"><i className="fas fa-angle-right me-2"></i> Accessories</a>
                            <a href="/Product/roofing"><i className="fas fa-angle-right me-2"></i> Carport and Patio</a>
                            <a href="/Product/fascia"><i className="fas fa-angle-right me-2"></i> Gutter and Fascia</a>
                            <a href="/#"><i className="fas fa-angle-right me-2"></i> Patio Kit</a>
                            <a href="/Product/flashing"><i className="fas fa-angle-right me-2"></i> Flashing</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> 105 Long St, Smithfield, NSW, 2164,
                                Australia</a>
                            <a href="/#"><i className="fas fa-envelope me-2"></i> sales@goomor.com.au</a>
                            <a href="/#"><i className="fas fa-phone me-2"></i> (+61) 0287989204</a>
                            <div className="footer-btn d-flex align-items-center">
                                <a href="https://www.facebook.com/gooraly/" className="btn btn-secondary btn-md-square me-2"
                                ><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-2" href="/#"><i
                                    className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-2" href="/#"><i
                                    className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-0" href="/#"><i
                                    className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;