export default function Certifications() {
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
    <section id="certifications" className="section-spacing bg-gray-50">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Certifications
      </h2>

      {/* Mobile Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

        {certifications.map((cert, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >

            {/* Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-36 object-contain"
              />
            </div>

            {/* Title */}
            <p className="text-sm font-medium text-primary leading-snug">
              {cert.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
