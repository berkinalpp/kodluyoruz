import {useContext,createContext,useState,useEffect} from 'react';
import axios from 'axios';


const WeatherContext = createContext()

const WeatherProvider = ({children}) => {
    const [city,setCity] = useState('Izmir');
    const [weatherData,setWeatherData] = useState();
    

    useEffect(()=> {
    const getData = async () => {
   await axios(`${process.env.REACT_APP_API_ENDPOINT}`, {
        params:{
            'data.lang':'en',
            'data.city': `${city}`
        },
        headers: {
            'authorization': `apikey ${process.env.REACT_APP_API_KEY}`,
            'content-type': 'application/json',
        }
    })
    .then(res => {
        setWeatherData(res.data)
    })
    .catch(e => console.log(e) )
        }
        getData()
    },[city])
    
    if (weatherData === undefined) {
        return null;
      }
    

    const values = {city,setCity,weatherData,setWeatherData}
    return <WeatherContext.Provider value ={values}>{children}</WeatherContext.Provider>
}

const useWeather = () => useContext(WeatherContext);

export {WeatherProvider,useWeather}