import React from 'react'
import { Login, Dashboard } from './pages'
import './App.css'
import CustomRoutes from './routes'

function App() {
  const code = new URLSearchParams(window.location.search).get("code")
  
  return code ? <CustomRoutes code={code}/> : <Login />
}

export default App