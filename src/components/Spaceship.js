import React, { useState } from "react";
import Image from "./images/shuttle-cockpit-space-rocket.jpg";
import Audio from "./images/Rocket-launch.mp3";
import "./Spaceship.css";
import { Shake } from "reshake";

function Spaceship(props) {
  const [isPageFrozen, setPage] = useState(true);

  const prepareForTakeOff = () => {
    setTimeout(() => {
      setPage(!isPageFrozen);
    }, 10000);
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    setTimeout(() => {
      props.history.push("/land");
    }, 15000);
  };

  return (
    <div>
      <Shake
        h={23}
        v={5}
        r={3}
        dur={300}
        int={10}
        max={100}
        fixed={true}
        fixedStop={false}
        freez={isPageFrozen}
      >
        <img src={Image} className="cockpit" />

        <button className="revert-button" onClick={prepareForTakeOff}>
          Launch
        </button>
      </Shake>
      <audio controls className="audio-button">
        <source src={Audio} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default Spaceship;
