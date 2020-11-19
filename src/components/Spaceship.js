import React from "react";
import Image from "./images/shuttle-cockpit-space-rocket.jpg";
import Audio from "./images/Rocket countdown and blastoff.wav";
import { Link } from "react-router-dom";
import './Spaceship.css'

function Spaceship() {
  return (
    <div>
      <Link to={"/spaceship/land"}>
        <img src={Image} className="cockpit" />
      </Link>
      <audio className="audio-element">
        <source src={Audio}></source>
      </audio>
    </div>
  );
}

export default Spaceship;
