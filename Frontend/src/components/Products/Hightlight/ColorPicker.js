import React, { useState } from 'react';

const ColorPicker = ({
  colors = [], // Default value to an empty array
  doubleside = [], // Default value to an empty array
  onColorClick,
  selectedColor,
  getContrastColor,
}) => {
  const [viewDoubleSide, setViewDoubleSide] = useState(false); // Local state for toggle

  const handleToggle = () => {
    setViewDoubleSide(!viewDoubleSide);
  };

  return (
    <div className="row">
      {/* Toggle Switch */}
      <div className="col-md-12 mt-5">
        <div className="custom-toggle">
          <span className={!viewDoubleSide ? 'active' : ''}>Single-Sided</span>
          <div
            className={`toggle-switch ${viewDoubleSide ? 'active' : ''}`}
            onClick={handleToggle}
          >
            <div
              className={`toggle-thumb ${viewDoubleSide ? 'delivery' : ''}`}
            ></div>
          </div>
          <span className={viewDoubleSide ? 'active' : ''}>Double-Sided</span>
        </div>
      </div>

      {/* Color Picker Section */}
      {viewDoubleSide ? (
        doubleside.length > 0 ? (
          <>
            {/* Double-Sided View */}
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
                      {/* Top Color */}
                      <div
                        style={{
                          backgroundColor: color.hextop,
                          height: '50%',
                          width: '100%',
                        }}
                      ></div>
                      {/* Under Color */}
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
              <div
                className="color-preview"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: `linear-gradient(to bottom, ${selectedColor.hextop} 50%, ${selectedColor.hexunder} 50%)`,
                  border: '2px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                }}
              ></div>
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
          {/* Single-Sided View */}
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
            <div
              className="color-preview"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: selectedColor.hex,
                border: '2px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
            ></div>
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

export default ColorPicker;
