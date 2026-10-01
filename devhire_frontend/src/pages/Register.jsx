import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import API from "../services/api";
import AuthGraphic from "../components/AuthGraphic";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    // handler function
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords don't match!");
            return;
        }
        try {
            const res = await API.post("/auth/register", {
                name,
                email,
                password
            });
            toast.success("Registration successful!");
            navigate("/login");
            console.log("data saved: ", { name, email, password });
        } catch (err) {
            console.log("error occured: ", err.message);
            toast.error(err.response.data.message)
        }
    }

    return (
        <div className="relative flex h-screen">
            {/* Back to home link */}
            <div className="absolute top-6 left-6 z-50">
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"> ← Back to Home</Link>
            </div>

            {/* Visual graphic element on the left side. */}
            <div className="hidden md:flex w-1/2 justify-center items-center">
                <AuthGraphic />
            </div>

            {/* Registration Form on the Right */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <form
                    className="bg-white p-8 rounded-2xl shadow-lg w-80"
                    onSubmit={handleRegister}>
                    <h2 className="text-2xl font-bold text-center mb-8">Register</h2>

                    <input
                        className="border w-full p-2 mb-3"
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        className="border w-full p-2 mb-3"
                        type="email"
                        id="email"
                        value={email}
                        placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        className="border w-full p-2 mb-3"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input
                        className="border w-full p-2 mb-3"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white w-full p-2 rounded"
                        type="submit">
                        Register
                    </button>
                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-fg-brand underline hover:no-underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    )
}