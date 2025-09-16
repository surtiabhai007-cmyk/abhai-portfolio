import { useRef, useState } from "react";

export default function Experience() {
  const experienceRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  const experience = [
    {
      role: "Project Coordinator",
      company: "TrooTech Technologies",
      period: "Sept 2023 – Present",
      location: "Ahmedabad, Gujarat",
      details: [
        "Leading AI-driven projects across diverse domains with expertise in legal tech for compliance & business growth.",
        "Defined and executed long-term product strategies aligned with company goals.",
        "Managed cross-functional Agile teams, ensuring Scrum best practices.",
        "Facilitated daily stand-ups, sprint planning & retrospectives.",
        "Communicated project risks & updates to stakeholders.",
        "Encouraged innovation & best practices across teams.",
      ],
    },
    {
      role: "Project Manager",
      company: "Crawlapps Technologies",
      period: "Feb 2023 – Aug 2023",
      location: "Surat, Gujarat",
      details: [
        "Managed end-to-end IT project lifecycle from initiation to closure.",
        "Supervised IT teams, resolving blockers and guiding performance.",
        "Presented updates to clients & senior management.",
        "Ensured on-time, high-quality delivery of multiple projects.",
      ],
    },
    // ... rest of your experience objects here
  ];

  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section id="experience" ref={experienceRef} data-aos="fade-up">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Experience</h2>
      <div className="relative border-l-4 border-cyan-500 ml-10">
        {displayedExperience.map((exp, i) => (
          <div key={i} className="mb-8 ml-6 relative">
            {/* Number circle */}
            <div className="absolute -left-10 top-1 flex items-center justify-center w-6 h-6 bg-cyan-500 text-black font-bold rounded-full shadow-md">
              {i + 1}
            </div>

            <h3 className="text-xl font-semibold text-cyan-300">
              {exp.role} – <span className="text-white">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400">
              {exp.period} | {exp.location}
            </p>
            <ul className="pl-6 mt-2 text-gray-300 space-y-1 list-disc list-inside">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleToggle}
          className="px-6 py-2 bg-cyan-500 text-black rounded-lg font-semibold shadow-md hover:bg-cyan-400 hover:scale-105 transition-transform duration-300"
        >
          {showAll ? "View Less Experience" : "View More Experience"}
        </button>
      </div>
    </section>
  );
}
