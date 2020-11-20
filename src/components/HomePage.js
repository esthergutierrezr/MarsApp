
// import { render } from '@testing-library/react';
import React from 'react';
import {Link} from "react-router-dom";
import "./Homepage.css";
import Mars from "./images/mars_01.jpg";



const planet= (
    <> <img className="homepage" src={Mars} alt='Planet' useMap="#image-map" />
    <map name="image-map">
        <Link to="/Spaceship"> <area  target="" alt="Planet"  coords="296,288,250" shape="circle" /></Link>
    </map> </>
);



function HomePage() {
    return (
        <div className="homepage-container">
        {planet}
         </div>
    )
}



export default HomePage;


