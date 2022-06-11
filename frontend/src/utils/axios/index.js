import axiosCore from 'axios'

const axios = axiosCore.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=0',
  },
})

export { axios }
