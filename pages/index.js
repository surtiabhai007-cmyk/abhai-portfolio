import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

<Head>
  <title>Abhai Surti – Project Manager | Agile & AI Project Coordinator</title>
  <meta
    name="description"
    content="Abhai Surti – Project Manager from Ahmedabad with 8+ years of IT experience. Certified in Agile and Google Project Management. Skilled in AI-driven project delivery, stakeholder management, and digital transformation."
  />
</Head>

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhai Surti – Project Manager | Google PM Certified</title>
        <meta
          name="description"
          content="Abhai Surti – Project Manager from Ahmedabad with 8+ years of IT experience. Certified in Agile and Google Project Management. Skilled in handling client projects and company products."
        />
      </Head>

      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 font-[Poppins]">
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
