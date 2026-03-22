export default function Certifications() {
  const certifications = [
    {
      title: "Google Project Management Professional Certificate",
      image: "/cert1.png",
    },
    {
      title: "AI in Project Management – Specialization",
      image: "/cert2.png",
    },
    {
      title: "Project Management – Great Learning",
      image: "/cert3.png",
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
