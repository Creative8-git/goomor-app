import React, { useState } from 'react';

const DoubleColor = ({ doubleside, onColorClick, selectedColor, setModal }) => {
  const [previewMode, setPreviewMode] = useState("both");

  const handlePreviewModeChange = (mode) => setPreviewMode(mode);

  return (
    <>
      <div className="col-md-6">
        <div className="color-picker-container">
          <h3>Select an options </h3>
          {doubleside.length === 0 ? (
            <p className="text-muted">No options available.</p>
          ) : (
            <>
              <div className="control-panel mb-3">
                <label>
                  <input
                    type="radio"
                    name="previewMode"
                    value="both"
                    checked={previewMode === "both"}
                    onChange={() => handlePreviewModeChange("both")}
                  />
                  Show Both
                </label>
                <label>
                  <input
                    type="radio"
                    name="previewMode"
                    value="top"
                    checked={previewMode === "top"}
                    onChange={() => handlePreviewModeChange("top")}
                  />
                  Show Top Only
                </label>
                <label>
                  <input
                    type="radio"
                    name="previewMode"
                    value="under"
                    checked={previewMode === "under"}
                    onChange={() => handlePreviewModeChange("under")}
                  />
                  Show Under Only
                </label>
              </div>
              <div className="color-picker d-flex flex-wrap" id="colorPicker">
                {doubleside.map((color, index) => (
                  <div
                    key={index}
                    className="double-color-box"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "2px solid #ddd",
                      margin: "5px",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => onColorClick(color)}
                  >
                    {previewMode !== "under" && (
                      <div
                        style={{
                          backgroundColor: color.hextop,
                          height: previewMode === "top" ? "100%" : "50%",
                          width: "100%",
                        }}
                      ></div>
                    )}
                    {previewMode !== "top" && (
                      <div
                        style={{
                          backgroundColor: color.hexunder,
                          height: previewMode === "under" ? "100%" : "50%",
                          width: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="col-md-6 text-center mt-5">
        {selectedColor && selectedColor.url ? (
          <img
            src={selectedColor.url}
            alt={`${selectedColor.nametop || "Top Color"} / ${selectedColor.nameunder || "Under Color"}`}
            style={{
              width: "150px",
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
              width: "150px",
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
          className="color-names"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {selectedColor?.nametop || "Top Color"} / {selectedColor?.nameunder || "Under Color"}
        </p>
      </div>
    </>
  );
};

export default DoubleColor;
