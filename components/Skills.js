export default function Skills() {
  const skills = [
    "⚡ Agile & Scrum (Certified)",
    "📊 Digital Transformation Practices",
    "🗂️ End-to-End Project Lifecycle Management",
    "👥 Cross-functional Team Leadership",
    "🤝 Stakeholder & Client Communication",
    "🧠 AI/ML Project Delivery",
    "⚠️ Risk & Issue Management",
    "🛠️ Tools: Jira, Trello, ClickUp, Asana",
    "📈 Resource Allocation & Reporting",
    "📑 Documentation & Requirement Analysis",
    "🚀 Process Improvement & Efficiency Boost",
    "🌍 Global Client Project Management",
  ];

  return (
    <section id="skills" data-aos="fade-left">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Core Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl shadow-md p-6 text-center font-medium text-gray-200 hover:shadow-cyan-500/50 hover:scale-105 transition transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
