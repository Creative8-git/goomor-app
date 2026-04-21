import React, { useState } from 'react';
import { RecommendationData } from './BeamValueData';

const BeamRecommendation = () => {
  const [width, setWidth] = useState('');
  const [selectedSet, setSelectedSet] = useState(RecommendationData[0].id); // Default to the first dataset
  const [result, setResult] = useState('');

  const findBeam = () => {
    const parsedWidth = parseInt(width, 10);
    if (isNaN(parsedWidth)) {
      setResult('<p class="error">Please enter a valid number for the width.</p>');
      return;
    }
  
    const currentDataSet = RecommendationData.find((set) => set.id === selectedSet);
    if (!currentDataSet) {
      setResult('<p class="error">Invalid dataset selected.</p>');
      return;
    }
  
    const closestLoad = currentDataSet.value.find((b) => b.width >= parsedWidth);
  
    if (!closestLoad) {
      setResult(`<p class="error">No recommendations found for the entered width: ${parsedWidth}</p>`);
      return;
    }
  
    const recommendations = currentDataSet.value.filter((b) => b.width === closestLoad.width);
  
    const tableRows = recommendations
      .map((r) => `
        <tr>
          <td>${r.type}</td>
          <td>${r.N1 ?? 'Not applicable'}</td>
          <td>${r.N2 ?? 'Not applicable'}</td>
          <td>${r.N3 ?? 'Not applicable'}</td>
        </tr>
      `)
      .join('');
  
    setResult(`
      <p>Showing recommendations for preferred Width: ${parsedWidth} (Dataset: ${currentDataSet.name})</p>
      <table class="recommendations-table">
        <thead>
          <tr>
            <th>Beam Type</th>
            <th>N1 (Up to 122 Km/h)</th>
            <th>N2 (Up to 144 Km/h)</th>
            <th>N3 (Up to 180 Km/h)</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `);
  };
  

  const currentImage = RecommendationData.find((set) => set.id === selectedSet)?.images[0]?.image;

  return (
    <div className="beam-container text-center">
      <h1>Beam Selector</h1>
      <div className="input-group">
        <label htmlFor="dataset">Select your Configuration </label>
        <div className="row">
        <select
          id="dataset"
          value={selectedSet}
          onChange={(e) => setSelectedSet(e.target.value)}
        >
          {RecommendationData.map((set) => (
            <option key={set.id} value={set.id}>
              {set.name}
            </option>
          ))}
        </select>
        </div>
      </div>
      <img
        src={currentImage}
        alt="Beam Configuration"
        className="beam-image"
      />
      <div className="input-group">
        <label htmlFor="width">Desired Width (W):</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Enter width (W)"
        />
      </div>
      <button className="recommend-button" onClick={findBeam}>
        Show Recommendations
      </button>
      <div
        className="result-container"
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
    </div>
  );
};

export default BeamRecommendation;
