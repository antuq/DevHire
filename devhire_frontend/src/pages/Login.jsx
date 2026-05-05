import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login( { setIsLoggedIn } ) {

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
            const res =await API.post("/auth/login", { email, password });

            // store token
            localStorage.setItem("token", res.data.token)
            console.log(res.data);
            setIsLoggedIn(true);
            // navigate to dashboard
            navigation("/dashboard");

        } catch (err) {
            console.log("error occured: ", err.message);
        }
    }

    return (

        <div className="flex justify-center items-center h-screen">
            
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">

                <h2 className="text-xl font-bold mx-24 mb-8">Login</h2>

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

            </form>
        </div>

    )
}
