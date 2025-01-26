import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://via.placeholder.com/1200x300.png?text=Aluraflix+Banner"
        alt="Banner do Aluraflix"
      />
      <div className="banner-text">
        <h1>Aluraflix</h1>
        <p>O seu hub de vídeos favoritos!</p>
      </div>
    </div>
  );
}

export default Banner;

