import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './majourCompanents/NavBar'
import Home from './views/Home'
function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>

    </>
  )
}

export default App
