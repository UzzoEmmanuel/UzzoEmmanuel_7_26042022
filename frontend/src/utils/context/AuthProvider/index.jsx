import { useState, useEffect } from 'react'
import { AuthContext } from '../AuthContext'

const ROOT_URL = 'http://localhost:8000/api'
const getToken = localStorage.getItem('token')
const token = getToken

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    isAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const connect = (token, user) => {
    if (token) localStorage.setItem('token', token)
    setIsAuthenticated(true)
    setUser(user)
  }

  //signUp
  //--------------------------------------------------------------------------------------------------------------------------------------------
  const signupUser = async (data) => {
    return fetch(`${ROOT_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => connect(data.token, data.user))
  }

  //login
  //--------------------------------------------------------------------------------------------------------------------------------------------
  const loginUser = async (data) => {
    return fetch(`${ROOT_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => connect(data.token, data.user))
  }

  //getMe
  //--------------------------------------------------------------------------------------------------------------------------------------------
  const getMe = async () => {
    return fetch(`${ROOT_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!!data) connect(null, data)
        else logout()

        setLoading(false)
      })
  }

  //logout
  //--------------------------------------------------------------------------------------------------------------------------------------------
  const logout = () => {
    localStorage.clear()
    setIsAuthenticated(false)
  }

  //authentification
  //--------------------------------------------------------------------------------------------------------------------------------------------
  const isAuth = async () => {
    if (getToken === null || getToken === '' || getToken === 'undefined') {
      setIsAuthenticated(false)
      return
    }
    getMe()
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        loginUser,
        signupUser,
        logout,
      }}
    >
      {loading ? 'Loading ...' : children}
    </AuthContext.Provider>
  )
}
