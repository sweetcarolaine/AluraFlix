import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/videocard/VideoCard.jsx";
import "./Home.scss";

function Home() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="home">
      {categories.map((category) => (
        <div
          key={category.title}
          style={{
            backgroundColor: category.color,
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{category.title}</h2>
          <div className="video-list">
            {category.videos.map((video, index) => (
              <VideoCard key={video.title} video={video} index={index}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
