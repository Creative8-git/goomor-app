import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomCarousel from "../Highlight/CustomCarousel";
import { getAssetUrl } from "../../../utils/assetUrl";
import ColorPicker from "../Highlight/ColorPicker";
import HighlightDetail from "../Highlight/HighlightDetail";
import RelatedProducts from "../RelatedProducts";
import Seemore from "../Highlight/Seemore";
import ProductDetail from "../Highlight/ProductDetail";
const StratCoProductCatalogue = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState({
    name: "Select a color",
    hex: "#FFFFFF",
    nametop: "Top Color",
    hextop: "#FFFFFF",
    nameunder: "Under Color",
    hexunder: "#FFFFFF",
  });

  // Fetch product details from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || '';
        const response = await fetch(
          `${apiBase}/api/stratcoproducts/${productId}`
        );
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

  const getContrastColor = (hex = "#FFFFFF") => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? "#000000" : "#FFFFFF";
  };

  const handleLearnMore = (links) => {
    if (Array.isArray(links) && links.length > 1) {
      navigate("/pdf-listing", { state: { pdfFiles: links.map(getAssetUrl) } });
    } else if (links?.length) {
      window.open(getAssetUrl(links[0]), "_blank");
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
        <>
  <div className="container mt-5 Goomor">
    {/* All your main content */}
    <div className="row">
      <div className="col-md-6 mb-4">
        <CustomCarousel images={product.carouselImages} />
        <RelatedProducts relatedProductIds={product.relatedProducts || []} />
      </div>
      <div className="col-md-6">
        <HighlightDetail
          title={product.title}
          details={product.highlightDetails}
          learnMoreLinks={product.learnMoreLinks || []}
          accessoriesLink={product.accessoriesLink}
        />
         <Seemore
          title={product.title}
          details={product.highlightDetails}
          learnMoreLinks={product.learnMoreLinks || []}
          accessoriesLink={product.accessoriesLink}
        />
        <ColorPicker
          className="my-5"
          colors={product.colors}
          doubleside={product.doubleside}
          onColorClick={handleColorClick}
          selectedColor={selectedColor}
          getContrastColor={getContrastColor}
        />
       
      </div>
    </div>
  </div>

  {/* FULL-WIDTH SECTION OUTSIDE CONTAINER */}
  <div className="w-100 bg-light py-5">
    <div className="container">
      <ProductDetail
        title={product.title}
        details={product.highlightDetails}
      />
    </div>
  </div>
</>

        
    );
};

export default StratCoProductCatalogue;
