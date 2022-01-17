import React from 'react'
import { Link } from 'react-router-dom'
import bandPic from '../assets/beatles-asset.png'

const Homepage = () => {
  return (
    <div>
      <p className="intro">
        Welcome Beatles enthusiast! Ever wanted a way to look-up the lyrics for
        one of the Beatles' many, many songs? Well, look nofarther - here is the
        complete listing of all the Beatles songs and the lyrics for them!
      </p>
      <section className="buttonbox">
        <img src={bandPic} alt="beatles-pic"></img>
        <Link to="songs">
          <button className="button1" type="submit">
            Go to songs!
          </button>
        </Link>
        <Link to="/bandphoto">
          <button className="button2" type="submit">
            Go to band photo!
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Homepage
