import React from 'react';
import { Link } from 'react-router-dom';


const PostNavigation = () => {
    return (
        <div className="container-fluid bg-light pb-5">
            <div className="container pb-5">
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="display-4">Post Options</h1>
                    <p className="lead">Our range of Steel or Aluminum posts</p>
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-center mb-4">
                    <Link to="/goomor/steelpost" className="btn btn-primary me-3">
                        Steel Posts
                    </Link>
                    <Link to="/goomor/aluminiumpost" className="btn btn-secondary">
                        Aluminum Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostNavigation;
