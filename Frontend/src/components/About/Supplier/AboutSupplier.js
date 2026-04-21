import React from "react";

const AboutSupplier = ({ logo, title, description, backgroundImage, name, link }) => {
  return (
    <div className="p-0">
      {/* About Section */}
      <div id="about" className="">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <img
                src={logo}
                alt={`${name} Logo`}
                className="img-fluid my-5"
                style={{ maxHeight: "100px", width: "auto" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">About {name}</h2>
              <p>{description}</p>
              <a href="#products" className="btn btn-outline-primary mt-3">
                Explore {name} Products
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={backgroundImage}
                alt={`${name} Products`}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-1">
        <div className="container text-center">
          <p>Looking for premium products for your next project? We’re here to help!</p>
          <a href={link} className="btn btn-primary btn-lg">
            Browse {name} Products
          </a>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-light py-5 mb-4">
        <div className="container text-center rounded">
          <h2 className="fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            {[{
              title: "Extensive Range",
              description: "We offer a wide range of products to meet diverse needs."
            },
            {
              title: "Unmatched Quality",
              description: "Our products are sourced directly from trusted suppliers."
            },
            {
              title: "Expert Support",
              description: "Our team is here to guide you through the selection process."
            }].map((value, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutSupplier;
