import React from 'react'
import { useWeather } from '../context/WeatherContext'

 function WeatherForecast() {

    const {weatherData} = useWeather()
    const {result} = weatherData
   

    return (

    weatherData.success ?
    (       
            <div className="card-container">
      {
      result.map((result,key) =>
      (
        
        <div className="card" key = {key}>
               <div className="card-info">
                   <h1>{weatherData.city[0].toUpperCase() + weatherData.city.substring(1)}</h1>
                   <h3>{key === 0 ? 'Today ' : result.day}</h3>
                   <h3>{Math.round(result.degree)}°</h3>
                   <img className="icon" src={result.icon} alt="" />
                   <h3>{result.status} / {result.description}</h3>
                   <span>Min Temp: {Math.round(result.min)}°</span>
                   <span>Max Temp: {Math.round(result.max)}°</span>
               </div>
           </div>
      
      ))
      }
       
      </div> ) : (<div style={{color:'red',marginRight:'3rem', marginTop:'1rem'}}>Incorrect City Name ! </div>)
      
    )
}

export default WeatherForecast
