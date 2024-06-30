import React, { useState, useEffect } from 'react';
import { addVideo, updateVideo } from '../api';

const VideoForm = ({ currentVideo, setCurrentVideo, refreshVideos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (currentVideo) {
      setTitle(currentVideo.title);
      setDescription(currentVideo.description);
      setUrl(currentVideo.url);
    }
  }, [currentVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoData = { title, description, url };

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <button type="submit">{currentVideo ? "Update" : "Add"} Video</button>
    </form>
  );
};

export default VideoForm;
