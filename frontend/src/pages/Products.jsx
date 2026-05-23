import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function Products() {

  const [search, setSearch] = useState("");



  // ORIGINAL PRODUCTS
  const products = [

    {
      id: 1,
      name: "Luxury Sofa",
      price: "₹1499 / month",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium luxury sofa designed for modern living rooms with elegant comfort.",
    },

    {
      id: 2,
      name: "Dining Table",
      price: "₹999 / month",
      rating: "4.6",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      description:
        "Modern wooden dining table perfect for stylish family dining spaces.",
    },

    {
      id: 3,
      name: "Washing Machine",
      price: "₹1299 / month",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Smart washing machine with energy-efficient cleaning technology.",
    },

    {
      id: 4,
      name: "Smart TV",
      price: "₹1799 / month",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
      description:
        "Ultra HD smart television with immersive cinematic experience.",
    },

    {
      id: 5,
      name: "Office Chair",
      price: "₹799 / month",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",
      description:
        "Ergonomic office chair designed for comfort during long work hours.",
    },

    {
      id: 6,
      name: "Refrigerator",
      price: "₹1599 / month",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop",
      description:
        "Large capacity refrigerator with modern cooling technology.",
    },

    {
      id: 7,
      name: "Queen Size Bed",
      price: "₹1899 / month",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description:
        "Comfortable queen-size bed with premium wooden finish.",
    },

    {
      id: 8,
      name: "Study Desk",
      price: "₹699 / month",
      rating: "4.4",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Minimal modern study desk perfect for students and professionals.",
    },

  ];



  // ADMIN PRODUCTS
const adminProducts =
  JSON.parse(localStorage.getItem("adminProducts")) || [];



// FORMAT ADMIN PRODUCTS
const formattedAdminProducts = adminProducts.map((product, index) => ({
  id: product.id || 100 + index,

  name: product.name,

  price:
    typeof product.price === "string"
      ? product.price
      : `₹${product.price} / month`,

  rating: product.rating || "4.5",

  image: product.image,

  description:
    product.description ||
    "Premium rental product added by admin.",
}));



// COMBINE BOTH
const allProducts = [
  ...products,
  ...formattedAdminProducts,
];



  // ADD TO CART
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



  // SEARCH FILTER
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );



  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />



      <div className="px-8 py-12">


        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-6xl font-extrabold text-gray-900">
            Explore Products
          </h1>

          <p className="text-gray-600 text-lg mt-5">
            Rent premium furniture and appliances at affordable monthly plans.
          </p>

        </div>



        {/* Search */}
        <div className="flex justify-center mb-14">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl p-4 rounded-2xl shadow-lg border border-gray-200 outline-none text-lg"
          />

        </div>



        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />



                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h2>



                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ {product.rating || "4.5"}
                    </span>

                  </div>



                  <p className="text-blue-600 text-xl font-semibold mt-4">
                    {product.price}
                  </p>



                  <div className="mt-6 flex gap-4">

                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
                    >
                      Rent Now
                    </button>



                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1"
                    >

                      <button className="w-full border border-gray-300 hover:bg-gray-100 transition py-3 rounded-xl font-semibold">
                        Details
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="col-span-full text-center text-2xl text-gray-500 font-semibold">
              No products found
            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Products;