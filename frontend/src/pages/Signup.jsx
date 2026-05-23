import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "https://rentease-q72g.onrender.com/api/auth/signup",

        formData
      );

      toast.success("Account Created Successfully!");

      console.log(response.data);

      navigate("/login");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">

        {/* Left Side */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold leading-tight">
            Join RentEase
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Create your account and start renting premium
            furniture & appliances easily.
          </p>

          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
            alt="Signup"
            className="rounded-2xl mt-10 shadow-xl"
          />

        </div>


        {/* Right Side */}
        <div className="p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Create Account
          </h2>


          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
              {error}
            </p>
          )}


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Sign Up
            </button>

          </form>


          <p className="text-gray-600 mt-6 text-center">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;