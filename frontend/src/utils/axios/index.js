import axiosCore from 'axios'

const ROOT_URL = process.env.REACT_APP_ROOT_URL
const getToken = localStorage.getItem('token')
const token = getToken

const axios = axiosCore.create({
  baseURL: ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export { axios }
