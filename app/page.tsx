export default function HevenessConstructionWebsite() {
  return (
    <div className="font-sans text-gray-800 bg-[#f8f5ef] min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-[#5c4033] text-white px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" className="h-14 w-auto" />
          <h1 className="text-xl font-bold">S HEVENESS CONSTRUCTION</h1>
        </div>

        <div className="space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO (BEIGE/CREAM BACKGROUND MESSAGE FIXED) */}
      <section
        id="home"
        className="h-[90vh] flex flex-col justify-center items-center text-center px-6 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')",
        }}
      >
        <h2 className="text-5xl font-bold">
          Building Strong Foundations For The Future
        </h2>

        <p className="max-w-2xl mt-6 text-lg text-[#f3e5d0]">
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
      <section id="about" className="py-20 px-10 bg-white">
        <h3 className="text-4xl font-bold text-[#5c4033] mb-6">
          About Us
        </h3>

        <p className="max-w-4xl text-lg leading-8">
          S HEVENESS CONSTRUCTION delivers quality building solutions including residential homes,
          renovations, and small commercial projects with professionalism and care.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-10 bg-[#f8f5ef]">
        <h3 className="text-4xl font-bold text-[#5c4033] mb-10">
          Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl">Residential Construction</div>
          <div className="bg-white p-6 rounded-2xl">
            Small-Scale Commercial Projects
          </div>
          <div className="bg-white p-6 rounded-2xl">
            Renovations & Maintenance
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-10 bg-white">
        <h3 className="text-4xl font-bold text-[#5c4033] mb-10">
          Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {/* EXISTING PROJECTS + NEW ONES */}
          {[
            {
              title: "Foundation & Build Progress",
              images: ["/images/1.jpeg", "/images/2.jpeg"],
            },
            {
              title: "Modern Home Construction",
              images: ["/images/3.jpeg", "/images/4.jpeg"],
            },
            {
              title: "Finishing & Landscaping",
              images: ["/images/5.jpeg", "/images/6.jpeg"],
            },
            {
              title: "Renovations",
              images: ["/images/7.jpeg","/images/8.jpeg","/images/9.jpeg","/images/10.jpeg"],
            },
            {
              title: "Office Construction",
              images: ["/images/11.jpeg","/images/12.jpeg"],
            },
          ].map((project, i) => (
            <div key={i} className="bg-[#f3e5d0] rounded-2xl p-4">
              <h4 className="font-bold mb-2">{project.title}</h4>

              <div className="grid grid-cols-2 gap-2">
                {project.images.map((img, j) => (
                  <a key={j} href={img} target="_blank">
                    <img src={img} className="h-40 w-full object-cover rounded-xl" />
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#5c4033] text-white text-center">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <p className="mt-4">068 177 8377 | hevenesss@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3f2b21] text-center py-6 text-[#f3e5d0]">
        © 2026 S HEVENESS CONSTRUCTION
      </footer>

    </div>
  );
}