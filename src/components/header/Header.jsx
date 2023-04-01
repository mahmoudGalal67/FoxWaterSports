import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="owl-carousel header-carousel">
          <div className="owl-carousel-item">
            <img
              width="100%" alt="jetski for sale in dubai"
              src={require("../assets/images/01.webp")}
            />
          </div>
          <div className="owl-carousel-item">
            <img
              width="100%" alt="jetski rental in dubai"
              src={require("../assets/images/02.webp")}
            />
          </div>
          <div className="owl-carousel-item">
            <img
              width="100%" alt="best jet ski dubai"
              src={require("../assets/images/03.webp")}
            />
          </div>
          <div className="owl-carousel-item">
            <img
              width="100%" alt="best jet ski dubai"
              src={require("../assets/images/04.webp")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
