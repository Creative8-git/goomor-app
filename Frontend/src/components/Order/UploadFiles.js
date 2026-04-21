import React from 'react';

const UploadFiles = ({ uploadedFiles, handleFileChange, removeFile }) => {
  return (
    <div className="mt-2">
      <label>Upload Files</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="form-control mt-1"
      />
      <div className="mt-2">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="d-flex align-items-center">
            <span>{file.name}</span>
            <button
              className="btn btn-sm btn-danger ml-2"
              onClick={() => removeFile(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadFiles;
