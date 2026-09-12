import { useEffect, useRef } from 'react';
import {
  Navbar,
  Hero,
  Stats,
  About,
  Experience,
  Projects,
  Skills,
  Software,
  Education,
  Contact,
  Footer,
} from './components';
import './index.css';

function App() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    software: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref?.current) {
      const offset = 80; // navbar height
      const topPosition = ref.current.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCtaClick = (type: 'portfolio' | 'contact') => {
    if (type === 'contact') {
      handleNavClick('contact');
    } else if (type === 'portfolio') {
      handleNavClick('experience');
    }
  };

  useEffect(() => {
    // Set HTML lang and dir attributes
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'fa');
    htmlElement.setAttribute('dir', 'rtl');
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Navbar onNavClick={handleNavClick} />

      <main>
        <Hero onCtaClick={handleCtaClick} />
        <Stats />
        <div ref={sectionRefs.about}>
          <About />
        </div>
        <div ref={sectionRefs.experience}>
          <Experience />
        </div>
        <div ref={sectionRefs.projects}>
          <Projects />
        </div>
        <div ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div ref={sectionRefs.software}>
          <Software />
        </div>
        <div ref={sectionRefs.education}>
          <Education />
        </div>
        <div ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>

      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;

