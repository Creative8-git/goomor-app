import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomCarousel from "../Highlight/CustomCarousel";
import ImageColorPicker from "../Highlight/ImageColorPicker";
import HighlightDetail from "../Highlight/HighlightDetail";
import RelatedProducts from "../RelatedProducts";

const VersicladProductCatalogue = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState({
    name: "",
    url: "",
    nametop: "",
    hextop: "",
    nameunder: "",
    hexunder: "",
  });

  // Fetch product details from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/versicladproducts/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleColorClick = (color) => setSelectedColor(color);

  // const getContrastColor = (hex = "#FFFFFF") => {
  //   const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  //   return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? "#000000" : "#FFFFFF";
  // };

  const handleLearnMore = (links) => {
    if (Array.isArray(links) && links.length > 1) {
      navigate("/pdf-listing", { state: { pdfFiles: links } });
    } else {
      window.open(links[0], "_blank");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found. Please check the product ID in the URL.</div>;
  }

  const hasMultipleLearnMoreLinks = product.learnMoreLinks?.length > 1;

  return (
    <div className="container mt-5 versiclad">
      <div className="row">
        <div className="col-md-6 mb-4">
          <CustomCarousel images={product.carouselImages || []} />
          <CustomCarousel images={product.flashing}  />
          <ImageColorPicker
            colors={product.colors || []}
            doubleside={product.doubleside || []}
            finishes={product.finishes || { color: [], finishes: [] }}
            onColorClick={handleColorClick}
            selectedColor={selectedColor}
          />
        </div>
        <div className="col-md-6">
        <HighlightDetail
                        title={product.title}
                        details={product.highlightDetails}
                        learnMoreLinks={product.learnMoreLinks || []} // Pass array instead of a single link
                        accessoriesLink={product.accessoriesLink}
                    />
          
          <RelatedProducts relatedProductIds={product.relatedProducts || []} />
        </div>
      </div>
    </div>
  );
};

export default VersicladProductCatalogue;
