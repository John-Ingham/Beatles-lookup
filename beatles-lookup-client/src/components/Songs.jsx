import React from 'react'
import sheetmusic2 from '../assets/sheetMusic2-asset.png'
import { useEffect } from 'react'
import { getData } from '../utils/api'

const Songs = () => {
  useEffect(() => {
    getData()
  }, [])
  return (
    <div classname="songsbox">
      <img className="sheetMusicPic" src={sheetmusic2} alt="sheet music" />
      <section>SONGS</section>
    </div>
  )
}

export default Songs
