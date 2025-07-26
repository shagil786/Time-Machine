import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import TimelineExplorer from './components/TimelineExplorer';
import MemoryUploadStudio from './components/MemoryUploadStudio';
import LifeInsights from './components/LifeInsights';
import JournalIntegration from './components/JournalIntegration';
import ArchiveManagement from './components/ArchiveManagement';
import CommunitySpaces from './components/CommunitySpaces';
import TechnicalSpecs from './components/TechnicalSpecs';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ProductFeatures = () => {
  const heroFeatures = [
    {
      icon: 'Timeline',
      title: 'Multi-Dimensional Timeline',
      description: 'Navigate your memories through horizontal scroll, vertical feed, calendar grid, and decade overview modes'
    },
    {
      icon: 'Brain',
      title: 'AI-Powered Insights',
      description: 'Discover patterns, celebrate milestones, and gain meaningful insights from your personal journey'
    },
    {
      icon: 'Upload',
      title: 'Intelligent Upload Studio',
      description: 'Batch upload with automatic metadata extraction, smart date detection, and guided organization'
    },
    {
      icon: 'Shield',
      title: 'Privacy-First Design',
      description: 'Granular privacy controls ensure your memories remain secure while enabling selective sharing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Product Features - Time Machine | Advanced Memory Timeline Platform</title>
        <meta name="description" content="Explore Time Machine's sophisticated features: multi-dimensional timeline visualization, AI-powered insights, intelligent upload studio, journal integration, and advanced archive management tools." />
        <meta name="keywords" content="timeline features, memory organization, AI insights, photo management, digital archive, life documentation" />
        <meta property="og:title" content="Product Features - Time Machine" />
        <meta property="og:description" content="Discover the powerful features that make Time Machine the ultimate platform for organizing and visualizing your life's memories." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/product-features" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Advanced Features</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-crimson font-semibold text-foreground mb-6">
                Sophisticated Tools for
                <span className="block text-primary">Memory Curation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Transform scattered digital memories into an immersive, chronological storytelling experience with our comprehensive suite of intelligent features designed for the mindful archivist.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Play" iconPosition="left">
                  Watch Feature Demo
                </Button>
                <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {heroFeatures.map((feature) => (
                <div key={feature.title} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={feature.icon} size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <TimelineExplorer />
        <MemoryUploadStudio />
        <LifeInsights />
        <JournalIntegration />
        <ArchiveManagement />
        <CommunitySpaces />
        <TechnicalSpecs />

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-crimson font-semibold mb-4">
              Ready to Transform Your Memories?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of users who have already discovered the power of intelligent memory curation. Start your timeline today and see your life story unfold in ways you never imagined.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" iconName="Rocket" iconPosition="left">
                Start Your Timeline
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" iconName="Calendar" iconPosition="left">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-6">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12">
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
                <p className="text-secondary-foreground/80 mb-4 max-w-md">
                  Transform your digital memories into an immersive timeline experience. Preserve, organize, and celebrate your life's journey with intelligent tools designed for the modern archivist.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" iconName="Twitter" />
                  <Button variant="ghost" size="sm" iconName="Facebook" />
                  <Button variant="ghost" size="sm" iconName="Instagram" />
                  <Button variant="ghost" size="sm" iconName="Linkedin" />
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-sm text-secondary-foreground/80">
                  <li><a href="#timeline" className="hover:text-accent transition-colors duration-200">Timeline Explorer</a></li>
                  <li><a href="#upload" className="hover:text-accent transition-colors duration-200">Upload Studio</a></li>
                  <li><a href="#insights" className="hover:text-accent transition-colors duration-200">AI Insights</a></li>
                  <li><a href="#journal" className="hover:text-accent transition-colors duration-200">Journal Integration</a></li>
                  <li><a href="#archive" className="hover:text-accent transition-colors duration-200">Archive Management</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-secondary-foreground/80">
                  <li><a href="/contact-support" className="hover:text-accent transition-colors duration-200">Help Center</a></li>
                  <li><a href="/contact-support" className="hover:text-accent transition-colors duration-200">Contact Support</a></li>
                  <li><a href="/about" className="hover:text-accent transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm text-secondary-foreground/60">
                © {new Date().getFullYear()} Time Machine. All rights reserved. Built with care for your memories.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductFeatures;