function Features() {

  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick doorstep delivery and professional installation services for every rental product.",
    },

    {
      icon: "💳",
      title: "Flexible Plans",
      desc: "Affordable monthly rental plans designed for students, families, and professionals.",
    },

    {
      icon: "🛠️",
      title: "Maintenance Support",
      desc: "Dedicated support and maintenance assistance included throughout your rental journey.",
    },
  ];

  return (

    <section className="px-8 md:px-20 py-24">

      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-4">
          Why Choose Us
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Experience Hassle-Free
          <span className="text-blue-600"> Rentals</span>
        </h2>

        <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
          RentEase provides affordable furniture and appliance rentals with flexible plans,
          fast delivery, and premium customer support.
        </p>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {features.map((item, index) => (

          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg border border-white/40 p-10 rounded-[32px] shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500"
          >

            <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center text-4xl mb-8">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;