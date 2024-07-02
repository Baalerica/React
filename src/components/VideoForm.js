import React, { useState, useEffect } from 'react';
import { addVideo, updateVideo } from '../api';
import './VideoForm.css';

const VideoForm = ({ currentVideo, setCurrentVideo, refreshVideos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentVideo) {
      setTitle(currentVideo.title);
      setDescription(currentVideo.description);
      setUrl(currentVideo.url);
      setCategory(currentVideo.category);
    }
  }, [currentVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoData = { title, description, url, category };

    if (currentVideo) {
      updateVideo(currentVideo.id, videoData).then(() => {
        refreshVideos();
        setCurrentVideo(null);
      });
    } else {
      addVideo(videoData).then(() => {
        refreshVideos();
      });
    }

    setTitle('');
    setDescription('');
    setUrl('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Innovación">Innovación</option>
        <option value="Gestión">Gestión</option>
      </select>
      <button type="submit">{currentVideo ? "Update" : "Add"} Video</button>
    </form>
  );
};

export default VideoForm;
