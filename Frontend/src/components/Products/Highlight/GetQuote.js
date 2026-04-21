import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetQuoteButton = ({ links }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
};

    return (
        <div className=" text-start">
            <button className="btn btn-primary" onClick={handleClick}>
                Get Quote
            </button>
        </div>
    );
};

export default GetQuoteButton;
