import React from 'react'

const Head = ( {city, country, details} ) => {
  return (
    <div className='head'>
        <h1 className="head-city">{city}</h1>
        <h2 className="head-cc">{country}</h2>
        <h2 className="head-weather">{details}</h2>
    </div>
  )
}

export default Head