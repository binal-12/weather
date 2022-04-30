import React from 'react'

import a from './assets/01d.svg'
import b from './assets/01n.svg'
import c from './assets/02d.svg'
import d from './assets/02n.svg'
import e from './assets/03d.svg'
import f from './assets/04d.svg'
import g from './assets/09d.svg'
import h from './assets/10d.svg'
import i from './assets/10n.svg'
import j from './assets/11d.svg'
import k from './assets/13d.svg'
import l from './assets/50d.svg'


const Logo = ({icon} ) => {

  let logo

  switch(icon){
    case "01d":
      logo = a
      break
    case "01n":
      logo = b
      break
    case "02d":
      logo = c
      break
    case "02n":
      logo = d
      break
    case ("03d" || "03n"):
      logo = e
      break
    case ("04d" || "04n"):
      logo = f
      break
    case ("09d" || "09n"):
      logo = g
      break
    case "10d":
      logo = h
      break
    case "10n":
      logo = i
      break
    case ("11d" || "11n"):
      logo = j
      break
    case ("13d" || "13n"):
      logo = k
      break
    case ("50d" || "50n"):
      logo = l
      break
    default:
      logo = a
  }

  return (
    <div className="logo">
        <img src={logo} alt="" />
    </div>
  )
}

export default Logo