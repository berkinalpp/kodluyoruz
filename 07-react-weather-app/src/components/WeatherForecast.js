import React from 'react'
import { useWeather } from '../context/WeatherContext'

 function WeatherForecast() {

    const {weatherData} = useWeather()
    const {result} =weatherData;
    const cityName = weatherData.city[0].toUpperCase() + weatherData.city.substring(1);
        return (
            <div className="card-container">
      {
      result.map((result,key) =>
      (
        <div className="card" key = {key}>
               <div className="card-info">
                   <h1>{cityName}</h1>
                   <h3>{result.day}</h3>
                   <span>{result.degree}C°</span>
                   <img className="icon" src={result.icon} alt="" />
                   <h3>{result.status} / {result.description}</h3>
                   <span>Min Temp: {result.min}C°</span>
                   <span>Max Temp: {result.max}C°</span>
               </div>
           </div>
      
      ) )
      }
       
      </div>
      
    )
}

export default WeatherForecast
