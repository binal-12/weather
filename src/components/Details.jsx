import React from 'react'

import windimg from './assets/wind.svg'
import moisture from './assets/moisture.svg'
import visi from './assets/visi.svg'


const Details = ( {wind, humidity, visibility} ) => {
  return (
      <div className="details">
          <div className="details-item">
              <img src={windimg} alt="wind" height="25px"/>
              <h2 className="details-text">{wind}km/h</h2>
          </div>
          <div className="details-item">
              <img src={moisture} alt="moisture" height="25px" />
              <h2 className="details-text">{humidity}%</h2>
          </div>
          <div className="details-item">
              <img src={visi} alt="visi" height="20px" />
              <h2 className="details-text">{visibility/1000}km</h2>
          </div>
      </div>
  )
}
export default Details