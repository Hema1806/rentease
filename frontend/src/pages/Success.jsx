import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Success() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />

      <div className="flex items-center justify-center px-6 py-20">

        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">

          {/* Success Icon */}
          <div className="flex justify-center">

            <FaCheckCircle className="text-green-500 text-8xl animate-bounce" />

          </div>


          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-gray-900 mt-8">
            Order Confirmed!
          </h1>


          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Your rental order has been placed successfully.
            Our team will contact you shortly regarding
            delivery and verification details.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">

            <Link to="/products">

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                Continue Shopping
              </button>

            </Link>


            <Link to="/cart">

              <button className="bg-white hover:bg-gray-100 transition border border-gray-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-md">
                View Cart
              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Success;