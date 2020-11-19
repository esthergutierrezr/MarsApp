import React from "react";
import Image from "./images/shuttle-cockpit-space-rocket.jpg";
import { Link } from 'react-router-dom'

function Spaceship() {
  return (
    <div>
      <Link to="/land">
        <img src={Image} className="cockpit" />
      </Link>
    </div>
  );
}

export default Spaceship;
