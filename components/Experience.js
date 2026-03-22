import { useRef, useState } from "react";

export default function Experience() {
  const experienceRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll && experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
        "Leading AI-driven projects across diverse domains.",
        "Defined and executed long-term product strategies.",
        "Managed cross-functional Agile teams.",
        "Facilitated sprint planning and retrospectives.",
        "Communicated risks and updates to stakeholders.",
      ],
    },
    {
      role: "Project Manager",
      company: "Crawlapps Technologies",
      period: "Feb 2023 – Aug 2023",
      location: "Surat, Gujarat",
      details: [
        "Managed full IT project lifecycle.",
        "Supervised development teams.",
        "Presented updates to clients.",
        "Ensured on-time delivery.",
      ],
    },
    {
      role: "Project Manager",
      company: "AppStoneLab Technologies",
      period: "Jul 2021 – Jan 2023",
      location: "Surat, Gujarat",
      details: [
        "Implemented Agile methodologies.",
        "Led a team of 20+ professionals.",
        "Tracked KPIs and resolved risks.",
        "Improved productivity by 20%.",
      ],
    },
  ];

  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section-spacing"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Professional Experience
      </h2>

      {/* Timeline */}
      <div className="relative border-l border-primary/40 pl-5 space-y-6">

        {displayedExperience.map((exp, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
          >

            {/* Dot */}
            <div className="absolute -left-[9px] top-5 w-3 h-3 bg-primary rounded-full"></div>

            {/* Role */}
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              {exp.role}
            </h3>

            {/* Company */}
            <p className="text-sm text-gray-600 mt-1">
              {exp.company}
            </p>

            {/* Meta */}
            <p className="text-xs text-gray-500 mt-1">
              {exp.period} • {exp.location}
            </p>

            {/* Points */}
            <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleToggle}
          className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

    </section>
  );
}
