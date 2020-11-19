import React from "react";
import axios from "axios";

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
            <h1 key={index}>{data.First_UTC}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
