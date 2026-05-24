import { Link } from "react-router-dom";
import { useState } from "react";

import { User, LogOut } from "lucide-react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const [showMenu, setShowMenu] = useState(false);

  const token = localStorage.getItem("token"); // later we improve this

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  // to make sure the drop down closes when other links on the navbar are clicked.
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-blue-600 font-bold text-lg hidden sm:block">
          DevHire
        </span>
        <span className="text-blue-600 font-bold text-lg sm:hidden">
          DH
        </span>
      </Link>

      {/* Links */}

      <div className="flex gap-6 items-center">
        <Link onClick={closeMenu} to="/" className="hover:text-blue-500">Home</Link>

        {isLoggedIn && (
          <Link onClick={closeMenu} to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        )}

        <Link onClick={closeMenu} to="/help" className="hover:text-blue-500">Help</Link>

        {!isLoggedIn ?
          (
            <Link to="/login">Login/Register</Link>
          ) :
          (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold"
              > 👤 </button>

              {/* dropdown */}
                <div
                  className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 transition-all duration-200 origin-top-right
                    ${showMenu
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >

                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="flex justify-between items-center px-3 py-2 hover:bg-gray-100 rounded transition-colors duration-150"
                  >
                    <span>Profile</span>
                    <User size={18} />
                  </Link>

                  <hr className="my-1 border-gray-200" />

                  <button
                    onClick={() => { handleLogout(); closeMenu() }}
                    className="w-full flex justify-between items-center px-3 py-2 mt-1 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-150"
                  >
                    <span>Logout</span>
                    <LogOut size={18} />
                  </button>
                </div>
            </div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;