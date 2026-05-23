import { useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function AdminDashboard() {

  const [products, setProducts] = useState(

    JSON.parse(localStorage.getItem("adminProducts")) || []

  );



  const [formData, setFormData] = useState({

    name: "",
    price: "",
    image: "",

  });




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  const addProduct = () => {

    if (
      !formData.name ||
      !formData.price ||
      !formData.image
    ) {

      toast.error("Please fill all fields");

      return;
    }



    const newProduct = {

      id: Date.now(),

      ...formData,

    };



    const updatedProducts = [

      ...products,

      newProduct,

    ];



    setProducts(updatedProducts);



    localStorage.setItem(

      "adminProducts",

      JSON.stringify(updatedProducts)

    );



    toast.success("Product Added!");



    setFormData({

      name: "",
      price: "",
      image: "",

    });

  };




  const deleteProduct = (id) => {

    const updatedProducts = products.filter(

      (product) => product.id !== id

    );



    setProducts(updatedProducts);



    localStorage.setItem(

      "adminProducts",

      JSON.stringify(updatedProducts)

    );



    toast.success("Product Deleted");

  };




  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />



      <div className="p-8">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
          Admin Dashboard
        </h1>



        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-xl font-semibold text-gray-600">
              Total Products
            </h2>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              {products.length}
            </p>

          </div>

        </div>



        {/* Add Product Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Add Product
          </h2>



          <div className="grid md:grid-cols-3 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-4 rounded-xl"
            />



            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-4 rounded-xl"
            />



            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="border p-4 rounded-xl"
            />

          </div>



          <button
            onClick={addProduct}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Add Product
          </button>

        </div>



        {/* Product List */}
        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />



              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="text-blue-600 text-xl font-semibold mt-3">
                  {product.price}
                </p>



                <button
                  onClick={() => deleteProduct(product.id)}
                  className="mt-5 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Delete Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;