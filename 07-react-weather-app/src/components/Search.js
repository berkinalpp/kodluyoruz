import React,{useState} from 'react'
import { useWeather } from '../context/WeatherContext'

function Search() {
    const [input,setInput] = useState('');
    const {setCity} = useWeather()

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(input);
    }

    return (
    <div className="form-container"> 
    <form  onSubmit={handleSubmit}>
         <input type="text" className="searchInput" value={input}  onChange={handleChange}/>
         <button type='submit' className="searchBtn"><i className="fas fa-search fa-lg"></i></button>
    </form>
          
        </div>
    )
}

export default Search
