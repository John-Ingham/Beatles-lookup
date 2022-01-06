import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <p className="intro">
        Welcome Beatles enthusiast! Ever wanted a way to look-up the lyrics for
        one of the Beatles' many, many songs? Well, look nofarther - here is the
        complete listing of all the Beatles songs and the lyrics for them!
      </p>
      <button className="button" type="submit">
        Go to songs!
      </button>
      <button className="button" type="submit">
        Go to band photo!
      </button>
    </div>
  )
}

export default Homepage
