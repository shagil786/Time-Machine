import React, { useEffect } from 'react';
import Header from 'components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import PressSection from './components/PressSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About - Time Machine | Digital Archaeology for the Modern Age';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mission Section */}
        <MissionSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Company Timeline */}
        <TimelineSection />
        
        {/* Press & Recognition */}
        <PressSection />
        
        {/* User Testimonials */}
        <TestimonialsSection />
        
        {/* Call to Action */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    className="text-accent"
                    fill="currentColor"
                  >
                    <circle cx="16" cy="16" r="14" className="opacity-10" />
                    <path d="M16 4a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 0 1 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <circle cx="16" cy="16" r="2" className="text-accent" />
                  </svg>
                </div>
                <span className="text-xl font-crimson font-semibold">Time Machine</span>
              </div>
              <p className="text-white/80 mb-4 max-w-md leading-relaxed">
                Digital archaeology for the modern age. Transform your scattered memories into meaningful life narratives.
              </p>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Time Machine. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="/contact-support" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Data Protection</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;