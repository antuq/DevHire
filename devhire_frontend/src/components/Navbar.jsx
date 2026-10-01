import { Link } from "react-router-dom";
import { useState } from "react";

import { User, LogOut } from "lucide-react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    // Close dropdown when another navbar link is clicked.
    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 group"
                >
                    <span className="text-2xl font-bold tracking-tight text-blue-600 group-hover:text-blue-700 transition">
                        DevHire
                    </span>
                </Link>


                {/* Navigation */}
                <div className="flex items-center gap-2 sm:gap-6">

                    {/* Home */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                        Home
                    </Link>


                    {/* Dashboard */}
                    {isLoggedIn && (
                        <Link
                            to="/dashboard"
                            onClick={closeMenu}
                            className="px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                        >
                            Dashboard
                        </Link>
                    )}


                    {/* About */}
                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className="px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                        About
                    </Link>


                    {/* Help */}
                    <Link
                        to="/help"
                        onClick={closeMenu}
                        className="px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                        Help
                    </Link>


                    {/* Logged Out */}
                    {!isLoggedIn ? (

                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="ml-1 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition"
                        >
                            Login / Register
                        </Link>

                    ) : (

                        /* Logged In User Menu */
                        <div className="relative ml-1">

                            <button
                                onClick={() => setShowMenu((prev) => !prev)}
                                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm hover:bg-blue-700 hover:shadow-md hover:scale-105 transition"
                            >
                                <User size={19} />
                            </button>


                            {/* Dropdown */}
                            <div
                                className={`absolute right-0 mt-3 w-44 bg-white border border-gray-100 shadow-xl rounded-xl p-2 transition-all duration-200 origin-top-right ${
                                    showMenu
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-95 pointer-events-none"
                                }`}
                            >

                                {/* Profile */}
                                <Link
                                    to="/profile"
                                    onClick={closeMenu}
                                    className="flex justify-between items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    <span>Profile</span>
                                    <User size={17} />
                                </Link>


                                <div className="my-1 border-t border-gray-100"></div>


                                {/* Logout */}
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        closeMenu();
                                    }}
                                    className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-red-500 rounded-lg hover:bg-red-50 transition"
                                >
                                    <span>Logout</span>
                                    <LogOut size={17} />
                                </button>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;