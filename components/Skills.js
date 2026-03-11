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
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10">
          Core Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-700 transition duration-200 hover:shadow-md hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
