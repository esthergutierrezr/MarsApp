import React from "react";
import "./WeatherDetails.css";

function WeatherDetails(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sol {props.mars_day}</h5>
        <h5 class="card-title">{props.First_UTC.replace("T", "")}</h5>
        <div class="line"></div>
        <p class="card-text">
          Max: {props.AT ? props.AT.mx.toFixed(0) : null}ºF
        </p>
        <p class="card-text">
          Min: {props.AT ? props.AT.mn.toFixed(0) : null}ºF
        </p>
      </div>
    </div>
  );
}
export default WeatherDetails;

// var ret = "data-123".replace("data-", "");
// console.log(ret); //prints: 123
