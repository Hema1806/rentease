import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function ProductDetails() {

  const { id } = useParams();



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



  // COMBINED PRODUCTS
  const allProducts = [
    ...products,
    ...adminProducts,
  ];



  // FIND PRODUCT
  const product = allProducts.find(
    (item) => item.id === Number(id)
  );



  // ADD TO WISHLIST
  const addToWishlist = () => {

    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];



    const alreadyExists = existingWishlist.find(
      (item) => item.id === product.id
    );



    if (alreadyExists) {

      toast.error("Product already in wishlist");

      return;

    }



    existingWishlist.push(product);



    localStorage.setItem(
      "wishlist",
      JSON.stringify(existingWishlist)
    );



    toast.success("Added to Wishlist!");

  };



  // ADD TO CART
  const addToCart = () => {

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



  // PRODUCT NOT FOUND
  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Product Not Found
      </div>

    );

  }



  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <Navbar />



      <div className="flex items-center justify-center p-10">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl grid md:grid-cols-2">

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />



          <div className="p-10 flex flex-col justify-center">

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit font-semibold">
              Premium Rental Product
            </span>



            <h1 className="text-5xl font-extrabold text-gray-900 mt-6">
              {product.name}
            </h1>



            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              {product.description ||
                "Premium rental product added by admin dashboard."}
            </p>



            <div className="mt-8">

              <h2 className="text-4xl font-bold text-blue-600">
                {product.price}
              </h2>



              <p className="text-gray-500 mt-2">
                Inclusive of maintenance & support
              </p>

            </div>



            <div className="mt-10 flex gap-5">

              <button
                onClick={addToCart}
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Rent Now
              </button>



              <button
                onClick={addToWishlist}
                className="border border-gray-300 hover:bg-gray-100 transition px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Add to Wishlist
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;