import React, { useContext, useEffect } from 'react'
import { Login, Dashboard } from './pages'
import './App.css'
import { Context } from './context/CodeContext'

function App() {
  const {setCode} = useContext(Context)
  const code = new URLSearchParams(window.location.search).get("code")
  useEffect(() => {
    setCode(code)
  },[code])
  
  return code ? <Dashboard code={code}/> : <Login />
}

export default App