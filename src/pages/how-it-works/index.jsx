import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import ProcessOverview from './components/ProcessOverview';
import InteractiveDemo from './components/InteractiveDemo';
import PersonaCard from './components/PersonaCard';
import TechnicalDetails from './components/TechnicalDetails';
import CallToAction from './components/CallToAction';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedPersona, setExpandedPersona] = useState(null);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handlePersonaToggle = (persona) => {
    setExpandedPersona(expandedPersona === persona ? null : persona);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How It Works - Time Machine | Transform Your Memories Into Stories</title>
        <meta name="description" content="Discover how Time Machine's three-step process transforms scattered memories into beautiful, organized timelines. Upload, organize with AI, and explore your story." />
        <meta name="keywords" content="photo organization, digital memories, timeline creation, AI photo sorting, memory preservation" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-crimson font-semibold text-foreground mb-6">
                How Time Machine
                <span className="block text-primary">Transforms Your Memories</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
                From scattered photos to meaningful stories in three simple steps. 
                See how our AI-powered platform turns chaos into clarity, helping you 
                rediscover and celebrate your personal journey.
              </p>
            </div>

            <ProcessOverview 
              activeStep={activeStep} 
              onStepClick={handleStepClick} 
            />
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <InteractiveDemo activeStep={activeStep} />
          </div>
        </section>

        {/* User Personas Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
                Real Stories from Real Users
              </h2>
              <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                See how different people use Time Machine to preserve, organize, and share their most precious memories
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PersonaCard 
                persona="archivist"
                isExpanded={expandedPersona === 'archivist'}
                onToggle={() => handlePersonaToggle('archivist')}
              />
              <PersonaCard 
                persona="tracker"
                isExpanded={expandedPersona === 'tracker'}
                onToggle={() => handlePersonaToggle('tracker')}
              />
              <PersonaCard 
                persona="historian"
                isExpanded={expandedPersona === 'historian'}
                onToggle={() => handlePersonaToggle('historian')}
              />
              <PersonaCard 
                persona="storyteller"
                isExpanded={expandedPersona === 'storyteller'}
                onToggle={() => handlePersonaToggle('storyteller')}
              />
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
                Built for Trust, Designed for You
              </h2>
              <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                Your memories deserve the highest standards of security, reliability, and performance
              </p>
            </div>

            <TechnicalDetails />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <CallToAction />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <span className="text-xl font-crimson font-semibold">
                  Time Machine
                </span>
              </div>
              <p className="text-secondary-foreground/80 font-inter leading-relaxed max-w-md">
                Transform your scattered memories into beautiful, organized timelines. 
                Your story deserves better than forgotten folders.
              </p>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-secondary-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/product-features" className="text-secondary-foreground/80 hover:text-accent transition-colors">Features</a></li>
                <li><a href="/pricing" className="text-secondary-foreground/80 hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="/how-it-works" className="text-secondary-foreground/80 hover:text-accent transition-colors">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-secondary-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact-support" className="text-secondary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
                <li><a href="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-secondary-foreground/60 font-inter">
              © {new Date().getFullYear()} Time Machine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;