import React, { useState } from 'react';
import { getAssetUrl } from '../../../utils/assetUrl';

const ImageColorPicker = ({
  colors = [], // Single-sided colors with images
  doubleside = [], // Double-sided colors
  onColorClick,
  selectedColor,
}) => {
  const [viewDoubleSide, setViewDoubleSide] = useState(false); // Tab state for double-sided colors

  const handleTabClick = (isDoubleSide) => {
    setViewDoubleSide(isDoubleSide);
  };

  return (
    <div className="row">
      {/* Tabs for Single-Sided and Double-Sided */}
      <div className="col-md-12 mt-5">
        <div className="tab-container">
          <button
            className={`tab-button ${!viewDoubleSide ? 'active' : ''}`}
            onClick={() => handleTabClick(false)}
          >
            Single-Sided
          </button>
          <button
            className={`tab-button ${viewDoubleSide ? 'active' : ''}`}
            onClick={() => handleTabClick(true)}
          >
            Double-Sided
          </button>
        </div>
      </div>

      {/* Color Picker Section */}
      {viewDoubleSide ? (
        doubleside.length > 0 ? (
          <>
            <div className="col-md-6">
              <div className="color-picker-container">
                <h3>Select a Top & Under option</h3>
                <div className="color-picker d-flex flex-wrap" id="colorPicker">
                  {doubleside.map((color, index) => (
                    <div
                      key={index}
                      className="double-color-box"
                      style={{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #ddd',
                        margin: '5px',
                        position: 'relative',
                        cursor: 'pointer',
                      }}
                      onClick={() => onColorClick(color)}
                    >
                      <div
                        style={{
                          backgroundColor: color.hextop,
                          height: '50%',
                          width: '100%',
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: color.hexunder,
                          height: '50%',
                          width: '100%',
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              {selectedColor.url ? (
                <img
                  src={getAssetUrl(selectedColor.url)}
                  alt={selectedColor.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    border: '2px solid #ddd',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    border: '2px dashed #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#999' }}>
                    No Preview
                  </span>
                </div>
              )}
              <p
                className="color-names"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginTop: '10px',
                }}
              >
                {selectedColor.nametop}/{selectedColor.nameunder}
              </p>
            </div>
          </>
        ) : (
          <div className="col-md-12 mt-4">
            <p>No double-sided options available.</p>
          </div>
        )
      ) : colors.length > 0 ? (
        <>
          <div className="col-md-6">
            <div className="color-picker-container">
              <h3>Select a Color</h3>
              <div className="color-picker d-flex flex-wrap" id="colorPicker">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="color-box"
                    style={{
                      backgroundColor: color.hex,
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: '2px solid #ddd',
                      margin: '5px',
                      transition: 'transform 0.2s',
                    }}
                    onClick={() => onColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            {selectedColor.url ? (
              <img
                src={getAssetUrl(selectedColor.url)}
                alt={selectedColor.name}
                style={{
                  width: '180px',
                  height: '150px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '2px solid #ddd',
                }}
              />
            ) : (
              <div
                style={{
                  width: '180px',
                  height: '150px',
                  margin: '0 auto',
                  borderRadius: '10px',
                  border: '2px dashed #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '14px', color: '#999' }}>
                  No Preview
                </span>
              </div>
            )}
            <p
              className="color-name"
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              {selectedColor.name}
            </p>
          </div>
        </>
      ) : (
        <div className="col-md-12 mt-4">
          <p>No single-sided colors available.</p>
        </div>
      )}
    </div>
  );
};

export default ImageColorPicker;
