import React, { useEffect, useState } from 'react';
import { getVideos, deleteVideo } from '../api';
import VideoItem from './VideoItem';

const VideoList = ({ setCurrentVideo }) => {
  const [videos, setVideos] = useState([]);

  const refreshVideos = () => {
    getVideos().then(setVideos);
  };

  useEffect(() => {
    refreshVideos();
  }, []);

  const handleDelete = (id) => {
    deleteVideo(id).then(() => {
      refreshVideos();
    });
  };

  return (
    <div>
      {videos.map(video => (
        <VideoItem key={video.id} video={video} onDelete={handleDelete} onEdit={() => setCurrentVideo(video)} />
      ))}
    </div>
  );
};

export default VideoList;
