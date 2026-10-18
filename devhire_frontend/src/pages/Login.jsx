import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {Eye, EyeOff} from "lucide-react";

import toast from "react-hot-toast";

import API from "../services/api";

import AuthGraphic from "../components/AuthGraphic";

export default function Login({ setIsLoggedIn }) {

    // Handling states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle delayed sign in.
    const [isLoading, setIsLoading] = useState(false);

    // Handle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Navigation
    const navigation = useNavigate();

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();

        if(isLoading) return;

        setIsLoading(true);

        let delayToastTimer;

        try {
            delayToastTimer = setTimeout(()=>{
                toast(
                    "The server may take a few minutes to wake up. Thanks for your patience.",
                    {id: "login-delay"}
                );
            }, 1200);

            const res = await API.post("/auth/login", {
                email,
                password
            });

            // Store token
            localStorage.setItem("token", res.data.token);

            setIsLoggedIn(true);
            toast.dismiss("login-delay");
            toast.success("Login successful!");

            // Navigate to dashboard
            navigation("/dashboard");

        } catch (err) {
            toast.dismiss("login-delay");
            toast.error(
                err.response?.data?.message || "Unable to login."
            );
        } finally {
            clearTimeout(delayToastTimer);
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex h-screen">

            {/* Back to home link */}
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

                <form
                    onSubmit={handleLogin}
                    className="bg-white p-8 rounded-2xl shadow-lg w-80"
                >

                    <h2 className="text-2xl font-bold text-center mb-8">
                        Login
                    </h2>

                    <input
                        type="email"
                        placeholder="Email"
                        className="border w-full p-2 mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative mb-3">
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="border w-full p-2 mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button"
                        onClick={()=>setShowPassword((pwd)=>!pwd)}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600 transition -translate-y-0.5"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        > 
                            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                        </button>
                    </div>
                    

                    <button className="bg-blue-500 text-white w-full p-2 rounded"
                            type="submit"
                            disabled={isLoading}
                    >
                        {/* to handle sign in delay */}
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"/>
                                Signing in..
                            </span>
                        ) : ("Login")}
                    </button>

                    <p className="text-center mt-4 whitespace-nowrap">
                        Don't have an account?{" "}
                        <Link
                            className="font-medium text-fg-brand underline hover:no-underline"
                            to="/register"
                        >
                            Register now
                        </Link>
                    </p>

                </form>

            </div>

        </div>
    );
}