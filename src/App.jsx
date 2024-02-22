import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/HeroSection/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
