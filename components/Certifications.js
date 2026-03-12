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
      name: "Agile Project Management – Google",
      link: "#",
      img: "/certificates/agile-google.jpeg",
    },
  ];

  return (
    <section id="certifications" className="section-container">
        <h2 className="text-3xl font-bold mb-10">
          Certifications
        </h2>

        <div className="relative">

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 z-10"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="min-w-[260px] p-5 rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-1"
              >
                <img
                  src={cert.img || placeholder}
                  alt={cert.name}
                  className="h-32 w-full object-contain mb-4 rounded-md bg-gray-100"
                />

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline block text-center"
                >
                  {cert.name}
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 z-10"
          >
            <ChevronRight size={22} />
          </button>

      </div>
    </section>
  );
}
