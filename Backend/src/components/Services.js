const Services = () => {
    return (

        <div className="container-fluid service bg-light pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Productss</p>
                    <h2 className="display-4 text-capitalize mb-3">our products are made with high quality material and suitable for all your needs</h2>
                </div>
                <div className="row g-4">
                    
                    
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="/images/Carport.webp" className="img-fluid w-100" alt=""></img>
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                    <i className="fas fa-warehouse text-primary fa-4x"></i>
                                </div>
                                <a href="/Product/carportandpatio" className="d-block fs-4 my-4">Carport & Patio</a>
                                {/* <p className="text-white mb-4">Placeholder Text</p>
                                <a className="btn btn-secondary py-2 px-4" href=/#>Read More</a> */}
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Carport & Patio</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-warehouse text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="/images/colorbondplaceholder.png" className="img-fluid w-100" alt=""></img>
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                    <i className="fas fa-th-large text-primary fa-4x"></i>

                                </div>
                                <a href="/ColorBondProduct" className="d-block fs-4 my-4">Colorbond Roofing & Walling</a>
                                {/* <p className="text-white mb-4">Placeholder Text</p>
                                <a className="btn btn-secondary py-2 px-4" href="/#">Read More</a> */}
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Colorbond Roofing & Walling</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-th-large text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="/images/Fascia.webp" className="img-fluid w-100" alt=""></img>
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                    <i className="fas fa-home text-primary fa-4x"></i>
                                </div>
                                <a href="/Product/fascia" className="d-block fs-4 my-4">Fascia & Gutter</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center ps-4 w-100">
                                    <h4>Fascia & Gutter</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-home text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="/images/Flashing.webp" className="img-fluid w-100" alt=""></img>
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                    <i className="fas fa-i-cursor text-primary fa-4x"></i>
                                </div>
                                <a href="/Product/flashing" className="d-block fs-4 my-4">Flashing</a>
                                {/* <p className="text-white mb-4">Placeholder Text</p>
                                <a className="btn btn-secondary py-2 px-4" href="/#">Read More</a> */}
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Flashing</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-i-cursor text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;