import React from 'react';
import VideoCard from './VideoCard';
import './Category.css';

const Category = ({ category, videos, setCurrentVideo, handleDelete, setShowModal }) => {
  return (
    <div className="category">
      <h3>{category}</h3>
      <div className="category-list">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onDelete={handleDelete}
            onEdit={(video) => {
              setCurrentVideo(video);
              setShowModal(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
