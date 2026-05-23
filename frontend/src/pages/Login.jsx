import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    setError("");

    try {

      const response = await fetch(
        "https://rentease-q72g.onrender.com/api/auth/login",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),

        }
      );



      const data = await response.json();



      if (!response.ok) {

        setError(data.message);

        return;

      }



      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );



      toast.success("Login Successful!");



      navigate("/");

    } catch (error) {

      console.log(error);

      setError("Server Error");

    }
  };




  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">


        {/* Left Side */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-relaxed">

            Login to continue exploring premium furniture
            and appliance rentals with RentEase.

          </p>

          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
            alt="Login"
            className="rounded-2xl mt-10 shadow-xl"
          />

        </div>



        {/* Right Side */}
        <div className="p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Login
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
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />



            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />



            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Login
            </button>

          </form>



          <p className="text-gray-600 mt-6 text-center">

            Don’t have an account?{" "}

            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;