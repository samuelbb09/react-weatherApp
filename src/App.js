import WeatherSearch from "./components/WeatherSearch";
import { getCoordinates } from "./api";
import { useState } from "react";
import './app.css'
import 'animate.css';
import WeatherShow from "./components/WeatherShow";

function App() {

  const [exist, setExist] = useState({});
  
  const getZoneWeather = async (zone) => {
    const resp = await getCoordinates(zone);
    if (resp.data !== undefined) {
      setExist(resp.data.current_weather)
      console.log(exist);
    }else{
      setExist({weathercode: 404}) 
    }
    

  }

  return (
    <div className="center-screen">
      <div className="card-body">
        <WeatherSearch getZoneWeather={getZoneWeather}/>
        {exist.weathercode !== undefined && <WeatherShow location={exist} />}
        
        
      </div>
      
    </div>
  );
}

export default App;
