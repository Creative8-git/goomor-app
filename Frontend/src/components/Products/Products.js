import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../utils/assetUrl";

// Removed static import of GoomorProducts

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [goomorProducts, setGoomorProducts] = useState([]); 
  const [laserLiteProducts, setLaserLiteProducts] = useState([]); 
  // const [ampeLiteProducts, setAmpeLiteProducts] = useState([]); 
  const [stratCoProducts, setStratCoProducts] = useState([]); 
  const [stramitProducts, setStramitProducts] = useState([]); 
  const [metrollProducts, setMetrollProducts] = useState([]); 
  const [versicladProducts, setVersicladProducts] = useState([]); 
  const [lysaghtProducts, setLysaghtProducts] = useState([]); 
  const [bondorProducts, setBondorProducts] = useState([]); 
  const [palramProducts, setPalramProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
   
  const [inputPage, setInputPage] = useState("");

  // Fetch Goomor products from the backend API
  useEffect(() => {
    const fetchGoomorProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/goomorproducts`); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch Goomor products");
        }
        const data = await response.json();
        setGoomorProducts(data.map(product => ({ ...product, brandName: "Goomor" }))); // Add brandName dynamically
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGoomorProducts();
  }, []);

  useEffect(() => {
    const fetchLaserLiteProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/laserliteproducts`); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch LaserLite products");
        }
        const data = await response.json();
        setLaserLiteProducts(data.map(product => ({ ...product, brandName: "LaserLite" }))); // Add brandName dynamically
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLaserLiteProducts();
  }, []);

//   useEffect(() => {
//     const fetchAmpeLiteProducts = async () => {
//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/ampeliteproducts`); // Replace with your backend URL
//             if (!response.ok) {
//                 throw new Error("Failed to fetch AmpeLite products");
//             }
//             const data = await response.json();
//             setAmpeLiteProducts(data.map(product => ({ ...product, brandName: "AmpeLite" }))); // Add brandName dynamically
//             setLoading(false);
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//         }
//     };

//     fetchAmpeLiteProducts();
// }, []);

useEffect(() => {
  const fetchStratCoProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/stratcoproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch StratCo products");
          }
          const data = await response.json();
          setStratCoProducts(data.map(product => ({ ...product, brandName: "StratCo" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchStratCoProducts();
}, []);

useEffect(() => {
  const fetchStramitProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/stramitproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Stramit products");
          }
          const data = await response.json();
          setStramitProducts(data.map(product => ({ ...product, brandName: "Stramit" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchStramitProducts();
}, []);

useEffect(() => {
  const fetchMetrollProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/metrollproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Metroll products");
          }
          const data = await response.json();
          setMetrollProducts(data.map(product => ({ ...product, brandName: "Metroll" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchMetrollProducts();
}, []);

useEffect(() => {
  const fetchVersicladProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/versicladproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Versiclad products");
          }
          const data = await response.json();
          setVersicladProducts(data.map(product => ({ ...product, brandName: "Versiclad" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchVersicladProducts();
}, []);

useEffect(() => {
  const fetchLysaghtProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/lysaghtproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Lysaght products");
          }
          const data = await response.json();
          setLysaghtProducts(data.map(product => ({ ...product, brandName: "Lysaght" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchLysaghtProducts();
}, []);

useEffect(() => {
  const fetchBondorProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/bondorproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Bondor products");
          }
          const data = await response.json();
          setBondorProducts(data.map(product => ({ ...product, brandName: "Bondor" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchBondorProducts();
}, []);

useEffect(() => {
  const fetchPalramProducts = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/palramproducts`); // Replace with your backend URL
          if (!response.ok) {
              throw new Error("Failed to fetch Palram products");
          }
          const data = await response.json();
          setPalramProducts(data.map(product => ({ ...product, brandName: "Palram" }))); // Add brandName dynamically
          setLoading(false);
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
  };

  fetchPalramProducts();
}, []);




  const allProducts = [
    // ...ampeLiteProducts,
    ...stratCoProducts,
    ...stramitProducts,
    ...metrollProducts,
    ...versicladProducts,
    ...laserLiteProducts,
    ...lysaghtProducts,
    ...bondorProducts,
    ...palramProducts,
    ...goomorProducts, // Replaced static GoomorProducts import with API data
  ];

  const itemsPerPage = 20;
  const filteredProducts = allProducts.filter(product =>
    [product.type, product.colors, product.title].some(attribute =>
      attribute?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePageInputChange = (e) => {
    setInputPage(e.target.value);
};

const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
    } else {
        setInputPage(""); // Clear invalid input
    }
};

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-fluid service bg-light pb-5 AmpeLite">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInDown"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-6">Products</h1>
          <input
            type="text"
            placeholder="Search by name, type, or color..."
            className="form-control my-3"
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "-2px",
              height: "6px",
              width: "40px",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              borderRadius: "3px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          ></div>
        </div>
        <div className="row g-4">
          {paginatedProducts.map((product, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <div className="wow fadeInUp" data-wow-delay={`${0 + index * 0}s`}>
                <div
                  className="service-item h-100"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="service-img" style={{ flex: "1 1 auto" }}>
                    <img
                      src={getAssetUrl(product.carouselImages?.[0]) || "path/to/default/image.jpg"}
                      className="img-fluid w-100"
                      alt={product.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="service-content text-center p-3" style={{ flex: "0 0 auto" }}>
                    <Link
                      to={`/${product.brandName}/${product.id}`}
                      className="d-block h-100 text-light fs-5 my-2 text-decoration-none"
                    >
                      {product.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary mx-2" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <input type="number" className="form-control mx-2" style={{ width: "80px" }} value={inputPage} onChange={handlePageInputChange} placeholder="Go to..." />
                    <button className="btn btn-primary mx-2" onClick={handleGoToPage}>Go</button>
                    <button className="btn btn-secondary mx-2" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>

        </div>
      </div>
    </div>
  );
};

export default Products;
