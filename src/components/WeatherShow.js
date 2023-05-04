import Parcialsunny from '../images/parcialsunny.png'
import Wronglocation from '../images/wrong.png'
import Rainy from '../images/rainy.png'
import Sunny from '../images/sunny.png'
import Cloudy from '../images/cloudy.png'
import Temperature from '../images/temperature.png'
import Wind from '../images/wind.png'
import './weathershow.css'

const WeatherShow = ({location}) => {

    const imageCont = {
        Parcialsunny,
        Wronglocation,
        Sunny,
        Cloudy,
        Rainy
    }

    const imagePicker = (code) => {
        if (code <= 4) {
            return 'Sunny'
        } else if (code <= 40) {
            return 'Parcialsunny'
        }else if (code <= 80){
            return 'Cloudy'
        }else {
            return 'Rainy'
        }
    }

    return (
        <div>
            {location.weathercode !== 404 ?
            <div className='animate__animated animate__zoomIn'>
                <div className='image-container'>
                    <img src={imageCont[imagePicker(location.weathercode)]} className="display-img" />
                    {imagePicker(location.weathercode)}
                </div>
                <div className='location-data-container'>
                    <div className='location-info'><img src={Temperature} className='info-img' /> <div>{location.temperature} °C</div> </div>
                    <div className='location-info'><img src={Wind} className='info-img-wind' /><div>{location.windspeed}Km/h</div> </div>
                </div>
            </div> 
            
            
            : 
            
            
            <div className='animate__animated animate__zoomIn'>
            <img src={imageCont['Wronglocation']} className="display-img" /> Location Not Found!
            </div>
        }
        </div>
        
        
    )

}


export default WeatherShow;