import React from 'react';
const ContactRedirect = () => {
    return (
        <div>
            <div className="row g-5">
                    <a href="https://maps.app.goo.gl/JMXPByDuXaND7JEK7" className="col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i className="fas fa-map-marker-alt fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Address</h4>
                                <p className="mb-0">105 Long St, Smithfield, NSW</p>
                            </div>
                        </div>
                    </a>
                    <a href="mailto:sale@goomor.com.au" className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i className="fas fa-envelope fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Mail Us</h4>
                                <p className="mb-0">sales@goomor.com.au</p>
                            </div>
                        </div>
                    </a>
                    <a href="tel:+64287989204" className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i className="fa fa-phone-alt fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Telephone</h4>
                                <p className="telephone-text mb-0">(+61) 287989204</p>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
    );
};

export default ContactRedirect;

