import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Basic SEO */}
        <meta
          name="description"
          content="Abhai Surti - Project Manager and Google PM Certified with 8+ years of IT experience in Agile, AI-driven projects, and digital transformation. Based in Ahmedabad, India."
        />
        <meta
  name="keywords"
  content="Abhai Surti, Project Manager Ahmedabad, Agile Project Manager India, AI Project Management, Technical Project Manager, IT Project Coordinator, Google PM Certified, Scrum Master, Digital Transformation Expert, Stakeholder Management, Cross-functional Team Leadership, Jira, Trello, Asana, ClickUp, Project Lifecycle Management, Global Client Projects"
/>


        <meta name="author" content="Abhai Surti" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://abhai-surti-pm.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Abhai Surti | Project Manager Portfolio" />
        <meta
          property="og:description"
          content="Project Manager and Google PM Certified with 8+ years of IT experience. Skilled in Agile, AI/ML projects, and digital transformation."
        />
        <meta
          property="og:image"
          content="https://abhai-surti-pm.vercel.app/image.png"
        />
        <meta property="og:url" content="https://abhai-surti-pm.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhai Surti | Project Manager Portfolio" />
        <meta
          name="twitter:description"
          content="Project Manager and Google PM Certified with 8+ years of IT experience in Agile & AI-driven projects."
        />
        <meta
          name="twitter:image"
          content="https://abhai-surti-pm.vercel.app/image.png"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abhai Surti",
      jobTitle: "Project Manager",
      url: "https://abhai-surti-pm.vercel.app/",
      sameAs: [
        "https://www.linkedin.com/in/abhai-surti-b20854140",
        "mailto:surti.abhai007@gmail.com"
      ],
      worksFor: {
        "@type": "Organization",
        name: "TrooTech Technologies"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "India"
      },
      knowsAbout: [
        "Agile Project Management",
        "AI in Project Management",
        "Scrum",
        "Kanban",
        "Waterfall Hybrid",
        "Digital Transformation",
        "Risk Management",
        "Stakeholder Communication",
        "Cross-functional Team Leadership",
        "Project Lifecycle Management",
        "Global Client Projects",
        "Enterprise IT Projects",
        "Team Collaboration Tools",
        "Jira",
        "Trello",
        "Asana",
        "ClickUp"
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certificate",
          name: "Google Project Management Professional Certificate",
          url: "https://www.credly.com/badges/450795fc-f884-4da0-a90d-f92e61baa244"
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certificate",
          name: "Agile Project Management – Google (Coursera)",
          url: "https://www.coursera.org/account/accomplishments/verify/0UDNP06M82K5"
        }
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Your College/University Name"
      }
    }),
  }}
/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
