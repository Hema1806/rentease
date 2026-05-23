function Features() {
  return (
    <section className="px-8 md:px-20 py-20">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900">
          Why Choose RentEase?
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Affordable, flexible, and hassle-free rental experience.
        </p>
      </div>


      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-5">🚚</div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Fast Delivery
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Quick doorstep delivery and installation for all products.
          </p>
        </div>


        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-5">💳</div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Flexible Pricing
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Monthly and yearly rental plans designed for every budget.
          </p>
        </div>


        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-5">🛠️</div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Maintenance Support
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Dedicated customer support and maintenance assistance.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;