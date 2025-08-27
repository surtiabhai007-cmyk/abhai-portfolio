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
          content="Abhai Surti, Project Manager, Agile, AI Projects, Ahmedabad, Google PM Certified, Digital Transformation"
        />
        <meta name="author" content="Abhai Surti" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://abhai-surti-pm.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Abhai Surti | Project Manager Portfolio" />
        <meta property="og:description" content="Project Manager and Google PM Certified with 8+ years of IT experience. Skilled in Agile, AI/ML projects, and digital transformation." />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://abhai-surti-pm.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhai Surti | Project Manager Portfolio" />
        <meta name="twitter:description" content="Project Manager and Google PM Certified with 8+ years of IT experience in Agile & AI-driven projects." />
        <meta name="twitter:image" content="/image.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Structured Data (Schema.org) */}
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
                name: "TrooTech Technologies",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressCountry: "India",
              },
            }),
          }}
        />
      </Head>
      <title>Abhai Surti | Project Manager | Google PM Certified</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
