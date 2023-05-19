import React from 'react';
import ReactPlayer from 'react-player';
import defaultImage from '../../assets/images/courseImage.jpg';

const VideoPlayer = ({ videoUrl, imageUrl = defaultImage }) => {
  const isVideoValid = videoUrl && videoUrl.length > 0;

  return (
    <div>
      {isVideoValid ? (
        <div>
          <ReactPlayer url={videoUrl} controls={true} width="100%" height="500px" />
        </div>
      ) : (
        <img src={imageUrl} alt="Invalid Video URL" />
      )}
    </div>
  );
};

export default VideoPlayer;