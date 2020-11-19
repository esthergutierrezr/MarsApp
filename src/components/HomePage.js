// import { render } from '@testing-library/react';
import React from 'react';
import {Link} from "react-router-dom";
import "./Homepage.css";
import Mars from "./images/mars_01.svg";



const planet= (
    <> <img src={Mars} alt='Planet' useMap="#image-map" />
    <map name="image-map">
        <Link to="/Spaceship"> <area className='planet' target="" alt="Planet" title=""  coords="2256,2179,962" shape="circle" /></Link>
    </map> </>
);



function HomePage() {
    return (
        <div className="homepage">
            {planet}
        </div>
    )
}


export default HomePage;
