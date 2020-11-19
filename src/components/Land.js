<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
import React from 'react'

function Land() {
    return (
        <div>
            <p>hello this is Land</p>
        </div>
    )
}

export default Land

||||||||| merged common ancestors
=========
=======

>>>>>>> 4177857a87efa925c808805e56c22d6aedc6e0d3
import React from "react";
import "./Land.css";
import { Link } from "react-router-dom";
// import landImage from "./images/landImage.jpeg";

function Land() {
  return (
    <div className="landImage">
      <p>Hello</p>
      {/* <img src={landImage} class="landImage" /> */}

      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="homePageLink">Weather</button>
      </Link>
    </div>
  );
}

export default Land;
<<<<<<< HEAD
||||||| merged common ancestors
>>>>>>>>> Temporary merge branch 2
=======



>>>>>>> 4177857a87efa925c808805e56c22d6aedc6e0d3
