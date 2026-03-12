export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center px-6 py-4">

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">

          {/* Home Icon */}
          <a href="#home" className="hover:text-primary transition flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5L12 3l9 7.5M4.5 9.75V21h5.25v-6h4.5v6H19.5V9.75"
              />
            </svg>
          </a>

          <a href="#about" className="hover:text-primary transition">
            About
          </a>

          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-primary transition">
            Experience
          </a>

          <a href="#certifications" className="hover:text-primary transition">
            Certifications
          </a>

          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>

        </nav>
      </div>
    </header>
  );
}
