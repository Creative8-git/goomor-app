
import React from 'react';

const GallerySection = () => {
    const galleryImages = [
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/350"
    ];

    return (
        <div className="gallery container py-5">
            <h2 className="text-center mb-4">Inspiration Gallery</h2>
            <div className="row">
                {galleryImages.map((src, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <img src={src} alt={`Patio ${index + 1}`} className="img-fluid" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;