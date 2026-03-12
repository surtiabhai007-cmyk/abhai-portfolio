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
        "AI / ML Project Delivery",
        "Digital Transformation",
        "Requirement Analysis",
        "Technical Documentation"
      ],
    },
    {
      icon: "🧰",
      title: "Tools",
      skills: [
        "Jira",
        "Trello",
        "ClickUp",
        "Asana",
        "Agile Reporting"
      ],
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-gray-50">

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Core Skills</h2>
        <p className="text-gray-600 mt-2">
          Key capabilities developed through managing cross-functional teams,
          delivering AI-driven solutions, and executing enterprise IT projects.
        </p>
      </div>

      {/* Skill Groups */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >

            {/* Icon */}
            <div className="text-3xl mb-3">
              {group.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4">
              {group.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
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
