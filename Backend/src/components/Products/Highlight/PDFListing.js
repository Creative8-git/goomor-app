import React from 'react';
import { useLocation } from 'react-router-dom';

const PDFListing = () => {
  const location = useLocation();
  const pdfFiles = location.state?.pdfFiles || [];

  // Extract filename from URL for display
  const getFileName = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1].replace(/.pdf$/, '').replace(/-/g, ' ');
  };

  return (
    <div className="pdf-listing container my-5">
      <h2>Available information</h2>
      <ul className="list-group">
        {pdfFiles.map((url, index) => (
          <li key={index} className="list-group-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {getFileName(url)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFListing;
