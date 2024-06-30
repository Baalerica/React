import React, { useState } from 'react';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div>
      <h1>Video Management Platform</h1>
      <VideoForm currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} refreshVideos={() => {}} />
      <VideoList setCurrentVideo={setCurrentVideo} />
    </div>
  );
};

export default App;
