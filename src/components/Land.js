import React from "react";
import "./Land.css";
import { Link } from "react-router-dom";
// import landImage from "./images/landImage.jpeg";

function Land() {
  return (
    <div className="landImage">
      <p>Hello</p>
      {/* <img src={landImage} class="landImage" /> */}

      <Link to="/weather" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="homePageLink">Weather</button>
      </Link>
    </div>
  );
}

export default Land;
