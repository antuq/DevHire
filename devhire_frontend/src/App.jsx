import './App.css'

import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Layout from './components/Layout'
import Login from './pages/Login'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'

import Help from './pages/Help'
import ProtectedRoutes from './components/ProtectedRoutes'
import Register from './pages/Register'

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  },[])

  return (
    <Router>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Layout>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/dashboard" element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}></Route>
          <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
        </Route>

        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;