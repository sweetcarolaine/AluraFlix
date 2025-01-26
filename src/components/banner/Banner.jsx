import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/assets/thumbnail/1.png"
        alt="banner de front-end"
        className="banner-image"
      />
      <div className="banner-content">
        <div className="banner-text">
          <h1>O que faz uma desenvolvedora front-end?</h1>
          <p>O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal?</p>
        </div>
        <div className="banner-youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=SPO1Ymt9m6NDCTWa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Banner;
