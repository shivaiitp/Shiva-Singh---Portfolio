import About from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Experience from "./Components/ExperienceSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/ProjectsSection";
import Skills from "./Components/SkillsSection";

// import About from "./Components/About"; // Example of another section

function App() {
  return (
    <div className=" bg-black w-full overflow-hidden">
      <HeroSection /> {/* ✅ Background is applied only to this section */}
      {/* Other sections remain normal */}
       
       <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
