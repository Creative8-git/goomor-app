import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Palram = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/palramproducts`);
        if (!response.ok) {
          throw new Error("Failed to fetch Palram products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const items = products.map((product) => ({
    name: product.title,
    link: `/palram/${product.id}`,
    image: product.carouselImages[0], // Assuming the first image is the main image
  }));

  return (
    <div className="container-fluid service bg-light pb-5 Palram">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInDown" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <img
            src="/images/palram-logo.webp"
            alt="PalramLogo"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          <hr
            className="my-4"
            style={{
              border: "0",
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
              <div className="wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div
                  className="service-item"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div className="service-img">
                    <img src={item.image} className="img-fluid w-100" alt={item.name} />
                  </div>
                  <div className="service-content text-center p-3">
                    <Link to={item.link} className="d-block h-100 text-light fs-5 my-2 text-decoration-none">
                      {item.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Palram;
