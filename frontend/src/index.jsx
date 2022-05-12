import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/style/index.css'
import Connexion from './pages/Connexion'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Users from './pages/Users'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
