export default function HevenessConstructionWebsite() {
  return (
    <div className="font-sans text-gray-800 bg-[#f8f5ef] min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-[#5c4033] text-white px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" className="h-14 w-auto" />
          <h1 className="text-xl font-bold">S HEVENESS CONSTRUCTION</h1>
        </div>

        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-[#f3d9b1]">Home</a>
          <a href="#about" className="hover:text-[#f3d9b1]">About</a>
          <a href="#services" className="hover:text-[#f3d9b1]">Services</a>
          <a href="#projects" className="hover:text-[#f3d9b1]">Projects</a>
          <a href="#contact" className="hover:text-[#f3d9b1]">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-[90vh] flex flex-col justify-center items-center text-center px-6 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')",
        }}
      >
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Building Strong Foundations For The Future
        </h2>

        <p className="max-w-2xl mt-6 text-lg md:text-xl text-[#f3e5d0]">
          Professional construction solutions delivering quality workmanship and reliability.
        </p>

        {/* EYECATCHING MESSAGE */}
        <div className="mt-8 bg-[#f3d9b1] text-[#5c4033] px-6 py-4 rounded-2xl shadow-xl max-w-2xl">
          <p className="font-bold text-lg">
            We can do it all — no project is too small, and no vision is too big.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-4xl font-bold text-[#5c4033] mb-6">
              About Us
            </h3>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              S HEVENESS CONSTRUCTION delivers quality building solutions
              including residential homes, renovations, and small commercial
              projects with professionalism and care.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Our mission is to provide reliable workmanship, affordable
              construction services, and long-lasting results that exceed
              customer expectations.
            </p>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-[#f3e5d0] rounded-3xl p-10 shadow-2xl">
            <h4 className="text-2xl font-semibold text-[#5c4033] mb-6">
              Why Choose Us?
            </h4>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Professional & Experienced Team</li>
              <li>✔ Quality Workmanship</li>
              <li>✔ Reliable Project Delivery</li>
              <li>✔ Affordable Construction Solutions</li>
              <li>✔ Customer Satisfaction Focused</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-8 md:px-20 bg-[#f8f5ef]">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-4xl font-bold text-[#5c4033] mb-12">
            Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Residential Construction",
                desc: "Modern homes built with quality materials and expert craftsmanship.",
              },
              {
                title: "Small-Scale Commercial Projects",
                desc: "Professional commercial construction solutions for offices, shops, and local businesses.",
              },
              {
                title: "Renovations & Maintenance",
                desc: "Transforming and maintaining properties with reliable workmanship.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition"
              >
                <h4 className="text-2xl font-semibold text-[#5c4033] mb-4">
                  {service.title}
                </h4>

                <p className="text-gray-700 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-4xl font-bold text-[#5c4033] mb-12">
            Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Foundation & Build Progress",
                images: ["/images/1.jpeg", "/images/2.jpeg"],
                desc: "Strong structural foundations and professional building progress from start to finish.",
              },
              {
                title: "Modern Home Construction",
                images: ["/images/3.jpeg", "/images/4.jpeg"],
                desc: "Modern residential construction with clean finishes and quality workmanship.",
              },
              {
                title: "Finishing & Landscaping",
                images: ["/images/5.jpeg", "/images/6.jpeg"],
                desc: "Elegant finishing touches and landscaping designed to enhance the property.",
              },
              {
                title: "Renovations",
                images: [
                  "/images/7.jpeg",
                  "/images/8.jpeg",
                  "/images/9.jpeg",
                  "/images/10.jpeg",
                ],
                desc: "Property renovations and upgrades completed with precision and care.",
              },
              {
                title: "Office Construction",
                images: ["/images/11.jpeg", "/images/12.jpeg"],
                desc: "Professional office and commercial space construction solutions.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl shadow-xl bg-[#f3e5d0]"
              >
                <div className="grid grid-cols-2 gap-2 p-2">

                  {project.images.map((img, j) => (
                    <a
                      key={j}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={img}
                        className="h-40 w-full object-cover rounded-xl hover:scale-105 transition duration-300"
                      />
                    </a>
                  ))}

                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#5c4033] mb-3">
                    {project.title}
                  </h4>

                  <p className="text-gray-700 leading-7">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-8 md:px-20 bg-[#5c4033] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-4xl font-bold mb-8">
            Contact Us
          </h3>

          <p className="text-lg text-[#f3e5d0] mb-10">
            Ready to start your next construction project?
            Get in touch with us today.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {/* COMPANY DETAILS */}
            <div className="bg-[#6e4d3d] p-8 rounded-3xl shadow-xl">
              <h4 className="text-2xl font-semibold mb-6">
                Company Details
              </h4>

              <p className="mb-4">📞 068 177 8377</p>
              <p className="mb-4">✉️ hevenesss@gmail.com</p>
              <p>📍 Johannesburg, South Africa</p>
            </div>

            {/* CONTACT FORM */}
            <form className="bg-[#6e4d3d] p-8 rounded-3xl shadow-xl space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl text-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl text-black"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-xl text-black"
              ></textarea>

              <button
                type="submit"
                className="bg-[#f3d9b1] text-[#5c4033] px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3f2b21] text-center py-6 text-[#f3e5d0]">
        © 2026 S HEVENESS CONSTRUCTION. All Rights Reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27681778377"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
        >
          <path d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.44.9 1.44 2.58 2.83 4.4 3.96 1.82 1.13 1.82.75 2.15.7.33-.05 1.07-.44 1.22-.87.15-.43.15-.8.1-.87-.05-.07-.24-.12-.53-.26z"/>
          <path d="M16.02 3C8.83 3 3 8.74 3 15.83c0 2.49.72 4.92 2.08 7L3 29l6.38-2.04a13.1 13.1 0 006.64 1.81h.01c7.18 0 13.01-5.74 13.01-12.83C29.04 8.74 23.2 3 16.02 3zm0 23.52h-.01a10.9 10.9 0 01-5.55-1.52l-.4-.24-3.79 1.21 1.24-3.68-.26-.38a10.56 10.56 0 01-1.67-5.65c0-5.87 4.71-10.64 10.5-10.64 5.79 0 10.5 4.77 10.5 10.64 0 5.87-4.71 10.64-10.5 10.64z"/>
        </svg>
      </a>

      {/* REQUEST QUOTE BUTTON */}
      <div className="bg-[#f3d9b1] py-10 text-center">
        <a
          href="#contact"
          className="bg-[#5c4033] text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Request A Quote
        </a>
      </div>

    </div>
  );
}