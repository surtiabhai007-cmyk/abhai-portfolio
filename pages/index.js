import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhai Surti – Project Manager | Agile & AI Project Coordinator</title>

        <meta
          name="description"
          content="Abhai Surti – Project Manager from Ahmedabad with 8+ years of IT experience. Google Project Management Certified and Agile practitioner specializing in AI-driven project delivery, stakeholder management, and digital transformation."
        />

        <meta
          name="keywords"
          content="Abhai Surti, Project Manager, Agile Project Manager, AI Project Manager, Google PM Certified, IT Project Manager Ahmedabad"
        />

        <meta name="author" content="Abhai Surti" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (LinkedIn / Facebook Preview) */}
        <meta property="og:title" content="Abhai Surti – Project Manager Portfolio" />
        <meta
          property="og:description"
          content="Project Manager with 8+ years of IT experience specializing in Agile, AI projects, and stakeholder management."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhai-surti-pm.vercel.app" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhai Surti – Project Manager" />
        <meta
          name="twitter:description"
          content="Google Project Management Certified professional with 8+ years in IT project delivery."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abhai-surti-pm.vercel.app" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <header>
          <Navbar />
        </header>

        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
