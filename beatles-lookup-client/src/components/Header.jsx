import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1 className="header">
        <Link to="/">
          <p className="headerText"> The Beatles - Lyrics</p>
        </Link>
      </h1>
    </div>
  )
}

export default Header
