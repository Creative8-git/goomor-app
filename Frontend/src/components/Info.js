const Info = ({ onDiscoverMoreClick }) => {
    return (
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="about-item-image d-flex">
                <img src="images/warehouse-4.jpg" className="img-1 img-fluid w-50" alt="" />
                <img src="images/warehouse-5.jpg" className="img-2 img-fluid w-50" alt="" />
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.1s">
              <div className="about-item-content">
                <p className="text-uppercase text-secondary fs-5 mb-0">GOOMOR ALYBEAM</p>
                <h2 className="display-4 text-capitalize mb-3">Quality Structural Engineered Aluminium Beams and Post</h2>
                <a 
                  href="/#"
                  className="btn btn-secondary d-inline-block py-3 px-5 me-2 flex-shrink-0 wow fadeInUp"
                  data-wow-delay="0.1s"
                  onClick={onDiscoverMoreClick}
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Info;
  