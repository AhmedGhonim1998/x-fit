import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './majourCompanents/NavBar'
import Home from './views/Home'
import Footer from './majourCompanents/Footer'
import GetCoach from './views/GetCoach'
import AboutUs from './views/AboutUs'
import Login from './views/Login'
import SignUP from './views/SignUP'
import ContactUS from './views/ContactUS'
import Goodhealth from './views/Goodhealth'
import Natural from './views/Natural'
import Carbs from './views/Carbs'
import Nutration from './views/Nutration'
import TermsConditons from './views/TermsConditons'
import AbdulahIbrahim from './majourProfile/AbdulahIbrahim'
import HossamMonir from './majourProfile/HossamMonir'
import SamDwida from "./majourProfile/SamDwida";
import DamWayne from "./majourProfile/DamWayne";
import Albert from "./majourProfile/Albert";
import William from "./majourProfile/William";

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/getcoach' Component={GetCoach}/>
      <Route path='/aboutus' Component={AboutUs}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={SignUP}/>
      <Route path='/contactus' Component={ContactUS}/>
      <Route path='/goodhealth' Component={Goodhealth}/>
      <Route path='/natural' Component={Natural}/>
      <Route path='/carbs' Component={Carbs}/>
      <Route path='/nutration' Component={Nutration}/>
      <Route path='/terms-conditions' Component={TermsConditons}/>
      <Route path='/getcoach/abdulrahman-ibrahim' Component={AbdulahIbrahim}/>
      <Route path='/getcoach/hossam-monir' Component={HossamMonir}/>
      <Route path='/getcoach/samuel-dawda' Component={SamDwida}/>
      <Route path='/getcoach/damyan-wayne' Component={DamWayne}/>
      <Route path='/getcoach/albert-grayson' Component={Albert}/>
      <Route path='/getcoach/william-games' Component={William}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
