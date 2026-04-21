import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../../../utils/assetUrl';

const MoreInfoButton = ({ links }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (Array.isArray(links) && links.length > 1) {
            navigate('/pdf-listing', { state: { pdfFiles: links.map(getAssetUrl) } });
        } else if (links?.length) {
            window.open(getAssetUrl(links[0]), '_blank');
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
