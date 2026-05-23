import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);



  // AUTH CHECK
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );



  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];



  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];



  const handleLogout = () => {

    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLoggedIn");

    toast.success("Logged Out Successfully!");

    navigate("/login");

  };



  return (

    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">

      <div className="flex items-center justify-between px-6 md:px-10 py-5">


        {/* Left Side */}
        <div className="flex items-center gap-5">


          {/* Back Button */}
          {location.pathname !== "/" && (

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-100 hover:bg-gray-200 transition p-3 rounded-full shadow"
            >

              <FaArrowLeft className="text-gray-700" />

            </button>

          )}



          {/* Logo */}
          <Link to="/">

            <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
              RentEase
            </h1>

          </Link>

        </div>



        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>



          <Link
            to="/products"
            className="hover:text-blue-600 transition"
          >
            Products
          </Link>



          <Link
            to="/wishlist"
            className="hover:text-blue-600 transition"
          >
            Wishlist ({wishlist.length})
          </Link>



          <Link
            to="/cart"
            className="hover:text-blue-600 transition"
          >
            Cart ({cart.length})
          </Link>



          {/* ADMIN LINK */}
          {user?.email === "admin@rentease.com" && (

            <Link
              to="/admin"
              className="hover:text-blue-600 transition"
            >
              Admin
            </Link>

          )}

        </div>



        {/* Desktop Auth */}
        <div className="hidden md:block">

          {user ? (

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-full font-semibold shadow-lg"
            >
              Logout
            </button>

          ) : (

            <Link to="/login">

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                Login
              </button>

            </Link>

          )}

        </div>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>



      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-gray-700 font-medium bg-white">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>



          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>



          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
          >
            Wishlist ({wishlist.length})
          </Link>



          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({cart.length})
          </Link>



          {/* MOBILE ADMIN LINK */}
          {user?.email === "admin@rentease.com" && (

            <Link
              to="/admin"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Admin
            </Link>

          )}



          {user ? (

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-3 rounded-xl font-semibold"
            >
              Logout
            </button>

          ) : (

            <Link to="/login">

              <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold w-full">
                Login
              </button>

            </Link>

          )}

        </div>

      )}

    </nav>
  );
}

export default Navbar;