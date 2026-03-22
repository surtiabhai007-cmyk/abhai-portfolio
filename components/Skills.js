export default function Skills() {

  const skillGroups = [
    {
      icon: "📊",
      title: "Project Management",
      skills: [
        "Agile & Scrum",
        "Project Lifecycle",
        "Risk Management",
        "Resource Planning",
        "Process Improvement"
      ],
    },
    {
      icon: "👥",
      title: "Leadership",
      skills: [
        "Cross-functional Teams",
        "Stakeholder Alignment",
        "Client Communication",
        "Global Team Management"
      ],
    },
    {
      icon: "⚙️",
      title: "Technology",
      skills: [
        "AI / ML Delivery",
        "Digital Transformation",
        "Requirement Analysis",
        "Documentation"
      ],
    },
    {
      icon: "🧰",
      title: "Tools",
      skills: [
        "Jira",
        "Trello",
        "ClickUp",
        "Asana"
      ],
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-gray-50">

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Core Skills
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Key capabilities developed through managing cross-functional teams,
          delivering AI-driven solutions, and executing enterprise IT projects.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
          >

            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{group.icon}</span>
              <h3 className="text-sm md:text-lg font-semibold">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-xs md:text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
