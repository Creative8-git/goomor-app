import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AmpeLite = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ampeliteproducts`);
        if (!response.ok) {
          throw new Error("Failed to fetch AmpeLite products");
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const items = products.map(product => ({
    name: product.title,
    link: `/ampelite/${product.id}`,
    image: product.carouselImages?.[0] || "/images/placeholder.png", // Use placeholder for missing images
  }));

  return (
    <div className="container-fluid service bg-light pb-5 AmpeLite">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInDown" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          {/* Company Logo */}
          <img
            src="/images/ampelite-logo.gif" // Replace with the actual path to your logo
            alt="AmpeLiteLogo"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          {/* Separator Line */}
          <hr
            className="my-4"
            style={{
              border: "0",
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              position: "relative",
              overflow: "visible",
            }}
          />
        </div>
        {/* Grid Layout */}
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
                    display: "flex",
                    flexDirection: "column",
                    height: "250px", // Reduced card height
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="service-img" style={{ flex: "1 1 auto", overflow: "hidden" }}>
                    <img
                      src={item.image}
                      className="img-fluid w-100 h-100"
                      alt={item.name}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="service-content text-center p-2"
                    style={{
                      flex: "0 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50px", // Reduced content section height
                    }}
                  >
                    <Link to={item.link} className="text-dark fs-6 my-2 text-decoration-none text-white">
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

export default AmpeLite;
