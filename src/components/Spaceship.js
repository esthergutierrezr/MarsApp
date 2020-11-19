import React from "react";
import Image from "./images/shuttle-cockpit-space-rocket.jpg";
import Audio from "./images/Rocket-launch.mp3";
import { Link } from "react-router-dom";
import "./Spaceship.css";


function Spaceship(props) {

  const prepareForTakeOff = () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    setTimeout(() => {
        props.history.push('/land');
      },15000 );
  }
  return (
    <div>
      <Link to={"/land"}>
        <img src={Image} className="cockpit" />
      </Link>
      <button className="revert-button" onClick={prepareForTakeOff}>Launch</button>
      <audio controls autoPlay className="audio-button">
        <source src={Audio} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default Spaceship;
