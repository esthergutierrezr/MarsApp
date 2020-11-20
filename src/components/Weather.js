import React from "react";
import axios from "axios";
import Footer from "./Footer";
import WeatherDetails from "./WeatherDetails";
import "./Weather.css";

class Weather extends React.Component {
  state = {
    weatherData: [],
  };

  componentDidMount() {
    this.fetchWeather();
    // console.log(weatherData);
  }

  fetchWeather = () => {
    axios
      .get(
        "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
      )
      .then((response) => {
        const { sol_keys, validity_checks, ...weatherData } = response.data;
        const result = [];
        for (let key in weatherData) {
          result.push(weatherData[key]);
        }

        for (let i = 0; i < sol_keys.length; i++) {
          result[i].mars_day = sol_keys[i];
        }

        console.log(result);
        this.setState({ weatherData: result });
        // console.log(response)
      });
  };

  render() {
    return (
      <div className="weather">
        <div className="weather-flexbox">
          <div className="info">
            <h1>Latest Weather at Elysium Platania</h1>
            <p>
              {" "}
              InSight is talking daily weather measure "temperatura, wind,
              pressure" on the surface of Mars at Elysium Platania, a flat,
              smooth plain near Mars' equator.{" "}
            </p>
            <h4>Sol 265 | August 25</h4>
            <div>
              <p>High: 15° F | C</p>
              <p>Low: -115° F | C</p>
            </div>
          </div>

          <div>
            {this.state.weatherData.map((data, index) => (
              <WeatherDetails {...data} key={index} />
            ))}
          </div>
        </div>
        <footer>
          <Footer height="10vh" />
        </footer>
      </div>
    );
  }
}

export default Weather;
