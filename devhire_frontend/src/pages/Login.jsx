import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../services/api";

import AuthGraphic from "../components/AuthGraphic";

export default function Login({ setIsLoggedIn }) {

    // HANDLING STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // NAVIGATION VARIABLE
    const navigation = useNavigate();

    // HANDLER FUNCTION
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // login
            const res = await API.post("/auth/login", { email, password });

            // store token
            localStorage.setItem("token", res.data.token)
            console.log(res.data);
            setIsLoggedIn(true);
            toast.success("Login successful!");

            // navigate to dashboard
            navigation("/dashboard");

        } catch (err) {
            console.log("error occured: ", err.message);
            toast.error(err.response.data.message)
        }
    }

    return (
        <div className="relative flex h-screen">
             {/* back to home link */}
            <div className="absolute top-6 left-6 z-50">
                <Link
                    to="/"
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* LEFT SIDE */}
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <AuthGraphic />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-80">
                    <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border w-full p-2 mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border w-full p-2 mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white w-full p-2 rounded">
                        Login
                    </button>
                    <p className="text-center mt-4 whitespace-nowrap"> Don't have an account? <Link className="font-medium text-fg-brand underline hover:no-underline" to="/register">Register now</Link></p>
                </form>
            </div>
        </div>
    )
}
