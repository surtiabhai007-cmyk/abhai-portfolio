export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-14 bg-background text-foreground relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left">

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40"></div>

          <img
            src="/image.png"
            alt="Abhai Surti Profile"
            className="relative w-28 h-28 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-lg object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Abhai Surti</span>
          </h1>

          <p className="mt-3 text-lg md:text-2xl font-medium opacity-90">
            Project Manager · Google PM Certified
          </p>

          <p className="mt-4 text-base md:text-xl opacity-80 leading-relaxed max-w-xl mx-auto md:mx-0">
            Leading <span className="text-primary">Agile teams</span> and delivering
            <span className="text-primary"> AI-driven IT solutions</span> with a focus on
            stakeholder alignment, strategic execution, and digital transformation.
          </p>

          {/* Buttons (All Inline + Consistent) */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            {/* Primary */}
            <a
              href="https://drive.google.com/uc?export=download&id=11EK9msbaBOlM34MAudGD1rHARvMDHffh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition w-full sm:w-auto text-center"
            >
              Download CV
            </a>

            {/* Secondary */}
            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition w-full sm:w-auto text-center"
            >
              LinkedIn Profile
            </a>

            {/* Contact (Now Same Style as Secondary) */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-primary hover:bg-primary hover:text-white transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
