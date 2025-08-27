import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // run only once
    });
  }, []);

  return <Component {...pageProps} />;
}
