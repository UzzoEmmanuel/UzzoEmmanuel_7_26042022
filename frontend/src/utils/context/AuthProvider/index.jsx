import { useState, useEffect } from 'react'
import AuthContext from '../AuthContext'

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const getToken = localStorage.getItem('token')

  async function isAuth() {
    if (getToken === null || '') {
      return setIsAuthenticated(false)
    }
    return setIsAuthenticated(true)
  }

  useEffect(() => {
    isAuth()
  })

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
