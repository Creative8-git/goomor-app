import VideoPlayer from './Utils/VideoPlayer';

const Feature = () => {
    return (
        <div className="container-fluid feature bg-light py-5">
        <div className="container py-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                <p className="text-uppercase text-secondary fs-5 mb-0">Why Choose Us?</p>
                {/* <VideoPlayer VideoSrc="https://goomorproductimage.s3.ap-southeast-2.amazonaws.com/Util/Videos/Promotional+Video.mov" /> */}
            </div>
            <div className="row g-4">
                <a href="/About" className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="feature-item text-center border p-5">
                        <div className="feature-img bg-secondary d-inline-flex p-4">
                            <i className="fas fa-city text-primary fa-5x"></i>
                        </div>
                        <a href="/About" className="h4 d-block my-4">Fast and Reliable</a>
                        {/* <p className="mb-0">Placeholder Text</p> */}
                    </div>
                </a>
                <a href="/Contact" className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="feature-item text-center border p-5">
                        <div className="feature-img bg-secondary d-inline-flex p-4">
                            <i href="/Contact" className="fas fa-funnel-dollar text-primary fa-5x"></i>
                        </div>
                        <a href="/Contact" className="h4 d-block my-4">Free Quotes</a>
                        {/* <p className="mb-0">Placeholder Text</p> */}
                    </div>
                </a>
                <a href="/Product" className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="feature-item text-center border p-5">
                        <div className="feature-img bg-secondary d-inline-flex p-4">
                            <i className="fas fa-tools text-primary fa-5x"></i>
                        </div>
                        <a href="/ColorBondProduct" className="h4 d-block my-4">Quality Supplies</a>
                        {/* <p className="mb-0">Placeholder Text</p> */}
                    </div>
                </a>
            </div>
        </div>
    </div>
    )
};

export default Feature;