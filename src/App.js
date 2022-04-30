import React, { useState } from 'react'

import Head from './components/Head'
import Logo from './components/Logo'
import Temps from './components/Temps'
import Details from './components/Details'
import './App.css'

const App = () => {

    const Dummy = {
      name: "City Name",
      sys : {
        country: "CC"
      },
      weather : [ {
        main: "main",
        description: "description",
        icon: "01d"
      }],
      main : {
        temp : "0",
        temp_max : "0",
        temp_min : "0",
        humidity : "0"
      },
      wind : { speed : "0"},
      visibility : "0"
    }

    let [weatherData, setWeatherData] = useState(Dummy);

    const data = (cityID) => { 
        const key = "09cdd06955959bd440a8fc27bd1f8cb7"
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)
            .then(resp => resp.json())
            .then(data => setWeatherData(data))
    }

    window.onload = function() {
      data("Surat")
    }

  return (
      <div className='app'>
          <Head city={weatherData.name} 
            country={weatherData.sys.country} 
            details={weatherData.weather[0].description}
            main={weatherData.weather[0].main}
          />
          <Logo icon={weatherData.weather[0].icon}/>
          <Temps 
            data={weatherData.main}
          />
          <Details 
            wind={weatherData.wind.speed}
            humidity={weatherData.main.humidity}
            visibility={weatherData.visibility}
          />
      </div>
  )
}

export default App