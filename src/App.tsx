import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { AIOverview } from './components/AIOverview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    (window as any).TrykConfig = {
      widgetKey: 'tryk-1734728345850',
      apiUrl: 'https://tryk-backend.onrender.com/api'
    };
    const s = document.createElement('script');
    s.src = 'https://tryk-backend.onrender.com/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      {/* <AIOverview /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
