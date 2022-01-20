import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Songs from './components/Songs'
import Lyrics from './components/Lyrics'
import Header from './components/Header'
import BandPhoto from './components/BandPhoto'

import { render } from 'react-dom'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="songs" element={<Songs />} />
      <Route path="lyrics/:song_id" element={<Lyrics />} />
      <Route path="bandphoto" element={<BandPhoto />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
)
