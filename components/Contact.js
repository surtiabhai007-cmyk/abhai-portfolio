import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Get in Touch
      </h2>

      <div className="max-w-4xl mx-auto card-hover p-8 rounded-2xl border border-gray-200 bg-white shadow-sm text-center">

        <p className="text-lg opacity-90 mb-8">
          I’m always open to discussing opportunities in{" "}
          <span className="text-primary font-medium">
            Project Management
          </span>
          ,{" "}
          <span className="text-primary font-medium">
            Agile Leadership
          </span>
          , and{" "}
          <span className="text-primary font-medium">
            Digital Transformation
          </span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-base">

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope size={18} className="text-primary" />

            <a
              href="mailto:surti.abhai007@gmail.com"
              className="hover:text-primary transition"
            >
              surti.abhai007@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp size={20} className="text-primary" />

            <a
              href="https://wa.me/918238218235?text=Hello%20Abhai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              +91-8238218235
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center gap-3">
            <FaLinkedin size={20} className="text-primary" />

            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              LinkedIn Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
