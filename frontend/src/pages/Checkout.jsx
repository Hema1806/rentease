import { useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function Checkout() {

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const totalAmount = cart.reduce((total, item) => {

    const price = Number(
      item.price.replace(/[^\d]/g, "")
    );

    return total + price;

  }, 0);



  const handlePayment = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {

      setError("Please fill all checkout details");

      return;
    }

    setError("");

    toast.success("Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href = "/success";
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-12 grid lg:grid-cols-2 gap-10">

        {/* Billing Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Checkout
          </h1>


          {error && (
            <p className="bg-red-100 text-red-600 p-4 rounded-xl mb-6">
              {error}
            </p>
          )}


          <div className="space-y-5">

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
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              rows="4"
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

          </div>

        </div>


        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Order Summary
          </h2>


          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div>

                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-2">
                    {item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>


          <div className="mt-10 border-t pt-6">

            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-bold text-gray-900">
                Total
              </h2>

              <p className="text-4xl font-extrabold text-blue-600">
                ₹{totalAmount}
              </p>

            </div>


            <button
              onClick={handlePayment}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;