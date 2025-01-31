import Navbar from "./components/Navbar";
import About from "./screens/About";
import Work from "./screens/Work";
import Projects from "./screens/Projects";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CustomCursor from "./components/CustomCursor";
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";
import { useState } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import HeroSection from "./components/HeroSection";
import Education from "./screens/Education";




function App() {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setIsLoading(false); // Update isLoading only after the LoadingScreen completes
    }, 500); // Add a small delay to ensure transitions finish
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'
          }`}>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)]">
            <CustomCursor />

            {/* Navigation */}
            <Navbar scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <About scrollToSection={scrollToSection} />

            {/* Skills Section */}
            <Skills />

            {/* Education Section */}
            <Education />

            {/* Work Experience Section */}
            <Work />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer scrollToSection={scrollToSection} />

            {/* Scroll to Top Button */}
            <ScrollToTopButton />
          </div>
        </div>)}
    </>
  );
}

export default App;
