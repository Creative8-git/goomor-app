const Carouselmain = () => {
    return (
        <div className="container-fluid overflow-hidden px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1s"
                    style={{ animationDelay: '1s' }}>
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Fourth slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="4" aria-label="Fifth slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="5" aria-label="Sixth slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <img src="/images/warehouse-1.png" className="img-fluid w-100" alt="First slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-1 mb-0 fadeInUp animate_animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1.3s' }}>GOOMOR ALYBEAM</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                Quality Structural Home Improvement and Colorbond® Roofing Products
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '1.3s' }} href="/Contact">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <img src="/images/warehouse-2.jpg" className="img-fluid w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1s' }}>Polycarbonate Roofing</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                Australian made Polycarbonate: Strong, Lightweight, and Built to Last!
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '10s' }} href="/Contact">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <img src="/images/warehouse-3.jpg" className="img-fluid w-100" alt="Third slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1s' }}>Insulated Roofing Panels</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                Superior Thermal Protection & Lasting Durability from Australian top brands.
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '10s' }} href="/Contact">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="carousel-item ">
                        <img src="/images/warehouse-4.jpg" className="img-fluid w-100" alt="Fourth slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-1 mb-0 fadeInUp animate_animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1.3s' }}>Colorbond® Wall Cladding range</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                COLORBOND® Wall Cladding: Stylish, Durable, and Built to Withstand the Elements!
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '1.3s' }} href="/Contact">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Slide 5 */}
                    <div className="carousel-item ">
                        <img src="/images/warehouse-5.jpg" className="img-fluid w-100" alt="Fifth slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-1 mb-0 fadeInUp animate_animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1.3s' }}>Polycarbonate and fiberglass roofing</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                Bring the outdoors in with our Polycarbonate or Fiberglass Roofing!
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '1.3s' }} href="/Contact">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Slide 6 */}
                    <div className="carousel-item ">
                        <img src="/images/warehouse-6.jpg" className="img-fluid w-100" alt="Sixth slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-1 mb-0 fadeInUp animate_animated" data-animation="fadeInUp"
                                data-delay="1s" style={{ animationDelay: '1.3s' }}>Insulated wall cladding</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp"
                                data-delay="1.3s" style={{ animationDelay: '1.3s' }}>
                                Insulated Wall Cladding: Thermal Efficiency and Lasting Durability!
                            </h1>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated"
                                    data-animation="fadeInUp" data-delay="10s" style={{ animationDelay: '1.3s' }} href="/Contact">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon btn-lg-square fadeInLeft animate__animated" aria-hidden="true"
                        data-animation="fadeInLeft" data-delay="1.1s" style={{ animationDelay: '1.3s' }}><i
                            className="fas fa-chevron-left fa-2x"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon btn-lg-square fadeInRight animate__animated" aria-hidden="true"
                        data-animation="fadeInRight" data-delay="1.1s" style={{ animationDelay: '1.3s' }}><i
                            className="fas fa-chevron-right fa-2x"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
};
export default Carouselmain;
