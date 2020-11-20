import React from "react";
import axios from "axios";
import Footer from "./Footer"
import WeatherDetails from "./WeatherDetails";

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
        // console.log(result);
        this.setState({ weatherData: result });
        // console.log(response)
      });
  };

  render() {
    return (
      <div>
        <p>hello</p>

        <div>
          {this.state.weatherData.map((data, index) => (
            <WeatherDetails {...data} key={index} />
          ))}

        </div>
        <Footer />
      </div>
    );
  }
}

export default Weather;
