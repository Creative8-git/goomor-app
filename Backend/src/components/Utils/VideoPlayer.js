import React from 'react';

const VideoPlayer = ({ VideoSrc }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <video width="100%" height="100%" controls>
            <source src={VideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
