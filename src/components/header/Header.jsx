import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="owl-carousel header-carousel">
          <div className="owl-carousel-item">
            <video
              width="100%"
              autoPlay
              loop
              muted
              src={require("../assets/videos/(1).webm")}
            ></video>
          </div>
          <div className="owl-carousel-item">
            <video
              width="100%"
              autoPlay
              loop
              muted
              src={require("../assets/videos/(2).webm")}
            ></video>
          </div>
          <div className="owl-carousel-item">
            <video
              width="100%"
              autoPlay
              loop
              muted
              src={require("../assets/videos/(4).webm")}
            ></video>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
