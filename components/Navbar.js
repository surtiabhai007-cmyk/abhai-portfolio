export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-primary">
          Abhai Surti
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">

          <a href="#home" className="hover:text-primary transition">
            Home
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
