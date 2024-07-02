import React from 'react';
import './VideoList.css';

const VideoList = ({ videos, setCurrentVideo, handleDelete }) => {
  return (
    <div className="video-list-container">
      {videos.map(video => (
        <div key={video.id} className="video-item">
          <img src={video.thumbnail || 'https://via.placeholder.com/300'} alt={video.title} className="video-thumbnail" />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <p><strong>Category:</strong> {video.category}</p>
          <div className="video-actions">
            <button onClick={() => setCurrentVideo(video)}>Edit</button>
            <button onClick={() => handleDelete(video.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
