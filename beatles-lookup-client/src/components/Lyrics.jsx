import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/api'

const Lyrics = () => {
  const { song_id } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [song, setSong] = useState({})

  useEffect(() => {
    setLoading(true)
    getData().then((dataFromApi) => {
      setData(dataFromApi)
      setLoading(false)
    })
  }, [])

  const songToDisplay = data.filter(
    (item) => item.song_id === parseInt(song_id),
  )
  return (
    <div className="lyricsContainer">
      <h1>LYRICS FOR SONG</h1>
      {loading ? (
        <img
          className="loading"
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="Now Loading"
        />
      ) : (
        <section className="singleSong">
          <h2>Song ID: {song_id}</h2>
          <h2> Song Title: {songToDisplay[0].song}</h2>
          <h4>Song lyrics: </h4>
          <p>{songToDisplay[0].lyrics}</p>
          <p className="lyrics"></p>
        </section>
      )}
    </div>
  )
}

export default Lyrics
