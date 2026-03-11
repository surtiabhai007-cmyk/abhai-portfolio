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
        "Leading AI-driven projects across diverse domains with expertise in legal tech.",
        "Defined and executed long-term product strategies aligned with company goals.",
        "Managed cross-functional Agile teams ensuring Scrum best practices.",
        "Facilitated stand-ups, sprint planning, and retrospectives.",
        "Communicated project risks and updates to stakeholders.",
        "Encouraged innovation and engineering best practices across teams.",
      ],
    },
    {
      role: "Project Manager",
      company: "Crawlapps Technologies",
      period: "Feb 2023 – Aug 2023",
      location: "Surat, Gujarat",
      details: [
        "Managed the full IT project lifecycle from initiation to delivery.",
        "Supervised development teams and resolved delivery blockers.",
        "Presented project updates to clients and senior management.",
        "Ensured on-time and high-quality delivery of multiple projects.",
      ],
    },
    {
      role: "Project Manager",
      company: "AppStoneLab Technologies",
      period: "Jul 2021 – Jan 2023",
      location: "Surat, Gujarat",
      details: [
        "Implemented Agile methodologies to improve project efficiency.",
        "Led a global team of 20+ IT professionals.",
        "Tracked KPIs and proactively resolved delivery risks.",
        "Improved team productivity by 20% through Agile practices.",
      ],
    },
    {
      role: "Business Analyst",
      company: "CMARIX Technologies",
      period: "Feb 2021 – May 2021",
      location: "Ahmedabad, Gujarat",
      details: [
        "Converted client requirements into detailed project scope documents.",
        "Conducted workshops to finalize project proposals.",
        "Created Work Breakdown Structures (WBS) for execution clarity.",
      ],
    },
    {
      role: "Business Analyst",
      company: "ManekTech",
      period: "Jul 2019 – Jan 2021",
      location: "Ahmedabad, Gujarat",
      details: [
        "Prepared requirement analysis and technical proposals.",
        "Created process flows and wireframes using Axure.",
        "Developed client-facing case studies and presentations.",
      ],
    },
    {
      role: "Business Development Associate",
      company: "Tri-Force IT Services",
      period: "Dec 2018 – Jun 2019",
      location: "Ahmedabad, Gujarat",
      details: [
        "Researched US Federal Agencies and government tenders.",
        "Prepared proposal documentation for federal projects.",
        "Collaborated with clients on compliance documentation.",
      ],
    },
    {
      role: "Web Developer",
      company: "SaiKrupa IT Software Solutions",
      period: "Feb 2016 – Feb 2017",
      location: "Navsari, Gujarat",
      details: [
        "Developed PHP/MySQL websites and portals.",
        "Improved UX and platform functionality.",
        "Mentored students in programming and final-year projects.",
      ],
    },
    {
      role: "PHP Developer",
      company: "Lysung Ventures",
      period: "Jul 2015 – Jan 2016",
      location: "Surat, Gujarat",
      details: [
        "Built client-facing web applications.",
        "Maintained open-source codebases.",
        "Ensured bug-free production deployments.",
      ],
    },
  ];

  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Professional Experience
      </h2>

      <div className="relative border-l-2 border-primary pl-12 space-y-10 ml-6">
        {displayedExperience.map((exp, i) => (
          <div
            key={i}
            className="experience-card relative p-6 rounded-xl bg-white shadow-sm border border-gray-200 transition"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[34px] top-6 w-4 h-4 rounded-full bg-primary border-2 border-white"></div>

            <h3 className="text-xl font-semibold text-gray-900">
              {exp.role}{" "}
              <span className="opacity-80">– {exp.company}</span>
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {exp.period} | {exp.location}
            </p>

            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-sm">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-10">
        <button onClick={handleToggle} className="btn-primary">
          {showAll ? "View Less Experience" : "View More Experience"}
        </button>
      </div>
    </section>
  );
}
