import './App.css'

import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import Login from './pages/Login'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'

import Navbar from './components/Navbar'
import Help from './pages/Help'
import ProtectedRoutes from './components/ProtectedRoutes'
import Register from './pages/Register'

function App() {

  // to handle token
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  },[])

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        {/* protecting singed-in user routes. */}
        <Route path="/dashboard" element={ <ProtectedRoutes> <Dashboard/> </ProtectedRoutes>}> Dashboard</Route>
        <Route path="/profile" element={ <ProtectedRoutes> <Profile/></ProtectedRoutes>}> Profile</Route>

        <Route path="/about" element={<About/>}> About</Route>
        <Route path='/help' element={<Help/>}>Help</Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}> Login</Route>
        <Route path="/register" element={<Register/>}>Register</Route>

      </Routes>
    </Router>
  )
}

export default App;