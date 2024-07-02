import React, { useState } from 'react';
import Category from './Category';
import './Categories.css';

const Categories = ({ videos, setCurrentVideo, handleDelete, setShowModal }) => {
  const categories = ["Frontend", "Backend", "Innovación", "Gestión"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredVideos = selectedCategory
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  return (
    <div className="categories">
      <h2>Categorías</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="category-list">
        {categories.map(category => (
          <Category
            key={category}
            category={category}
            videos={filteredVideos.filter(video => video.category === category)}
            setCurrentVideo={setCurrentVideo}
            handleDelete={handleDelete}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
