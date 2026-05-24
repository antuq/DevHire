import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import API from "../services/api";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // handler function
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/register", {
                name,
                email,
                password
            });
            toast.success("Registration successful!");
            navigate("/login");
            console.log("data saved: ", {name, email, password});
        } catch (err) {
            console.log("error occured: ", err.message);
            toast.error(err.response.data.message)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">

            <form
                className="bg-white p-6 mb-8 rounded shadow-md w-80"
                onSubmit={handleRegister}>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-3xl mb-8">Register</h2>

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
                <button
                    className="bg-blue-500 text-white w-full p-2 rounded"
                    type="submit">
                    Register
                </button>
                <p className="text-center mt-4 ">Back to <Link to="/login" className="font-medium text-fg-brand underline hover:no-underline"> Login </Link> </p>
            </form>


        </div>
    )
}