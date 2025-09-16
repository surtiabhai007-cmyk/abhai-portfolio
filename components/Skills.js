export default function Skills() {
  const skills = [
    "📈 AI Roadmapping",
    "⚡ Agile & Scrum",
    "🗂️ Project Planning",
    "👥 Team Leadership",
    "🧠 AI Project Delivery",
    "⚠️ Risk Management",
    "🧩 Problem-solving",
    "🛠️ JIRA / Trello / ClickUp",
    "💬 Stakeholder Communication",
    "📈 Resource Allocation & Reporting",
    "🤝 Client Stakeholder Management",
    "📊 Data-Driven Decision Making",
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
