import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans bg-bg-primary text-text-primary selection:bg-accent-red/30 selection:text-text-primary">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
