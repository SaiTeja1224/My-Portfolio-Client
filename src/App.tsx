import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Utility from "./components/Utility/Utility";
import Project from "./components/Project/Project";
import useActiveSectionOnScroll from "./hooks/useActiveSectionOnScroll";
import { useTheme } from "./context/ThemeContext";
function App() {
  useActiveSectionOnScroll();
  const { theme, setTheme } = useTheme()
  return (
    <div className={theme}>
      <Navigation/>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Utility theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
