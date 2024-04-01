import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather (props) {

    const [weatherData,setWeatherData] = useState ({ready: false });
    function handleResponse (response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        date: "Wednesday 07:00",
        humidity: response.data.main.humidity,
        city: response.data.name,
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" ,
    })
    
}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search"  placeholder= "Enter a city..." className="form-control" autoFocus="on"/> </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/> </div> </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                {weatherData.date}
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src= {weatherData.iconUrl} alt={weatherData.description} className="float-left mb-4 "/> 
                    
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
               
                </div>
                </div>
                <div className="col-6">
                <ul>
                
                    <li>
                        Humidity: {weatherData.humidity}%
                    </li>
                    <li>
                        Wind: {Math.round(weatherData.wind)} mph
                    </li>
                </ul>
                </div>
             </div>
        </div>
    )
} else {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}