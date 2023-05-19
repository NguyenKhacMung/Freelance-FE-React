import React from 'react';
import ReactPlayer from 'react-player';
import defaultImage from '../../assets/images/courseImage.jpg';

const VideoPlayer = ({ videoUrl, imageUrl = defaultImage }) => {
  const isVideoValid = videoUrl && videoUrl.length > 0;

  return (
    <div>
      {isVideoValid ? (
        // <video controls>
        //   <source src={videoUrl} type="video/mp4" />
        //   {/* Hiển thị thông báo nếu trình duyệt không hỗ trợ video */}
        //   Your browser does not support the video tag.
        // </video>
        <div>
          <ReactPlayer url={videoUrl} width="100%" height="500px" />
        </div>
      ) : (
        <img src={imageUrl} alt="Invalid Video URL" />
      )}
    </div>
  );
};

export default VideoPlayer;