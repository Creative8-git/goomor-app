import React from 'react';
import { Link } from 'react-router-dom';


const BeamNavigation = () => {
    return (
        <div className="container-fluid bg-light pb-5">
            <div className="container pb-5">
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="display-4">Beam Options</h1>
                    <p className="lead">Our range of Steel or Aluminum beams</p>
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-center mb-4">
                    <Link to="/goomor/steelbeam" className="btn btn-primary me-3">
                        Steel Beams
                    </Link>
                    <Link to="/goomor/aluminiumbeam" className="btn btn-secondary">
                        Aluminum Beams
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeamNavigation;
