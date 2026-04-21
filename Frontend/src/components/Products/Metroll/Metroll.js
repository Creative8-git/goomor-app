import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../../utils/assetUrl";

const Metroll = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of items per page
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term
    const [inputPage, setInputPage] = useState("");
    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiBase = process.env.REACT_APP_API_URL || '';
                const response = await fetch(`${apiBase}/api/metrollproducts`);
                if (!response.ok) throw new Error("Failed to fetch metroll products");
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
    const totalPages = Math.ceil(totalItems / itemsPerPage)-3;

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

    // Categorize products
    const roofingProducts = filteredProducts.filter((product) => product.type === "roofing");
    const wallingProducts = filteredProducts.filter((product) => product.type === "walling");
    const rainwaterProducts = filteredProducts.filter(
        (product) => product.type !== "roofing" && product.type !== "walling"
    );

    const categories = [
        { name: "Metroll Roofing", items: roofingProducts },
        { name: "Metroll Wall Cladding", items: wallingProducts },
        { name: "Metroll Rainwater Products", items: rainwaterProducts },
    ];

    return (
        <div className="container-fluid service bg-light pb-5 Metroll">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <img
                        src="images/metroll-logo.jpg"
                        alt="Metroll Logo"
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
                <div className="row">
                    {categories.map((category, index) => (
                        <div className="col-lg-4 col-md-6 mb-5" key={index}>
                            <h3 className="text-center text-uppercase mb-4 text-bold text-info wow fadeInDown" data-wow-delay="0.2s">
                                {category.name}
                            </h3>
                            <div className="row g-3">
                                {paginate(category.items).map((item, itemIndex) => (
                                    <div
                                        className="col-12 wow fadeInUp"
                                        data-wow-delay={`${0.2 + itemIndex * 0.2}s`}
                                        key={itemIndex}
                                        style={{ marginBottom: "10px" }}
                                    >
                                        <div
                                            className="service-item"
                                            style={{
                                                borderRadius: "10px",
                                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                overflow: "hidden",
                                                backgroundColor: "#fff",
                                            }}
                                        >
                                            <div className="service-img" style={{ height: "200px", overflow: "hidden" }}>
                                                <img
                                                    src={getAssetUrl(item.carouselImages?.[0]) || "images/placeholder.png"} // Placeholder for missing images
                                                    className="img-fluid w-100 h-100 object-fit-cover"
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="service-content text-center h-100 justify-content-center p-3">
                                                <Link to={`/metroll/${item.id}`} className="d-block h-100 text-dark fs-5 my-2 text-decoration-none text-white">
                                                    {item.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
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

export default Metroll;
