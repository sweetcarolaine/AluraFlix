import React, { useState } from "react";
import { PlayArrow, Edit, Delete } from "@mui/icons-material";
import "./VideoCard.scss";

const VideoCard = ({ video, index, category, onEdit, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  useState(() => {
    console.log(`carregado categoria ${category.title} video ${index}`);
  });

  return (
    <div
      className={`video-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: `${category.color} 0px 3px 6px`,
      }}
    >
      <div
        className="video-thumbnail"
        style={{ backgroundImage: `url(${video.image})` }}
      >
        <button className="play-button">
          <PlayArrow />
        </button>
      </div>

      {hovered && (
        <div className="video-hover-details">
          <h4 className="video-title">{video.title}</h4>
          <p className="video-description">{video.description}</p>
          <div className="action-buttons">
            <button
              className="icon-btn"
              onClick={() => window.open(video.url, "_blank")}
            >
              <PlayArrow />
            </button>
            <button className="icon-btn" onClick={() => onEdit(category.id, video, index)}>
              <Edit />
            </button>
            <button className="icon-btn" onClick={() => onDelete(category, index)}>
              <Delete />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;

