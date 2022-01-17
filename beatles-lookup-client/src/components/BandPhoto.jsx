import React from 'react'
import bandPhoto from '../assets/bandPhoto-asset.jpg'

const BandPhoto = () => {
  return (
    <div classname="outerFrame">
      <div>
        <img src={bandPhoto} alt="Beatles photo collage" />
      </div>
    </div>
  )
}

export default BandPhoto
