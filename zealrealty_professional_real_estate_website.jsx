export default function ZealRealtyWebsite() {
  return (
    <div className="bg-white text-gray-900 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide text-black">
            ZEAL<span className="text-yellow-500">REALTY</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#services" className="hover:text-yellow-500 transition">Services</a>
            <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
            <a href="#redevelopment" className="hover:text-yellow-500 transition">Redevelopment</a>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Building"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-5xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Navi Mumbai’s Future
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            40+ Years of Land Expertise in Navi Mumbai.
            Connecting Landowners, Societies & Developers With High-Value Redevelopment Opportunities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/917718015434"
              target="_blank"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1974&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl h-[550px] w-full object-cover"
              alt="Construction"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
              About Our Company
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Trusted Land Consultants & Redevelopment Experts
            </h2>

            <p className="text-gray-700 leading-8 text-lg mb-6">
              With over four decades of experience in Navi Mumbai’s real estate and land sector, Zeal Realty specializes in land acquisition, redevelopment consulting, joint ventures, and builder-developer collaborations.
            </p>

            <p className="text-gray-700 leading-8 text-lg mb-6">
              Over the years, we have successfully facilitated and delivered more than 10 lakh sq. ft. of land for development projects across Navi Mumbai.
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              Our deep market understanding, local connections, and transparent approach help landowners, societies, and developers unlock the true value of their properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
              Our Services
            </p>
            <h2 className="text-5xl font-bold">Professional Real Estate Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Land Acquisition & Land Deals',
              'Redevelopment Projects',
              'Joint Venture Opportunities',
              'Builder & Developer Consulting',
              'Society Redevelopment',
              'Plot Aggregation',
              'Real Estate Advisory',
              'Development Management',
              'Project Planning & Feasibility',
              'Investor & Builder Connections'
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-black hover:text-white transition duration-300 rounded-3xl p-10 shadow-lg"
              >
                <div className="text-yellow-500 text-5xl font-bold mb-5">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold leading-snug">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
              Projects & Development
            </p>
            <h2 className="text-5xl font-bold">Transforming Land Into Landmarks</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop'
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-3xl group shadow-2xl">
                <img
                  src={img}
                  className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Project"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redevelopment */}
      <section id="redevelopment" className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
            Redevelopment Opportunities
          </p>

          <h2 className="text-5xl font-bold mb-10 leading-tight">
            Where Land Meets Opportunity
          </h2>

          <p className="text-lg text-gray-700 leading-9 max-w-4xl mx-auto">
            We help landowners, societies, and developers maximize property value through strategic planning, transparency, and long-term partnerships. Our mission is to create future-ready residential and commercial developments across Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-black text-white rounded-3xl p-14 shadow-2xl">
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
              Our Vision
            </p>
            <h3 className="text-4xl font-bold mb-6">
              Creating Valuable Spaces
            </h3>
            <p className="text-gray-300 leading-8 text-lg">
              To become a trusted name in redevelopment and real estate development by creating valuable, future-ready spaces across Navi Mumbai.
            </p>
          </div>

          <div className="bg-yellow-500 text-black rounded-3xl p-14 shadow-2xl">
            <p className="uppercase tracking-[0.3em] font-semibold mb-3">
              Our Mission
            </p>
            <h3 className="text-4xl font-bold mb-6">
              Transparency & Growth
            </h3>
            <p className="leading-8 text-lg">
              To help landowners, societies, and developers maximize property value through strategic planning, transparency, and long-term partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
            Client Trust
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Trusted Redevelopment Experts
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Professional approach and transparent land dealings across Navi Mumbai.',
              'Strong builder connections and redevelopment expertise.',
              'Reliable guidance for societies and property owners.'
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-lg">
                <p className="text-gray-700 leading-8 text-lg">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 px-6 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Office"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Looking for Redevelopment or Land Opportunities?
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-10">
              Connect with our team for land development, redevelopment consultation, and builder partnerships across Navi Mumbai.
            </p>

            <div className="space-y-6 text-lg">
              <div>
                <h4 className="font-bold text-yellow-500">Anwar Choudhary</h4>
                <p>+91 7718015434</p>
              </div>

              <div>
                <h4 className="font-bold text-yellow-500">Zahid Choudhary</h4>
                <p>+91 9594202024</p>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Inquiry Form</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
              ></textarea>

              <button className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white transition py-4 rounded-xl font-semibold text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">
              ZEAL<span className="text-yellow-500">REALTY</span>
            </h2>
            <p className="text-gray-400 mt-2">
              40 Years of Real Estate Excellence.
            </p>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>Building Navi Mumbai’s Future.</p>
            <p>Where Land Meets Opportunity.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917718015434"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:scale-110 transition text-white px-6 py-4 rounded-full shadow-2xl font-semibold z-50"
      >
        WhatsApp
      </a>
    </div>
  )
}
