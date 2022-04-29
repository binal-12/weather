import React, { useState } from 'react'

import Head from './components/Head'
import Logo from './components/Logo'
import Temps from './components/Temps'
import Details from './components/Details'
import './App.css'

const App = () => {

    let [weatherData, setWeatherData] = useState();

    const data = (cityID) => { 
        const key = "09cdd06955959bd440a8fc27bd1f8cb7"
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
            .then(resp => resp.json())
            .then(data => setWeatherData(data))
    }

    window.onload = function() {
        data(6167865)
    }
    

  return (
      <div className='app'>
          <Head city={weatherData.name} 
            country={weatherData.sys.country} 
            details={weatherData.weather[0].main}
          />
          <Logo />
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