import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../utils/assetUrl";
// Other imports remain unchanged

// Fetch `GoomorProducts` dynamically
const PatioCarport = () => {
    const [goomorProducts, setGoomorProducts] = useState([]);
    // const [ampeLiteProducts, setAmpeLiteProducts] = useState([]);
    const [stratCoProducts, setStratCoProducts] = useState([]);
    const [stramitProducts, setStramitProducts] = useState([]);
    const [metrollProducts, setMetrollProducts] = useState([]);
    const [versicladProducts, setVersicladProducts] = useState([]);
    const [lysaghtProducts, setLysaghtProducts] = useState([]);
    const [bondorProducts, setBondorProducts] = useState([]);
    const [palramProducts, setPalramProducts] = useState([]);
    const [laserLiteProducts, setLaserLiteProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    // Fetch Goomor products from the backend API
    useEffect(() => {
        const fetchGoomorProducts = async () => {
            try {
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/goomorproducts`); // Replace with your backend URL
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
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/laserliteproducts`); // Replace with your backend URL
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
    useEffect(() => {
        const fetchBondorProducts = async () => {
            try {
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/bondorproducts`); // Replace with your backend URL
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
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/palramproducts`); // Replace with your backend URL
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
    useEffect(() => {
        const fetchStratCoProducts = async () => {
            try {
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/stratcoproducts`); // Replace with your backend URL
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
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/stramitproducts`); // Replace with your backend URL
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
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/metrollproducts`); // Replace with your backend URL
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
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/versicladproducts`); // Replace with your backend URL
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
    // useEffect(() => {
    //     const fetchAmpeLiteProducts = async () => {
    //         try {
    //             const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/ampeliteproducts`); // Replace with your backend URL
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
        const fetchLysaghtProducts = async () => {
            try {
                const response = await fetch(`${(process.env.REACT_APP_API_URL || '')}/api/lysaghtproducts`); // Replace with your backend URL
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
    // Static imports for other product details remain unchanged
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
        ...goomorProducts, // Replace the static import with the fetched Goomor products
    ];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-fluid service bg-light pb-5 AmpeLite">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInDown" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                    {/* Company Logo */}
                    <img
                        src={getAssetUrl("/goomorproductimage/Util/Images/garage.png")}
                        alt=""
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
                {/* Grid Layout */}
                <div className="row g-4">
                    {allProducts.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                            <div className="wow fadeInUp" data-wow-delay={`${0 + index * 0}s`}>
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
                                            src={getAssetUrl(item.carouselImages?.[0])}
                                            className="img-fluid w-100"
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="service-content text-center p-3">
                                        <Link
                                            to={`/${item.brandName}/${item.id}`}
                                            className="d-block h-100 text-light fs-5 my-2 text-decoration-none"
                                        >
                                            {item.title}
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

export default PatioCarport;
