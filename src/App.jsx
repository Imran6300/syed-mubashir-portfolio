import Navbar from "./components/navbar";
import HeroSection from "./components/Herosection";
import useSmoothScroll from "./hooks/useSmoothScroll";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/projectsection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
