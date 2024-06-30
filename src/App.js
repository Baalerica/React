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

  useEffect(() => {
    refreshVideos();
  }, []);

  const refreshVideos = () => {
    getVideos().then(setVideos);
  };

  const handleDelete = (id) => {
    deleteVideo(id).then(() => {
      refreshVideos();
    });
  };

  return (
    <div>
      <Header />
      <Banner />
      <Categories
        videos={videos}
        setCurrentVideo={setCurrentVideo}
        handleDelete={handleDelete}
        setShowModal={setShowModal}
      />
      <div className="container" id="new-video">
        <h1>Video Management Platform</h1>
        <VideoForm
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
          refreshVideos={refreshVideos}
        />
        <VideoList setCurrentVideo={setCurrentVideo} />
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
