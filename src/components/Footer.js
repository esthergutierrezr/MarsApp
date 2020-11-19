
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Footer (){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-4">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                        <div className="social-container">
                            <div className="icons">
                            <a href="https://www.facebook.com" className="facebook social ">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            </div>
                        </div> 
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>Mars Weather</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://mars.nasa.gov/insight/">About Mars</a></li>
                            <li><a href="https://mars.nasa.gov/insight/weather/">About Mars Weather</a></li>
                            <li><a href="https://www.spacex.com/human-spaceflight/mars/">About the colonization</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;