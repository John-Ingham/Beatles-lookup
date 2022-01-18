// All api requests
import { useEffect } from 'react'
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://beatles-music-api.herokuapp.com/',
})

export const getData = async () => {
  console.log('>>>In function')
  const { data } = await api.get('/')
  console.log(data.data[0])
  console.log(data.data[0].song)
  return data.data
}

// fetch('https://beatles-api.herokuapp.com/', {
//   method: 'GET',
//   headers: { 'Access-Control-Allow-Origin': '*' },
//   mode: 'cors',
// }).then((response) => {
//   console.log(response.data)
// })}
