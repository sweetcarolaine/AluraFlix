import React, { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import "./VideoCard.scss";


const VideoCard = ({ video, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`video-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="video-thumbnail" 
        style={{ backgroundImage: `url(${video.image})` }}>
          <button className="play-button">
            <PlayArrow />
          </button>
      </div>

      {hovered && (
        <div className="video-hover-details">
          <h4 className="video-title">{video.title}</h4>
          <p className="video-description">{video.description}</p>
          <div className="icon-row">
            <button
              className="icon-btn"
              onClick={() => window.open(video.url, "_blank")}
            >
              <PlayArrow />
            </button>
            <button className="icon-btn">
              <Add />
            </button>
          </div>
          <div className="icon-row">
            <button className="icon-btn">
              <ThumbUpAltOutlined />
            </button>
            <button className="icon-btn">
              <ThumbDownOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;