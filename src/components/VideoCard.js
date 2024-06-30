import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onDelete, onEdit }) => {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <a href={video.url} target="_blank" rel="noopener noreferrer">Watch</a>
      <button onClick={() => onEdit(video)}>Edit</button>
      <button onClick={() => onDelete(video.id)}>Delete</button>
    </div>
  );
};

export default VideoCard;