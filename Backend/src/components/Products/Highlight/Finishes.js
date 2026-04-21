import React, { useState } from 'react';

const Finishes = ({ finishes = { color: [], finishes: [] }, onColorClick }) => {

  const [selectedPreview, setSelectedPreview] = useState(null); // Stores the currently selected item for preview

  const handleItemClick = (item) => {
    setSelectedPreview(item); // Set the selected item (color or finish) for preview
    onColorClick(item); // Optionally trigger the onColorClick callback
  };

  // Fallback for when finishes or colors are empty
  if (
    !finishes ||
    (!Array.isArray(finishes.color) || finishes.color.length === 0) &&
    (!Array.isArray(finishes.finishes) || finishes.finishes.length === 0)
  ) {
    return (
      <div className="col-md-12 text-center mt-5">
        <p>No Ceiling options available for this product.</p>
      </div>

    );
  }
  

  return (
    <>
      <div className="col-md-6 finishes-container">
        <div className="row">
          {finishes.color.length > 0 && (
            <div className="col-md-12 ceiling-color-section">
              <h3>Color</h3>
              <div className="color-picker d-flex flex-wrap">
                {finishes.color.map((color, index) => (
                  <div
                    key={index}
                    className="color-box ceiling-color"
                    style={{
                      backgroundColor: color.hex,
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: "2px solid #ddd",
                      margin: "5px",
                    }}
                    onClick={() => handleItemClick(color)}
                  ></div>
                ))}
              </div>
            </div>
          )}
          {finishes.finishes.length > 0 && (
            <div className="col-md-12 ceiling-finishes-section">
              <h3>Ceiling options</h3>
              <div className="finishes-grid d-flex flex-wrap">
                {finishes.finishes.map((finish, index) => (
                  <div
                    key={index}
                    className="finish-box"
                    style={{
                      backgroundImage: `url(${finish.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "70px",
                      height: "70px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      border: "2px solid #ddd",
                      margin: "5px",
                    }}
                    onClick={() => handleItemClick(finish)}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-md-6 text-center mt-5">
        {selectedPreview ? (
          selectedPreview.image ? (
            <img
              src={selectedPreview.image}
              alt={selectedPreview.name || "Selected Finish"}
              style={{
                width: "180px",
                height: "150px",
                borderRadius: "10px",
                objectFit: "cover",
                border: "2px solid #ddd",
              }}
            />
          ) : (
            <div
              style={{
                backgroundColor: selectedPreview.hex,
                width: "180px",
                height: "150px",
                borderRadius: "10px",
                border: "2px solid #ddd",
                margin: "0 auto",
              }}
            ></div>
          )
        ) : (
          <div
            style={{
              width: "180px",
              height: "150px",
              margin: "0 auto",
              borderRadius: "10px",
              border: "2px dashed #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "14px", color: "#999" }}>No Preview</span>
          </div>
        )}
        <p
          className="preview-name"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {selectedPreview?.name || "Select an item"}
        </p>
      </div>
    </>
  );
};

export default Finishes;
