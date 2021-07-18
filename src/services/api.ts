import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/alnmaurofranco/podcastr' // 'https://api-jobsmanager.herokuapp.com/api'
})
