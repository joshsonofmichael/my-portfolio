// import Footer from "@/components/footer";

import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
      {/* Hero Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-black text-gray-200">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-500">My Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Explore my work, skills, and passion for creativity.
          </p>
          <div>
            <a
              href="#about"
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400 max-w-2xl text-center">
          Hi! I’m [Your Name], a passionate software developer with a love for
          solving problems and creating innovative solutions. Outside of coding,
          I enjoy [list your hobbies or fun facts here].
        </p>
      </section>

      {/* Projects Section */}
      <section className="snap-start h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-black text-gray-200">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-lg text-gray-400 text-center">
          Check out some of the projects I’ve worked on, including professional
          and personal endeavors.
        </p>
        <a
          href="/projects"
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          View Projects
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
