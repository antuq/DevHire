import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function Profile() {

    const [user, setUser] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    // =======================
    // UPDATE PROFILE
    // =======================

    const handleUserProfile = async () => {

        try {

            const res = await API.put("/auth/profile", {
                name,
                email
            });

            setUser(res.data.user);

            toast.success(res.data.message);

        } catch (err) {

            toast.error(
                err.response?.data?.message || "Error updating profile."
            );

        }
    };


    // =======================
    // UPDATE PASSWORD
    // =======================

    const handleUserPassword = async () => {

        if (password !== confirmPassword) {

            toast.error("Passwords do not match");
            return;

        }

        if (!password) {

            toast.error("Password is required");
            return;

        }

        try {

            const res = await API.put("/auth/password", {
                password
            });

            toast.success(res.data.message);

            setPassword("");
            setConfirmPassword("");

        } catch (err) {

            toast.error(
                err.response?.data?.message || "Error updating password."
            );

        }
    };


    // =======================
    // GET PROFILE
    // =======================

    useEffect(() => {

        const getProfile = async () => {

            try {

                const res = await API.get("/auth/profile");

                setUser(res.data.user);
                setName(res.data.user.name);
                setEmail(res.data.user.email);

            } catch (err) {

                toast.error(
                    err.response?.data?.message ||
                    "Error fetching user profile."
                );

            }
        };

        getProfile();

    }, []);


    // =======================
    // UI
    // =======================

    return (

        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">

            {/* Background glows */}

            <div className="fixed w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl -top-40 -left-40 pointer-events-none"></div>

            <div className="fixed w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl top-1/3 -right-40 pointer-events-none"></div>

            <div className="fixed w-[450px] h-[450px] bg-pink-200/20 rounded-full blur-3xl bottom-0 left-1/3 pointer-events-none"></div>


            {/* Header */}

            <section className="relative z-10 px-6 pt-12 pb-10">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                        Account Settings
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                        Your Profile
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Manage your personal information and account password.
                    </p>

                </div>

            </section>


            {/* Profile Content */}

            <main className="relative z-10 max-w-5xl mx-auto px-6 pb-24">

                <div className="grid lg:grid-cols-2 gap-8">


                    {/* Personal Information */}

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                        <div className="mb-7">

                            <p className="text-purple-600 font-semibold text-xs uppercase tracking-widest">
                                Personal Information
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                Account details
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Update the name and email associated with your account.
                            </p>

                        </div>


                        {user && (

                            <div className="space-y-5">


                                {/* Name */}

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    />

                                </div>


                                {/* Email */}

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    />

                                </div>


                                {/* Save Changes */}

                                <button
                                    onClick={handleUserProfile}
                                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition"
                                >
                                    Save Changes
                                </button>

                            </div>

                        )}

                    </div>


                    {/* Change Password */}

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                        <div className="mb-7">

                            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
                                Security
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                Change Password
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Choose a new password for your DevHire account.
                            </p>

                        </div>


                        <div className="space-y-5">


                            {/* New Password */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                />

                            </div>


                            {/* Confirm Password */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                />

                            </div>


                            {/* Change Password */}

                            <button
                                onClick={handleUserPassword}
                                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition"
                            >
                                Change Password
                            </button>

                        </div>

                    </div>

                </div>


                {/* Bottom Information */}

                <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 text-center">

                    <p className="text-sm text-gray-500">
                        Keep your account information up to date so your DevHire profile stays accurate.
                    </p>

                </div>

            </main>

        </div>

    );

}