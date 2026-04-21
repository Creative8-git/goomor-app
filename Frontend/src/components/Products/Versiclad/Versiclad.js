import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../../utils/assetUrl";

const Versiclad = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || '';
        const response = await fetch(`${apiBase}/api/versicladproducts`);
        if (!response.ok) throw new Error("Failed to fetch Versiclad products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize with full product list
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedSearchTerm) ||
        product.type.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on new search
  }, [searchTerm, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Pagination logic
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container-fluid service bg-light pb-5 Versiclad">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <img
            src="images/versiclad-logo.svg"
            alt="Versiclad Logo"
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
        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-12">
            <input
              type="text"
              placeholder="Search products by title or type..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {/* Product Grid */}
        <div className="row g-4">
          {paginate(filteredProducts).map((product, index) => (
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
                    <img
                      src={getAssetUrl(product.carouselImages?.[0]) || "/images/placeholder.png"} // Placeholder for missing images
                      className="img-fluid w-100"
                      alt={product.title}
                    />
                  </div>
                  <div className="service-content text-center p-3">
                    <Link to={`/versiclad/${product.id}`} className="d-block h-100 text-dark fs-5 my-2 text-decoration-none text-white">
                      {product.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-secondary mx-2"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary mx-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Versiclad;
