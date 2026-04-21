import React from 'react';
import DemoModel from './Component/DemoModel';
import GallerySection from './Component/GallerySection';
import { useNavigate } from 'react-router-dom';

const PatioComponent = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="patio-hero">
                <h1>Goomor signature products</h1>
            </div>

            <section id="products" className="patio-section bg-light">

                <div className="container">
                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <div onClick={() => navigate('/goomor/beamandpost')} className="patio-feature">
                                <h3>Aluminum Beams & Posts</h3>
                                <p>Made with strength and durability, our aluminum beams provide the perfect foundation for your patio.</p>
                                <img className="img-fluid rounded" style={{ objectFit: 'cover', height: '200px', width: '100%' }} src="https://media.bunnings.com.au/api/public/content/80198f1bc46f407d80f37571ed1452dc?v=92605bb0&t=w500dpr1" alt="Aluminum Beams" />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="patio-feature">
                                <h3>DIY Patio Designs</h3>
                                
                                <p>Create your dream outdoor space with our easy-to-install DIY patio kits, tailored to your specifications.</p>
                                <img className="img-fluid rounded" style={{ objectFit: 'cover', height: '200px', width: '100%' }} src="https://cdn.prod.website-files.com/610e3f319558a9f41d49f85a/64d3c989586304684dcb1e92_patio%20featured%20image.jpg" alt="DIY Patio Design" />
                            </div>
                        </div>

                        


                        <div className="col-md-4 mb-4">
                            <div onClick={() => navigate('/goomor/accessories')} className="patio-feature">
                                <h3>Supplies and Accessories</h3>
                                <p>Our accessories are able to withstand the elements, ensuring long-lasting support and style.</p>
                                <img className="img-fluid rounded" style={{ objectFit: 'cover', height: '200px', width: '100%' }} src="https://www.metroll.com.au/wp-content/uploads/steel_acc-1.jpg" alt="Aluminum Posts" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section id="about" className="patio-section">
                <h1 className="patio-section-title">About us</h1>
                <div className="patio-content">
                    <div className="row">
                        <div className="col-md-7">
                            <DemoModel src={'https://3dwarehouse.sketchup.com/embed/5a75c8ea-c968-4bd2-ba83-fd0d22f0eac2?token=Ob3nff1ARk8=&binaryName=s21'} />
                        </div>
                        <div className="col-md-5 d-flex align-items-center">
                            <p className="h5">At Goomor Alybeam, we take pride in offering high-quality patio, pergola, verandah, and carport solutions available in a multitude of colors and styles to suit your outdoor lifestyle.</p>
                        </div>
                    </div>
                </div>
            </section>
            <GallerySection />
        </div>
    );
};

export default PatioComponent;
