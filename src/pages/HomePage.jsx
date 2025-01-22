import React from "react";
import VideoCard from "../components/VideoCard";
import "./HomePage.css";

const HomePage = () => {
  const videos = [
    { id: 1, title: "SEO com React", category: "Front End", image: "url" },
    { id: 2, title: "O que estudar para ser backend?", category: "Back End", image: "url" },
  ];

  return (
    <main className="home-page">
      <h2>Bem-vindo ao Aluraflix</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
