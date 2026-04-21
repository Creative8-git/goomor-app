import React, { useState } from 'react';
import axios from 'axios';
import ContactRedirect from './Contact/ContactRedirect';

const Contactform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        subject: '',
        message: '',
    });
    const [files, setFiles] = useState([]); // State to store uploaded files
    const [filePreviews, setFilePreviews] = useState([]); // State to store file preview URLs

    // Handle form field changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle file input change and generate previews
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const newFiles = [...files, ...selectedFiles];
        setFiles(newFiles);

        // Generate file preview URLs
        const newPreviews = selectedFiles.map((file) => {
            if (file.type.startsWith('image/')) {
                return { type: 'image', url: URL.createObjectURL(file), name: file.name };
            }
            return { type: 'file', name: file.name };
        });
        setFilePreviews([...filePreviews, ...newPreviews]);
    };

    // Remove a file
    const removeFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = filePreviews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setFilePreviews(newPreviews);
    };

    // Handle form submission
    const sendEmail = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('to', 'jason.dao@goomor.com.au');
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append(
            'text',
            `From: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${formData.project}\nMessage: ${formData.message}`
        );

        // Append files to the FormData object
        files.forEach((file) => {
            formDataToSend.append('files', file);
        });

        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + "/send-email",
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    project: '',
                    subject: '',
                    message: '',
                });
                setFiles([]);
                setFilePreviews([]); // Clear previews
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred, please try again.');
        }
    };

    return (
        <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 mb-5">
                    {/* Left Side: Form */}
                    <div className="col-lg-6">
                        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
                            <p className="text-uppercase text-secondary fs-5 mb-0">Let’s Connect</p>
                            <h2 className="display-4 text-capitalize mb-3">Send Your Inquiry</h2>
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating border border-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating border border-secondary">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating border border-secondary">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating border border-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="project"
                                            placeholder="Project"
                                            value={formData.project}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="project">Your Project</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating border border-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating border border-secondary">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a message here"
                                            id="message"
                                            style={{ height: "160px" }}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                {/* File Upload Input */}
                                <div className="col-12">
                                    <label htmlFor="files" className="form-label">Upload Files</label>
                                    <input 
                                        type="file" 
                                        id="files" 
                                        multiple 
                                        onChange={handleFileChange} 
                                        className="form-control" 
                                    />
                                </div>
                                {/* File Preview Section */}
                                <div className="col-12">
                                    <h5>Uploaded Files:</h5>
                                    <div className="d-flex flex-wrap gap-3">
                                        {filePreviews.map((file, index) => (
                                            <div key={index} className="file-preview" style={{ textAlign: 'center', width: '120px' }}>
                                                {file.type === 'image' ? (
                                                    <img 
                                                        src={file.url} 
                                                        alt={file.name} 
                                                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px', border: '1px solid #ddd' }} 
                                                    />
                                                ) : (
                                                    <div style={{ width: '100px', height: '100px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                                                        <span style={{ fontSize: '12px', textAlign: 'center', padding: '5px' }}>{file.name}</span>
                                                    </div>
                                                )}
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-danger mt-2 w-100"
                                                    onClick={() => removeFile(index)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary w-100 py-3">Contact Us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Right Side: Google Map */}
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="contact-map h-100 w-100">
                            <iframe 
                                title="Google Map"
                                className="h-100 w-100"
                                style={{ height: "500px" }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.817079698376!2d150.92986931135533!3d-33.840469217480496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1297c043d52b11%3A0xcf42e72cde0f7cb7!2s105%20Long%20St%2C%20Smithfield%20NSW%202164!5e0!3m2!1sen!2sau!4v1727052069083!5m2!1sen!2sau"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <ContactRedirect />
            </div>
        </div>
    );
};

export default Contactform;
