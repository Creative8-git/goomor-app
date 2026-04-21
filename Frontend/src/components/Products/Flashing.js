import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../utils/assetUrl";

<style>{`
  .service-item:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  }
  .service-item:hover img {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
  .service-item:hover .overlay {
    opacity: 1;
  }
`}</style>

const Flashing = () => {
  const [flashings, setFlashings] = useState({ standard: [], custom: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [goomorProducts, setGoomorProducts] = useState([]);
  const [stratCoProducts, setStratCoProducts] = useState([]);
  const [stramitProducts, setStramitProducts] = useState([]);
  const [metrollProducts, setMetrollProducts] = useState([]);
  const [lysaghtProducts, setLysaghtProducts] = useState([]);


  const allGutteringProducts = [
    ...goomorProducts,
    ...stratCoProducts,
    ...stramitProducts,
    ...metrollProducts,
    ...lysaghtProducts,
  ];

  useEffect(() => {
    const fetchFlashings = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/flashings`);
        if (!response.ok) {
          throw new Error("Failed to fetch flashing options");
        }
        const data = await response.json();
        setFlashings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashings();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // List of brands and their API endpoints
        const brands = [
          { name: "Goomor", endpoint: "goomorproducts" },
          { name: "StratCo", endpoint: "stratcoproducts" },
          { name: "Stramit", endpoint: "stramitproducts" },
          { name: "Metroll", endpoint: "metrollproducts" },
          { name: "Lysaght", endpoint: "lysaghtproducts" }
        ];
        console.log("ALL GUTTERING PRODUCTS", allGutteringProducts);

        // Fetch all in parallel
        const results = await Promise.all(
          brands.map(async (brand) => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/${brand.endpoint}`);
            if (!response.ok) throw new Error(`Failed to fetch ${brand.name} products`);
            const data = await response.json();
            // Filter by "Guttering" type and add brandName
            return data
              .filter(product => {
                const typeMatch = product.type && product.type.toLowerCase() === "guttering";
                const titleMatch =
                  (product.title && product.title.toLowerCase().includes("gutter")) ||
                  (product.name && product.name.toLowerCase().includes("gutter"));
                return typeMatch && titleMatch;   // must satisfy BOTH
              })
              .map((product) => ({ ...product, brandName: brand.name }));

          })
        );

        // Separate results for each brand if you still want to store them separately
        setGoomorProducts(results[0]);
        setStratCoProducts(results[1]);
        setStramitProducts(results[2]);
        setMetrollProducts(results[3]);
        setLysaghtProducts(results[4]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Gutter & Flashing Options</h2>
      <p className="text-center mb-4">
        All standard flashings are available for order in custom sizes, shapes, and colors to suit your build.
      </p>

      {/* GUTTERS – StratCo-style cards, no pagination */}
      <div className="container-fluid service  pb-5">
      <h3 className="mb-3">Gutters</h3>
        <div className="container pb-5">
          <div className="row">
            {allGutteringProducts.length === 0 && (
              <div className="col-12 text-center">No guttering products found.</div>
            )}

            {allGutteringProducts.map((product, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={index}>
                <div
                  className="service-item"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    position: "relative",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* image + hover overlay */}
                  <div
                    className="service-img"
                    style={{ height: "200px", overflow: "hidden", position: "relative" }}
                  >
                    <img
                      src={getAssetUrl(product.carouselImages?.[0]) || "images/placeholder.png"}
                      alt={product.title || product.name || ""}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform 0.3s, filter 0.3s" }}
                    />
                    <div
                      className="overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#ffffff",        // force white
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        lineHeight: 1.4,
                        opacity: 0,
                        transition: "opacity 0.3s",
                        zIndex: 2,               // make sure it sits above everything
                        pointerEvents: "none",   // overlay text isn’t clickable
                      }}
                    >
                      {product.title || product.name}
                    </div>

                  </div>

                  {/* title + brand */}
                  <div className="service-content text-center h-100 justify-content-center p-3">
                  <Link
                      to={`/${product.brandName}/${product.id}`}
                      className="d-block h-100 text-light fs-5 my-2 text-decoration-none"
                    >
                      {product.title || product.title}
                    </Link>
                    <div style={{ fontSize: "0.95rem", color: "#aaa" }}>
                      {product.brandName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* Standard Flashing Section */}
      <div className="mb-5">
        <h3 className="mb-3">Standard Flashings</h3>
        <div className="row g-3">
          {flashings.standard.map((url, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <Link to={`/standardflashing/standardflashing${index + 1}`}>
                  <img src={getAssetUrl(url)} alt={`Standard Flashing ${index + 1}`} className="card-img-top" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Custom Flashing Section */}
      <div>
        <h3 className="mb-3">Custom Flashings</h3>
        <div className="row g-3">
          {flashings.custom.map((url, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <Link to={`/customflashing/customflashing${index + 1}`}>
                  <img src={getAssetUrl(url)} alt={`Custom Flashing ${index + 1}`} className="card-img-top" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashing;
