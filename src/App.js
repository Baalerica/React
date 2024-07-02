import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Footer from './components/Footer';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';
import Modal from './components/Modal';
import { getVideos, deleteVideo } from './api';
import './App.css';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    refreshVideos();
  }, []);

  const refreshVideos = () => {
    getVideos().then(videos => {
      setVideos(videos);
      setFilteredVideos(videos);
    });
  };

  const handleDelete = (id) => {
    deleteVideo(id).then(() => {
      refreshVideos();
    });
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === category));
    }
  };

  return (
    <div id="root">
      <Header />
      <Banner />
      <Categories
        videos={videos}
        setCurrentVideo={setCurrentVideo}
        handleDelete={handleDelete}
        setShowModal={setShowModal}
        handleFilter={handleFilter}
        selectedCategory={selectedCategory}
      />
      <div className="content">
        <div className="container" id="new-video">
          <h1>Video Management Platform</h1>
          <VideoForm
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            refreshVideos={refreshVideos}
          />
        </div>
        <VideoList 
          videos={filteredVideos} 
          setCurrentVideo={setCurrentVideo} 
          handleDelete={handleDelete} 
        />
      </div>
      <Footer />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <VideoForm
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
          refreshVideos={refreshVideos}
        />
      </Modal>
    </div>
  );
};

export default App;
