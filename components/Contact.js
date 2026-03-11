import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Get in Touch
        </h2>

        <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm">

          <p className="text-gray-700 mb-8">
            I’m always open to discussing opportunities in
            <span className="text-primary"> Project Management</span>,
            <span className="text-primary"> Agile Leadership</span>, and
            <span className="text-primary"> Digital Transformation</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a href="mailto:surti.abhai007@gmail.com" className="hover:underline">
                surti.abhai007@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-primary" />
              <a
                href="https://wa.me/918238218235"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-8238218235
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-primary" />
              <a
                href="https://www.linkedin.com/in/abhai-surti-b20854140"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
