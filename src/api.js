let videos = [
    { id: 1, title: "Video 1", description: "Description 1", url: "http://example.com/video1" },
    { id: 2, title: "Video 2", description: "Description 2", url: "http://example.com/video2" },
  ];
  
  export const getVideos = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(videos), 500);
    });
  };
  
  export const addVideo = (video) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        video.id = videos.length + 1;
        videos.push(video);
        resolve(video);
      }, 500);
    });
  };
  
  export const updateVideo = (id, updatedVideo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        videos = videos.map(video => video.id === id ? { ...video, ...updatedVideo } : video);
        resolve(updatedVideo);
      }, 500);
    });
  };
  
  export const deleteVideo = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        videos = videos.filter(video => video.id !== id);
        resolve();
      }, 500);
    });
  };
  