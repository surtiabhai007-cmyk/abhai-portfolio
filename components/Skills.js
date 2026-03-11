export default function Skills() {
  const skills = [
    "Agile & Scrum (Certified)",
    "Digital Transformation Practices",
    "End-to-End Project Lifecycle Management",
    "Cross-functional Team Leadership",
    "Stakeholder & Client Communication",
    "AI / ML Project Delivery",
    "Risk & Issue Management",
    "Tools: Jira, Trello, ClickUp, Asana",
    "Resource Allocation & Reporting",
    "Documentation & Requirement Analysis",
    "Process Improvement & Efficiency Boost",
    "Global Client Project Management",
  ];

  return (
    <section
      id="skills"
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Core Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="card-hover p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-center text-sm md:text-base font-medium"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}
