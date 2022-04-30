import React from 'react'

const Head = ( {city, country, main, details} ) => {
  return (
    <div className='head'>
        <h1 className="head-city">{city}</h1>
        <h2 className="head-cc">{country}</h2>
        <h2 className="head-weather">{main}</h2>
        <h2 className="head-details">{details}</h2>
    </div>
  )
}

export default Head