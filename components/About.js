export default function About() {
  return (
    <section id="about" className="section-spacing">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        About Me
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">

        {/* Left Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">

          <p>
            I’m a{" "}
            <span className="text-primary font-medium">
              Project Manager & Google Certified professional
            </span>{" "}
            with <span className="font-semibold">8+ years</span> in IT.
          </p>

          <p>
            Currently working as a{" "}
            <span className="font-semibold">
              Project Coordinator at TrooTech
            </span>.
          </p>

          <p>
            I specialize in{" "}
            <span className="text-primary">
              Agile delivery, AI-driven solutions, and digital transformation
            </span>.
          </p>

          <p>
            Experienced in{" "}
            <span className="text-primary">
              stakeholder communication, risk management, and strategic planning
            </span>.
          </p>

          <p>
            Tools:{" "}
            <span className="font-medium">
              Jira, Trello, ClickUp, Asana
            </span>
          </p>

        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-4">

          {[
            { value: "8+", label: "Years Exp" },
            { value: "20+", label: "Projects" },
            { value: "15+", label: "Clients" },
            { value: "20+", label: "Team Size" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 md:p-5 rounded-lg md:rounded-xl border border-gray-200 bg-white shadow-sm text-center"
            >
              <p className="text-xl md:text-2xl font-bold text-primary">
                {item.value}
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
