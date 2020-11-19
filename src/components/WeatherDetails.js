import React from "react";

function WeatherDetails(props) {
  return (
    <div>
      <h1>{props.First_UTC}</h1>
      <h3>{props.Season}</h3>
    </div>
  );
}
export default WeatherDetails;
