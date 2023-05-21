import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {

  return <div>
    <ReactPlayer url={videoUrl} controls={true} width="100%" height="500px" />
  </div>
}
export default VideoPlayer