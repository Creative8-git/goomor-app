import React from 'react';
import { getAssetUrl } from '../../../utils/assetUrl';

const SingleColor = ({ colors, onColorClick, selectedColor, setModal }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="color-picker-container">
          <h3>Select a Color</h3>
          <div className="color-picker d-flex flex-wrap" id="colorPicker">
            {colors.length > 0 ? (
              colors.map((color, index) => (
                <div
                  key={index}
                  className="color-box"
                  style={{
                    backgroundColor: color.hex,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "2px solid #ddd",
                    margin: "5px",
                  }}
                  onClick={() => onColorClick(color)}
                ></div>
              ))
            ) : (
              <div
                style={{
                  fontSize: "14px",
                  color: "#999",
                  textAlign: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                No options available. Please check other tabs.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-6 text-center mt-5">
        {selectedColor?.url ? (
          <img
            src={getAssetUrl(selectedColor.url)}
            alt={selectedColor.name || "Selected Color"}
            style={{
              width: "180px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
              border: "2px solid #ddd",
            }}
            onClick={() => setModal({ isOpen: true, image: selectedColor.url })}
          />
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
          className="color-name"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {selectedColor?.name || "Select a color"}
        </p>
      </div>
    </>
  );
};

export default SingleColor;
