import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-jobsmanager.herokuapp.com/api'
})
