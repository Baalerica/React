import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <h2>Featured Videos</h2>
      <div className="banner-images">
        <img src="https://via.placeholder.com/150" alt="Featured Video 1" />
        <img src="https://via.placeholder.com/150" alt="Featured Video 2" />
        <img src="https://via.placeholder.com/150" alt="Featured Video 3" />
      </div>
    </div>
  );
};

export default Banner;
