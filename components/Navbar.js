export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-cyan-400 font-bold text-xl">Abhai Surti</h1>
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
