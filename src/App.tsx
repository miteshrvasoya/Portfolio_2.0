import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { AIOverview } from './components/AIOverview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      {/* <AIOverview /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
