import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  const placeholder = "/certificates/placeholder.png";
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

  return (
    <section id="certifications" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Certifications</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-cyan-500 transition z-10"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

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

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-cyan-500 transition z-10"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
}
