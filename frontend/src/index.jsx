import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/style/index.css'
import App from '../src/components/App'
import { AuthProvider } from '../src/utils/context/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
