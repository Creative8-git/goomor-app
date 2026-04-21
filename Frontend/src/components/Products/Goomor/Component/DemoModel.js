import React from 'react';
import PropTypes from 'prop-types';

const DemoModel = ({ src }) => {
    return (
        <div 
            className="modelo-wrapper" 
            style={{ 
                width: '100%', 
                paddingBottom: '56.25%', // 16:9 aspect ratio
                position: 'relative' 
            }}
        >
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%' 
                }}
            >
                <iframe
                    src={src}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allowFullScreen
                    title="SketchUp Viewer"
                ></iframe>
            </div>
        </div>
    );
};

DemoModel.propTypes = {
    src: PropTypes.string.isRequired,
};

export default DemoModel;
