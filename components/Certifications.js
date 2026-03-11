import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  const placeholder = "/certificates/placeholder.png";
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
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
    <section
      id="certifications"
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Certifications
      </h2>

      <div className="relative max-w-6xl mx-auto">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-white/10 backdrop-blur hover:bg-primary transition z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card-hover w-72 flex-shrink-0 snap-start p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col"
            >
              <img
                src={cert.img || placeholder}
                alt={cert.name}
                className="h-32 object-contain mb-4 rounded-md bg-black/30"
              />

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-semibold text-primary hover:underline"
              >
                {cert.name}
              </a>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-white/10 backdrop-blur hover:bg-primary transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
