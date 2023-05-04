import { useState } from "react";
import gps from '../images/location-dot-solid.svg'
import mgglass from '../images/magnifying-glass-solid.svg'
import './weathersearch.css'

const WeatherSearch = ({getZoneWeather}) => {
    
    const [search, setSearch] = useState('');

    const icons = {
        gps,
        mgglass
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        getZoneWeather(search);
    }
    
    return (
        <form onSubmit={onFormSubmit} className='form-container'>
            <img className="icons" alt="gps" src={icons.gps} />
            <input value={search} onChange={(e) => setSearch(e.target.value.toUpperCase())} type={'text'} />
            <button><img className="icons" src={icons.mgglass} /></button>
        </form>
    )
}



export default WeatherSearch;