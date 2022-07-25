import { useState, useEffect } from "react"
import axios from "axios"

const Weather = ( {country} ) => {
    const [weather, setWeather] = useState('')

    const hook = () => {

        
        let api_key = process.env.REACT_APP_API_KEY
        let lat = country.latlng[0]
        let lon = country.latlng[1]

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
            .then( response => {
                setWeather(response.data)
                // console.log("WWWWWWWWWWWWWWWW", response.data);
            })
    }

    // eslint-disable-next-line
    useEffect(hook, [])


    if (weather) {
        return (
            <div>
                <h2>Weather in {country.name.common}</h2>
                <>temperature {Math.round(((weather.main.temp - 273.15) * 100) / 100)}° celsius</>
                <br />
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather-icon" />
                <br />
                <>wind {weather.wind.speed} m/s</>
            </div>
        )}

    return (
        <>
        {/* {console.log(country.latlng)} */}
        {/* {console.log(api_key)} */}

        


        </>
    )

}

export default Weather