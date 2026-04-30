import Navbar from "./components/navbar";
import HeroSection from "./components/Herosection";
import useSmoothScroll from "./hooks/useSmoothScroll";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/projectsection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
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
    </>
  );
}

export default App;
