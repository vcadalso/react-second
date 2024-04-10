
import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
   console.log(response.data);
    }


    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let longitude = props.coordinates.lon; 
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;


    axios.get(apiUrl).then(handleResponse);
    
    return ( 
    <div className="WeatherForecast">
    <div className="row">
         <div className="col">
            <div className="WeatherForecast-day">Thu</div> 
            <WeatherIcon code="01d" size={36}/>
            <div className="WeatherForecast-temp"> 
            <span className="WeatherForecast-temp-max">19°</span> 
            <span className="WeatherForecast-temp-min">10°</span>
            </div> 
        </div>
    </div>
 </div>
    );
}


