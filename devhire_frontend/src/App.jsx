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
import GuestRoutes from "./components/GuestRoutes";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // read current login state when app mounts.
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);

        // listen for state changes in other tabs
        const handleStorageChange = (event) => {
            if (event.key == "token") {
                setIsLoggedIn(!!event.newValue);
            }
        };
        window.addEventListener("storage", handleStorageChange);

        // clean up
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
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
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoutes isLoggedIn={isLoggedIn}>
                                <Dashboard />
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoutes isLoggedIn={isLoggedIn}>
                                <Profile />
                            </ProtectedRoutes>
                        }
                    />

                    <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
                    <Route path="/help" element={<Help isLoggedIn={isLoggedIn} />} />

                </Route>


                {/* Authentication pages without Navbar */}

                <Route
                    path="/login"
                    element={
                        <GuestRoutes isLoggedIn={isLoggedIn}>
                            <Login setIsLoggedIn={setIsLoggedIn} />
                        </GuestRoutes>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <GuestRoutes isLoggedIn={isLoggedIn}>
                            <Register />
                        </GuestRoutes>
                    }
                />

            </Routes>

        </Router>
    );
}

export default App;