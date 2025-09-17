export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-40 animate-pulse"></div>
          <img
            src="/image.png"
            alt="Abhai Surti Project Manager Profile Picture"
            className="relative w-48 h-48 md:w-56 md:h-54 rounded-full border-4 border-cyan-400 shadow-2xl object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-400">Abhai Surti</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-light text-gray-300 leading-snug">
            <span className="text-cyan-300 font-semibold">Project Manager</span> &{" "}
            <span className="text-purple-400 font-semibold">Google PM Certified</span>
          </p>

          {/* Recruiter-Friendly Tagline */}
          <p className="mt-3 text-lg md:text-xl text-gray-400 italic">
            Driving <span className="text-cyan-300">Agile</span> &{" "}
            <span className="text-purple-400">AI-driven IT Projects</span> with{" "}
            <span className="text-cyan-400">Precision</span>,{" "}
            <span className="text-purple-300">Digital Transformation</span>, and{" "}
            <span className="text-cyan-300">Stakeholder Excellence</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=11EK9msbaBOlM34MAudGD1rHARvMDHffh"
              target="_blank"
              className="flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-400 transition transform hover:scale-105"
            >
              📄 Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition transform hover:scale-105"
            >
              🔗 LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-400 hover:text-black transition transform hover:scale-105"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
