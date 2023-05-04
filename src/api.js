import axios from "axios";

export const getCoordinates = async (loc) => {
    const location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=2fe0f0339d066da3fe082171fa542475
    `)

    if(location.data.length >= 1) {
    console.log(location);
    const info = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.data[0].lat}&longitude=${location.data[0].lon}&current_weather=true`)
        return info;
    }else {
        return {};

    }
    
}

