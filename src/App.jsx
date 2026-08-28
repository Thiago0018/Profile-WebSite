import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { CTASection } from './components/CTASection';
import './styles/portfolio.css';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />


      </main>
      <CTASection />
    </div>
  );
}

export default App;
