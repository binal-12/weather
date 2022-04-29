import React from 'react'

const Temps = ( {data} ) => {

    const toCel = (temp) => Math.round(temp - 273)

  return (
      <div className="temps">
          <h1 className="temp-crr">{toCel(data.temp)}°</h1>
          <div className="temps-container">
              <h2 className="temp-hl">{toCel(data.temp_max)}°</h2>
              <h2 className="temp-hl low">{toCel(data.temp_min)}°</h2>
          </div>
      </div>
  )
}

export default Temps