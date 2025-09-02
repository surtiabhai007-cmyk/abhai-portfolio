import { Mail, Phone, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Head from "next/head";


export default function Home() {
  const placeholder = "/certificates/placeholder.png";
return (
    <>
      <Head>
        {/* Title (shows in browser tab and Google results) */}
        <title>Abhai Surti – Project Manager | Google PM Certified</title>

        {/* Description (Google search snippet) */}
        <meta
          name="description"
          content="Abhai Surti – Project Manager from Ahmedabad with 8 years of IT experience. Certified in Agile and Google Project Management. Skilled in handling client projects and company products."
        />

        {/* Tell search engines to index this page */}
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        {/* Your page content */}
      </main>
    </>
  );
  // Ref for certifications scroll
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

const experienceRef = useRef(null);

const handleToggle = () => {
  if (showAll) {
    // Scroll back to top of Experience when collapsing
    experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setShowAll(!showAll);
};

  // Certifications data
  const certifications = [
    {
      name: "Google Project Management Professional Certificate",
      link: "https://www.credly.com/badges/450795fc-f884-4da0-a90d-f92e61baa244",
      img: "/certificates/pmc-coursera.png",
    },
    {
      name: "AI in Project Management – Specialization",
      link: "#",
      img: "/certificates/ai-projects.png",
    },
    {
      name: "Project Management - Great Learning",
      link: "#",
      img: "/certificates/greatlearning.jpg",
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

  ];

  // Experience section (collapsible)
  const [showAll, setShowAll] = useState(false);
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
        "Facilitated daily stand-ups, sprint planning & retrospectives, ensuring continuous progress.",
        "Communicated project risks & updates to stakeholders with timely mitigation strategies.",
        "Fostered continuous improvement culture, encouraging innovation & best practices."
      ],
    },
    {
      role: "Project Manager",
      company: "Crawlapps Technologies",
      period: "Feb 2023 – Aug 2023",
      location: "Surat, Gujarat",
      details: [
        "Managed end-to-end IT project lifecycle from initiation to closure.",
        "Supervised IT teams, providing guidance & resolving blockers.",
        "Prepared reports & documentation, presenting updates to clients & senior management.",
        "Ensured on-time, high-quality delivery of multiple projects."
      ],
    },
    {
      role: "Project Manager",
      company: "AppStoneLab Technologies",
      period: "Jul 2021 – Jan 2023",
      location: "Surat, Gujarat",
      details: [
        "Applied Agile methodologies for effective project execution.",
        "Directed a global team of 20+ IT experts, fostering collaboration & innovation.",
        "Conducted team meetings, tracked KPIs, and proactively resolved roadblocks.",
        "Boosted productivity by 20% through Agile adoption and improved engagement."
      ],
    },
    {
      role: "Business Analyst",
      company: "CMARIX Technologies",
      period: "Feb 2021 – May 2021",
      location: "Ahmedabad, Gujarat",
      details: [
        "Translated client requirements into detailed scope documents.",
        "Facilitated workshops with clients to finalize project scopes & proposals.",
        "Designed Work Breakdown Structures (WBS) for clarity & execution."
      ],
    },
    {
      role: "Business Analyst",
      company: "ManekTech",
      period: "Jul 2019 – Jan 2021",
      location: "Ahmedabad, Gujarat",
      details: [
        "Analyzed requirements & prepared detailed proposals with module breakdowns.",
        "Built process flows & wireframes using Axure for clarity in execution.",
        "Created case studies & presentations to support client decision-making."
      ],
    },
    {
      role: "Business Development Associate",
      company: "Tri-Force IT Services",
      period: "Dec 2018 – Jun 2019",
      location: "Ahmedabad, Gujarat",
      details: [
        "Conducted research on US Federal Agencies & Government tenders.",
        "Prepared & submitted proposal documents with supporting profiles.",
        "Collaborated with clients for federal project compliance documentation."
      ],
    },
    {
      role: "Web Developer",
      company: "SaiKrupa IT Software Solutions",
      period: "Feb 2016 – Feb 2017",
      location: "Navsari, Gujarat",
      details: [
        "Built & maintained PHP/MySQL websites & portals.",
        "Suggested improvements to enhance user experience & functionality.",
        "Mentored students in programming languages & final semester projects."
      ],
    },
    {
      role: "PHP Developer",
      company: "Lysung Ventures",
      period: "Jul 2015 – Jan 2016",
      location: "Surat, Gujarat",
      details: [
        "Developed client-facing web applications & maintained open-source projects.",
        "Implemented functionality as per business requirements.",
        "Ensured quality assurance & bug-free deployments."
      ],
    },
  ];
  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 font-[Poppins]">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-cyan-400 font-bold text-xl">Abhai Surti</h1>
          <nav className="hidden md:flex space-x-6 text-gray-300">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="relative flex-shrink-0" data-aos="zoom-in">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-40 animate-pulse"></div>
            <img
              src="/image.png"
              alt="Abhai Surti"
              className="relative w-48 h-48 md:w-56 md:h-54 rounded-full border-4 border-cyan-400 shadow-2xl object-cover object-top"
            />
          </div>

          <div className="text-center md:text-left max-w-2xl" data-aos="fade-up">
            <h1 className="text-5xl font-extrabold leading-tight">
              Hi, I’m <span className="text-cyan-400">Abhai Surti</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-gray-300 leading-snug">
              <span className="text-cyan-300 font-semibold">Project Manager</span> &{" "}
              <span className="text-purple-400 font-semibold">Google PM Certified</span>
            </p>
            <p className="mt-2 text-lg md:text-xl text-gray-300 leading-snug">
              8+ years of experience driving IT project delivery & digital transformation.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/uc?export=download&id=11EK9msbaBOlM34MAudGD1rHARvMDHffh"
                target="_blank"
                className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-400 transition transform hover:scale-105"
              >
                📄 Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/abhai-surti-b20854140"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition transform hover:scale-105"
              >
                🔗 LinkedIn
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-400 hover:text-black transition transform hover:scale-105"
              >
                ✉️ Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* About Me */}
        <section id="about" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>
          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-md leading-relaxed text-lg text-gray-200">
            <p>
              I was born in Navsari and currently based in Ahmedabad, working as 
              a Project Coordinator at <b className="text-white">TRooTech Business Solutions Pvt. Ltd.</b>. 
              With over 8 years of experience in IT, I specialize in managing cross-functional teams, 
              Agile practices, and delivering projects that align with business goals.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
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
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl shadow-md p-6 text-center font-medium text-gray-200 hover:shadow-cyan-500/50 hover:scale-105 transition transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section with Collapse/Expand + Fade */}
        <section id="experience" ref={experienceRef} data-aos="fade-up">
  <h2 className="text-3xl font-bold text-cyan-400 mb-6">Experience</h2>
  <div className="relative border-l-4 border-cyan-500 ml-10">
    {displayedExperience.map((exp, i) => (
      <div
        key={i}
        className="mb-8 ml-6 transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn relative"
      >
        {/* Numbered circle instead of dot */}
        <div className="absolute -left-10 top-1 flex items-center justify-center w-6 h-6 bg-cyan-500 text-black font-bold rounded-full shadow-md" style={{margin: "-4px 0px 0px 2px"}}>
          {i + 1}
        </div>

        <h3 className="text-xl font-semibold text-cyan-300">
          {exp.role} – <span className="text-white">{exp.company}</span>
        </h3>
        <p className="text-sm text-gray-400">{exp.period} | {exp.location}</p>
        <ul className="pl-6 mt-2 text-gray-300 space-y-1 list-disc list-inside">
  {exp.details.map((d, j) => (
    <li key={j}>{d}</li>
  ))}
</ul>
      </div>
    ))}
  </div>

  {/* Toggle Button with hover effect */}
  <div className="text-center mt-6">
    <button
      onClick={() => handleToggle()}
      className="px-6 py-2 bg-cyan-500 text-black rounded-lg font-semibold shadow-md 
                 hover:bg-cyan-400 hover:scale-105 hover:shadow-lg transition-transform duration-300"
    >
      {showAll ? "View Less Experience" : "View More Experience"}
    </button>
  </div>
</section>

        {/* Certifications Carousel */}
        <section id="certifications" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Certifications</h2>
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-cyan-500 transition z-10"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Scrollable Row */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory"
            >
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col hover:shadow-cyan-500/50 hover:scale-105 transition transform w-72 flex-shrink-0 snap-start"
                >
                  <img
                    src={cert.img || placeholder}
                    alt={cert.name}
                    className="rounded-md mb-3 h-32 object-contain bg-gray-900"
                  />
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-cyan-400 font-semibold hover:underline text-center"
                  >
                    {cert.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-cyan-500 transition z-10"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </section>

        {/* Contact */}
<section id="contact" data-aos="fade-up" className="py-6">
  <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Get in Touch</h2>
  <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
    <p className="text-gray-300 text-lg mb-6">
      I’m always open to discussing new opportunities in 
      <span className="text-cyan-400"> Project Management</span>, 
      <span className="text-purple-400"> Agile Leadership</span>, 
      and <span className="text-cyan-300"> Digital Transformation</span>.
    </p>

    <div className="grid md:grid-cols-3 gap-6 text-lg">
      {/* Email */}
<p className="flex items-center justify-center gap-3">
<span className="flex-shrink-0">
  <FaEnvelope 
    size={20} 
    className="text-red-400 transition-transform duration-300 hover:scale-125 hover:text-red-500" 
  />
</span>
  <a href="mailto:surti.abhai007@gmail.com" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">
    surti.abhai007@gmail.com
  </a>
</p>

{/* WhatsApp */}
<p className="flex items-center justify-center gap-3">
  <FaWhatsapp 
    size={20} 
    className="text-green-500 transition-transform duration-300 hover:scale-125 hover:text-green-400" 
  />
  <a 
    href="https://wa.me/918238218235?text=Hello%20Abhai%2C%20I%20am%20interested%20in%20connecting%20with%20you" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
  >
    +91-8238218235
  </a>
</p>

{/* LinkedIn */}
<p className="flex items-center justify-center gap-3">
  <FaLinkedin 
    size={20} 
    className="text-blue-500 transition-transform duration-300 hover:scale-125 hover:text-blue-400" 
  />
  <a 
    href="https://www.linkedin.com/in/abhai-surti-b20854140" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
  >
    LinkedIn Profile
  </a>
</p>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
<footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Abhai Surti. All rights reserved.</p>
      </footer>
    </div>
  );
}
