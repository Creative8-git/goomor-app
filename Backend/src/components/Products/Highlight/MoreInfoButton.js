import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoreInfoButton = ({ links }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (Array.isArray(links) && links.length > 1) {
            navigate('/pdf-listing', { state: { pdfFiles: links } });
        } else {
            window.open(links[0], '_blank');
        }
    };

    return (
        <div className=" text-start">
            <button className="btn btn-primary" onClick={handleClick}>
                More Info
            </button>
        </div>
    );
};

export default MoreInfoButton;
