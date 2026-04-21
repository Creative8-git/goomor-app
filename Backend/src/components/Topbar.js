const Topbar = () => {
    return (
        <div className="container-fluid topbar d-none d-xl-block w-100">
            <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <a href="https://maps.app.goo.gl/JMXPByDuXaND7JEK7" className="text-muted me-4"><i className="fas fa-map-marker-alt text-secondary me-2"></i>Find us
                            on Google map</a>
                        <a href="tel:+61287989204" className="text-muted me-4"><i className="fas fa-phone-alt text-secondary me-2"></i>(+61)
                            0287989204</a>
                        <a href="mailto:sale@goomor.com.au" className="text-muted me-0"><i
                            className="fas fa-envelope text-secondary me-2"></i>sales@goomor.com.au</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        <span className="text-muted me-3">
                            <i className="fas fa-clock text-secondary me-2"></i>Mon - Sat 7:00 - 15:30, Sunday - CLOSED
                        </span>

                        <a href="https://www.facebook.com/gooraly" className="btn btn-primary btn-square border border-white me-3"><i
                            className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
