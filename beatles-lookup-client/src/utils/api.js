// All api requests
import { useEffect } from 'react'
import axios from 'axios'

export const getData = async () => {
  console.log('>>>In function')
  fetch('https://beatles-api.herokuapp.com/api')
    // await axios
    //   .get(
    //     'https://beatles-api.herokuapp.com/api'),
    //, {
    //   mode: 'cors',
    //   headers: { 'Access-Control-Allow-Origin': '*' },
    // }

    //   try {
    //     const response = await fetch('https://beatles-api.herokuapp.com/', {
    //       mode: 'cors',
    //       headers: { 'Access-Control-Allow-Origin': '*' },
    //     })
    // const data = await response.json()

    .then((response) => {
      console.log(response.data)
    })
}
