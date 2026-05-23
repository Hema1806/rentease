function Hero() {
  return (
    <section className="px-8 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>

        <p className="text-blue-700 font-semibold mb-4 uppercase tracking-widest">
          Smart Rental Solutions
        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Rent Premium
          <span className="text-blue-600"> Furniture </span>
          & Appliances
          With Ease
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
          Upgrade your lifestyle without heavy investments.
          Discover affordable rentals for furniture, electronics,
          appliances, and home essentials with flexible rental plans.
        </p>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10">

          <a href="/products">

            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105">
              Explore Products
            </button>

          </a>


          <a href="/cart">

            <button className="bg-white hover:bg-gray-100 transition duration-300 text-black px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg border border-gray-200 hover:scale-105">
              View Plans
            </button>

          </a>

        </div>

      </div>


      {/* Right Image */}
      <div className="relative flex justify-center">

        <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30"></div>

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt="Furniture"
          className="relative z-10 rounded-3xl shadow-2xl w-full max-w-xl object-cover hover:scale-105 transition duration-500"
        />

      </div>

    </section>
  );
}

export default Hero;