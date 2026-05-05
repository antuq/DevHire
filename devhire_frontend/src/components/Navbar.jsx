import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const token = localStorage.getItem("token"); // later we improve this

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }


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
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/help" className="hover:text-blue-500">Help</Link>

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <div>
            👤
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>

        )}
      </div>

    </nav>
  );
}

export default Navbar;