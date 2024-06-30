import React from 'react';
import Category from './Category';
import './Categories.css';

const Categories = ({ videos, setCurrentVideo, handleDelete, setShowModal }) => {
  const categories = ["Frontend", "Backend", "Innovación", "Gestión"];

  return (
    <div className="categories">
      <h2>Categorías</h2>
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
