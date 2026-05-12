export default function Home() {
  const projects = [
    {
      title: "Strong Foundation & Construction Progress",
      image1: "/images/1.jpeg",
      image2: "/images/2.jpeg",
      desc: "From solid foundations to ground-level construction, we ensure every project starts with strength and precision.",
    },
    {
      title: "Modern Home Construction",
      image1: "/images/3.jpeg",
      image2: "/images/4.jpeg",
      desc: "A nearly completed modern home with professional finishes and attention to detail.",
    },
    {
      title: "Finishing Touches & Exterior Detail",
      image1: "/images/5.jpeg",
      image2: "/images/6.jpeg",
      desc: "High-quality tiling and decorative finishes including pebble work to enhance property appearance.",
    },
    {
      title: "Renovations & Upgrades",
      image1: "/images/7.jpeg",
      image2: "/images/8.jpeg",
      image3: "/images/9.jpeg",
      image4: "/images/10.jpeg",
      desc: "We transform old spaces into modern, functional, and beautiful environments through expert renovation work.",
    },
    {
      title: "Office Construction",
      image1: "/images/11.jpeg",
      image2: "/images/12.jpeg",
      desc: "From new office builds to expanding existing corporate spaces, we deliver professional and efficient office solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpeg')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          S HEVENESS CONSTRUCTION
        </h1>

        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          Building strong foundations, modern homes, renovations, and commercial spaces with quality and care.
        </p>

        {/* Eye-catching slogan */}
        <div className="mt-8 bg-[#f3d9b1] text-[#5c4033] px-6 py-4 rounded-2xl shadow-2xl max-w-2xl">
          <p className="text-lg md:text-2xl font-bold">
            No project is too small or too big — we build it all with precision, pride, and professionalism.
          </p>
        </div>

        <a
          href="#contact"
          className="mt-8 bg-[#5c4033] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Request A Quote
        </a>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[project.image1, project.image2, project.image3, project.image4]
                  .filter(Boolean)
                  .map((img, i) => (
                    <a
                      key={i}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={img}
                        alt={project.title}
                        className="h-56 w-full object-cover rounded-xl hover:scale-105 transition cursor-pointer"
                      />
                    </a>
                  ))}
              </div>

              <p className="mt-4 text-gray-700">
                {project.desc}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-[#f3d9b1] text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Contact Us
        </h2>

        <p className="mb-6">
          Email: hevenesss@gmail.com | Phone: 068 177 8377
        </p>

        <a
          href="mailto:hevenesss@gmail.com"
          className="bg-[#5c4033] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Send Email
        </a>
      </section>

    </main>
  );
}