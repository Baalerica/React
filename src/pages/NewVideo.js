import React, { useState } from 'react';
import VideoForm from '../components/VideoForm';
import './NewVideo.css';

const NewVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div className="new-video-page">
      <h1>Nuevo Video</h1>
      <VideoForm currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} refreshVideos={() => {}} />
    </div>
  );
};

export default NewVideo;