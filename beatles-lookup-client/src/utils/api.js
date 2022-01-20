// All api requests
import { useEffect } from 'react'
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://beatles-music-api.herokuapp.com/',
})

export const getData = async () => {
  const { data } = await api.get('/')

  return data.data
}
