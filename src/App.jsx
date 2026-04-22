import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />

        <Hero />
        <About />
        <Project />
        <Contact />
    </div>
  );
}

export default App;
