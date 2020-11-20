import React from "react";
import "./Land.css";
import { Link } from "react-router-dom";
import { init } from "ityped";

class Land extends React.Component {
  state = {
    isButtonDisplayed: false,
  };

  displayButton = () => {
    setTimeout(() => {
      this.setState({ isButtonDisplayed: true });
    }, 8000);
  };

  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Welcome to Mars. The Local time is 12:34  "],
      typeSpeed: 80,
      disableBackTyping: true,
    });

    const myElementt = document.querySelector("#myElementt");
    init(myElementt, {
      showCursor: false,
      startDelay: 4800,
      typeSpeed: 80,
      strings: ["We wish you a pleasent stay. "],
      disableBackTyping: true,
    });

    this.displayButton();
  }
  render() {
    return (
      <div className="landImage">
        <div className="title">
          <h2>Elysium Planitia</h2>
        </div>

        <div id="myElement"> </div>
        <div id="myElementt"> </div>

        {this.state.isButtonDisplayed ? (
          <div className="button">
            <Link
              to="/weather"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="button">
                <button className="homePageLink">
                  Check Weather Forecast{" "}
                </button>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Land;
