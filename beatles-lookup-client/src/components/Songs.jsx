import React from 'react'
import sheetmusic2 from '../assets/sheetMusic2-asset.png'
import { useEffect, useState } from 'react'
import { getData } from '../utils/api'
import { Link } from 'react-router-dom'

const Songs = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    getData().then((dataFromApi) => {
      setData(dataFromApi)
      setLoading(false)
    })
  }, [])
  return (
    <div classname="songsbox">
      <img className="sheetMusicPic" src={sheetmusic2} alt="sheet music" />
      {loading ? (
        <img
          className="loading"
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="Now Loading"
        />
      ) : (
        <section>
          <h2 className="header2s"> Songs List</h2>
          <ul classname="lists">
            {data.map((song) => {
              return (
                <li className="listItems" key={data.song}>
                  <img
                    className="musicThumbnail"
                    src="https://cancerfocusni.org/wp-content/uploads/2019/10/Music-Notes-300-x-200-Event-page-thumbnail.png"
                    alt="musical notes thumbnail"
                    width="100"
                    height="100"
                  />
                  <h3>SONG NAME: {song.song}</h3>
                  <p>Written by: {song.writer}</p>
                  <Link to={'lyrics'}>
                    <button className="button">
                      View Lyrics for {song.song}
                    </button>
                  </Link>

                  <span>{song.lyrics}</span>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default Songs
