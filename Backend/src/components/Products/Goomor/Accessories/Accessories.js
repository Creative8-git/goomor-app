import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Accessories = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State to store search input
    const [products, setProducts] = useState([]); // State to store fetched products
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    // Fetch data from the backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/goomorproducts`); // Replace with your backend URL
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
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

    // Filter products with type "accessory" and search query
    const items = products
        .filter(product => product.type === 'accessory') // Filter by type
        .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase())) // Filter by search query
        .map(product => ({
            name: product.title,
            link: `/goomor/${product.id}`,
            image: product.carouselImages[0] || product.carouselImages[1],
        }));

    // Handle loading or error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-fluid service bg-light pb-5 Post">
            <div className="container pb-5">
                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search for an accessory..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                        style={{ maxWidth: '400px', margin: '0 auto' }}
                    />
                </div>

                <div className="d-flex align-items-center mb-2">
                    <img
                        src="/images/logo_transparent.png"
                        alt="Company Logo"
                        className="img-fluid me-3"
                        style={{ maxWidth: "150px" }}
                    />
                    <h1 className="m-0" style={{ fontSize: "50px", lineHeight: "50px" }}>Products</h1>
                </div>

                <hr
                    className="mt-1 mb-4"
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

                {/* Grid Layout */}
                <div className="row g-4">
                    {items.length > 0 ? (
                        items.map((item, index) => (
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
                                                src={item.image}
                                                className="img-fluid w-100"
                                                alt={item.name}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="service-content text-center p-3">
                                            <Link to={item.link} className="d-block h-100 text-light fs-5 my-2 text-decoration-none">
                                                {item.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <h4>No results found</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Accessories;
