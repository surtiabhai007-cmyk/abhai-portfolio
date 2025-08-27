import { Mail, Phone, Linkedin } from "lucide-react";

export default function Home() {
  const placeholder = "/certificates/placeholder.png"; // fallback image

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 font-[Poppins]">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 shadow-lg relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10 relative z-10">
          
          {/* Profile Image with Subtle Glow */}
          <div className="relative flex-shrink-0" data-aos="zoom-in">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-30"></div>
            <img
              src="/image.png"
              alt="Abhai Surti"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 shadow-2xl object-cover object-top"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-cyan-400 drop-shadow-md">
              Abhai Surti
            </h1>
            <p className="text-lg md:text-xl mt-3 font-light text-gray-300">
              Project Manager | Google PM Certified
            </p>
            <p className="mt-2 text-gray-400">Ahmedabad, Gujarat, India</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/uc?export=download&id=1eHQqlGFtKoszbUKzRvvqoctIi_meZPnl" 
                target="_blank"
                className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-400 transition transform hover:scale-105"
              >
                📄 Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/abhai-surti-b20854140"
                target="_blank"
                className="bg-transparent border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-400 hover:text-black transition transform hover:scale-105"
              >
                🔗 View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* About Me */}
        <section data-aos="fade-right">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>
          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-md leading-relaxed text-lg text-gray-200">
            <p>
              Project Management professional with{" "}
              <b className="text-white">8+ years of IT industry experience</b>, 
              delivering projects across diverse domains. Skilled in{" "}
              <b className="text-white">Agile & Waterfall methodologies</b>, 
              I specialize in <b className="text-white">end-to-end project lifecycle management, client engagement, and cross-functional team leadership</b>. 
              Currently working at <b className="text-white">TrooTech Technologies</b> as Project Coordinator, leading AI-driven projects in legal tech.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section data-aos="fade-left">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              "Agile & Scrum Methodologies",
              "Project Planning & Execution",
              "Team Leadership",
              "Stakeholder Communication",
              "Risk Management",
              "Problem-solving",
              "Budgeting & Financial Management",
              "Change Management",
              "JIRA / Trello / ClickUp / Zoho",
              "AI/ML Project Familiarity",
              "Communication",
              "Business Analysis",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl shadow-md p-4 text-center font-medium text-gray-200 hover:shadow-cyan-500/50 hover:scale-105 transition transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Work Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: "Project Coordinator",
                company: "TrooTech Technologies",
                period: "Sept 2023 – Present",
                location: "Ahmedabad, Gujarat",
                details: [
                  "Leading AI-driven projects in legal tech.",
                  "Facilitating Agile ceremonies & stakeholder communication.",
                  "Managing risks, product strategies, and on-time delivery.",
                ],
              },
              {
                role: "Project Manager",
                company: "Crawlapps Technologies",
                period: "Feb 2023 – Aug 2023",
                location: "Surat, Gujarat",
                details: [
                  "Managed multiple IT projects end-to-end.",
                  "Prepared project reports & led cross-functional teams.",
                ],
              },
              {
                role: "Project Manager",
                company: "AppStoneLab Technologies",
                period: "Jul 2021 – Jan 2023",
                location: "Surat, Gujarat",
                details: [
                  "Supervised a global team of 20+ IT experts.",
                  "Boosted productivity by 20% with Agile practices.",
                ],
              },
              {
                role: "Business Analyst",
                company: "CMARIX & ManekTech",
                period: "2019 – 2021",
                location: "Ahmedabad, Gujarat",
                details: [
                  "Requirements gathering, scope docs & proposals.",
                  "Created wireframes & process flows.",
                ],
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-cyan-500/50 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {exp.role} – <span className="text-white">{exp.company}</span>
                </h3>
                <p className="text-sm text-gray-400">
                  {exp.period} | {exp.location}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-300">
                  {exp.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Google Project Management Professional Certificate",
                link: "https://www.credly.com/badges/450795fc-f884-4da0-a90d-f92e61baa244",
                img: "/certificates/pmc-coursera.png",
              },
              {
                name: "Agile Project Management – Google (Coursera)",
                link: "https://www.coursera.org/account/accomplishments/verify/0UDNP06M82K5",
                img: "/certificates/agile-google.jpeg",
              },
              {
                name: "Foundations of Project Management – Google",
                link: "https://www.coursera.org/account/accomplishments/verify/BJCBBMQF28C6",
                img: "/certificates/foundation-google.jpeg",
              },
              {
                name: "Data Landscape of Gen AI – PMI",
                link: "",
                img: "/certificates/genai.png",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col hover:shadow-cyan-500/50 transition"
              >
                <img
                  src={cert.img || placeholder}
                  onError={(e) => (e.currentTarget.src = placeholder)}
                  alt={cert.name}
                  className="rounded-md mb-4 h-48 object-contain bg-gray-900"
                />
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="text-cyan-400 font-semibold">{cert.name}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 text-center mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
          <p className="flex items-center gap-2 justify-center">
            <Mail size={20} />{" "}
            <a href="mailto:surti.abhai007@gmail.com" className="underline">
              surti.abhai007@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 justify-center">
            <Phone size={20} /> +91-8238218235
          </p>
          <p className="flex items-center gap-2 justify-center">
            <Linkedin size={20} />{" "}
            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              className="underline"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
