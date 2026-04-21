import React, { useState } from 'react';
import axios from 'axios';

const SendEmailComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setUploadedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append('files', uploadedFiles[i]);
    }
    formData.append('to', 'jason.dao@goomor.com.au');
    formData.append('subject', 'Project Data and Uploaded Files');
    formData.append('text', 'Please find attached the project details and uploaded files.');

    try {
      await axios.post('https://goomor-88tt.onrender.com/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Email successfully sent!');
    } catch (error) {
      console.error('There was an error sending the email:', error);
    }
  };

  return (
    <div className="send-email-container">
      <h2>Send an Email with Attachments</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload Files (Image/PDF)</label>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default SendEmailComponent;
