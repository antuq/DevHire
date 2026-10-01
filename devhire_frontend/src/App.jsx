import "./App.css";

import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";

import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        <Router>

            <Routes>

                {/* Pages with Navbar */}
                <Route
                    element={
                        <Layout
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                >
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoutes>
                                <Dashboard />
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoutes>
                                <Profile />
                            </ProtectedRoutes>
                        }
                    />

                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<Help />} />

                </Route>


                {/* Authentication pages without Navbar */}
                <Route
                    path="/login"
                    element={
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    }
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

            </Routes>

        </Router>
    );
}

export default App;