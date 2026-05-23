import Navbar from "../components/Navbar";

function Cart() {

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];


  const removeFromCart = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.location.reload();
  };



  const totalAmount = cart.reduce((total, item) => {

    const price = Number(
      item.price.replace(/[^\d]/g, "")
    );

    return total + price;

  }, 0);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />

      <div className="px-8 py-12">

        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-14">
          My Cart
        </h1>


        {cart.length === 0 ? (

          <div className="text-center text-gray-600 text-xl">
            Your cart is empty
          </div>

        ) : (

          <>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {cart.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="text-blue-600 text-xl font-semibold mt-4">
                      {product.price}
                    </p>


                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-6 w-full bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-semibold"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Total Section */}
            <div className="mt-16 bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto text-center">

              <h2 className="text-3xl font-bold text-gray-900">
                Total Monthly Rent
              </h2>

              <p className="text-5xl font-extrabold text-blue-600 mt-6">
                ₹{totalAmount}
              </p>

              <button
               onClick={() => window.location.href = "/checkout"}
               className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Proceed to Checkout
            </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Cart;