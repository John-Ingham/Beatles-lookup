import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h4 className="navigation">
        NAVIGATE
        <Link to="/">
          <p className="links"> Home </p>{' '}
        </Link>
        <Link to="songs">
          {' '}
          <p className="links"> All Songs </p>{' '}
        </Link>
      </h4>
    </div>
  )
}

export default Navbar
