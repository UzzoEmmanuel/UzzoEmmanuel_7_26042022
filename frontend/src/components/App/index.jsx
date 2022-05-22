import React from 'react'
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Connexion from '../../pages/Connexion'
import Dashboard from '../../pages//Dashboard'
import User from '../../pages//User'
import Users from '../../pages//Users'
import Error from '../../pages//Error'
import AuthContext from '../../utils/context/AuthContext'

export default function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return !isAuthenticated ? (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  )
}
