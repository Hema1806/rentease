import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function Wishlist() {

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];



  const removeFromWishlist = (id) => {

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.location.reload();
  };



  const addToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = existingCart.find(
      (item) => item.id === product.id
    );

    if (alreadyExists) {

      toast.error("Product already in cart");
      return;
    }

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    toast.success("Added to Cart!");
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />

      <div className="px-8 py-12">

        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-14">
          My Wishlist
        </h1>


        {wishlist.length === 0 ? (

          <div className="text-center text-gray-600 text-xl">
            No items in wishlist
          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {wishlist.map((product) => (

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


                  <div className="flex gap-4 mt-6">

                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
                    >
                      Add to Cart
                    </button>


                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-semibold"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Wishlist;