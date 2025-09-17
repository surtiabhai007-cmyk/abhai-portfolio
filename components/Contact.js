import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="py-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        Get in Touch
      </h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <p className="text-gray-300 text-lg mb-6">
          I’m always open to discussing new opportunities in{" "}
          <span className="text-cyan-400">Project Management</span>,{" "}
          <span className="text-purple-400">Agile Leadership</span>, and{" "}
          <span className="text-cyan-300">Digital Transformation</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-lg">
          <p className="flex items-center justify-center gap-3">
  <FaEnvelope size={18} className="text-red-400 hover:scale-125 transition shrink-0" />
  <a
    href="mailto:surti.abhai007@gmail.com"
    className="text-cyan-400 underline hover:text-cyan-300"
  >
    surti.abhai007@gmail.com
  </a>
</p>


          <p className="flex items-center justify-center gap-3">
            <FaWhatsapp size={20} className="text-green-500 hover:scale-125 transition" />
            <a
              href="https://wa.me/918238218235?text=Hello%20Abhai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              +91-8238218235
            </a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaLinkedin size={20} className="text-blue-500 hover:scale-125 transition" />
            <a
              href="https://www.linkedin.com/in/abhai-surti-b20854140"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
