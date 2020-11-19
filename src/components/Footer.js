
import React from "react";
import "./footer.css";


function Footer (){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>Project</li>
                            <li>Our Team</li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
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