import React, { useEffect, useState } from 'react';
import { getVideos, deleteVideo } from '../api';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ setCurrentVideo, refreshVideos }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  const handleDelete = (id) => {
    deleteVideo(id).then(() => {
      refreshVideos();
      getVideos().then(setVideos); 
    });
  };

  return (
    <div className="video-list-container">
      {videos.map(video => (
        <VideoItem key={video.id} video={video} onDelete={handleDelete} onEdit={() => setCurrentVideo(video)} />
      ))}
    </div>
  );
};

export default VideoList;
