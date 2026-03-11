export default function Hero() {
  return (
    <section id="home" className="py-16 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40"></div>

          <img
            src="/image.png"
            alt="Abhai Surti Project Manager Profile Picture"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary shadow-lg object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Abhai Surti</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
            Project Manager · Google PM Certified
          </p>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl opacity-80 leading-relaxed">
            Leading <span className="text-primary">Agile teams</span> and delivering
            <span className="text-primary"> AI-driven IT solutions</span> with a focus on
            stakeholder alignment, strategic execution, and digital transformation.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="https://drive.google.com/uc?export=download&id=11EK9msbaBOlM34MAudGD1rHARvMDHffh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              LinkedIn Profile
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
