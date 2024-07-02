import React from 'react';
import Category from './Category';
import './Categories.css';

const Categories = ({ videos, setCurrentVideo, handleDelete, setShowModal, handleFilter, selectedCategory }) => {
  const categories = ["Frontend", "Backend", "Innovación", "Gestión"];

  return (
    <div className="categories">
      <h2>Categorías</h2>
      <div className="category-buttons">
        <button onClick={() => handleFilter('')} className={!selectedCategory ? 'active' : ''}>All</button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      {categories.map(category => (
        <Category
          key={category}
          category={category}
          videos={videos.filter(video => video.category === category)}
          setCurrentVideo={setCurrentVideo}
          handleDelete={handleDelete}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
};

export default Categories;
