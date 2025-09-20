import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior and intersection observer for animations
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      elements.forEach(el => observer.observe(el));
    };

    // Set up observer after a short delay
    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
