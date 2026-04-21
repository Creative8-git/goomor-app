import React, { useState } from 'react';
import SingleColor from './SingleColor';
import DoubleColor from './DoubleColor';
import Finishes from './Finishes';

const ImageColorPicker = ({
  colors = [],
  doubleside = [],
  finishes = [],
}) => {
  const [activeTab, setActiveTab] = useState('single');
  const [modal, setModal] = useState({ isOpen: false, image: "", title: "" });

  // State for selected color
  const [singleSelectedColor, setSingleSelectedColor] = useState(null);
  const [doubleSelectedColor, setDoubleSelectedColor] = useState(null);

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="row">
      <div className="col-md-12 mt-5">
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === "single" ? "active" : ""}`}
            onClick={() => handleTabClick("single")}
          >
            Roof colors
          </button>
          <button
            className={`tab-button ${activeTab === "double" ? "active" : ""}`}
            onClick={() => handleTabClick("double")}
          >
            Double-Sided
          </button>
          <button
            className={`tab-button ${activeTab === "finishes" ? "active" : ""}`}
            onClick={() => handleTabClick("finishes")}
          >
            Ceiling
          </button>
        </div>
      </div>


      {activeTab === "single" && (
        <SingleColor
          colors={colors}
          onColorClick={(color) => {
            console.log("Selected Single Color:", color);
            setSingleSelectedColor(color);
          }}
          selectedColor={singleSelectedColor}
          setModal={setModal}
        />
      )}
      {activeTab === "double" && (
        <DoubleColor
          doubleside={doubleside}
          onColorClick={(color) => {
            console.log("Selected Double Color:", color);
            setDoubleSelectedColor(color);
          }}
          selectedColor={doubleSelectedColor}
          setModal={setModal}
        />
      )}
      {activeTab === "finishes" && (
        <Finishes finishes={finishes} onColorClick={() => {}} />
      )}

      {modal.isOpen && (
        <div className="overlay-modal" onClick={() => setModal({ isOpen: false, image: "" })}>
          <img src={modal.image} alt="Preview" className="modal-image" />
        </div>
      )}
    </div>
  );
};


export default ImageColorPicker;
