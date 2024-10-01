import "./main.css";
import React from "react";

export default function Main() {
  return (
    <div className="main">
      <div
        style={{
          display: "flex",

          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="./digital-marketing-4229635_1280.jpg"
          alt="no-image"
          className="main-image"
        />
        <div className="main-text-container">
          <h2 className="main-heading">
            Elevating Brands Through{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#0557ee",
              }}
            >
              Creativity
            </span>{" "}
            and{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#0557ee",
              }}
            >
              Innovation
            </span>
          </h2>
          <h4 className="sub-heading">
            Crafting immersive websites, impactful ads, and social media
            strategies tailored for growth
          </h4>
          <button className="btn">Explore Our Work</button>
        </div>
      </div>
    </div>
  );
}
