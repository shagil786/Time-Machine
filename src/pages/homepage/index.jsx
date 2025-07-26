import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import HeroSection from './components/HeroSection';
import TransformationShowcase from './components/TransformationShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import MemoryStatsSection from './components/MemoryStatsSection';
import CTASection from './components/CTASection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Time Machine - Transform Your Memories Into Living Stories</title>
        <meta 
          name="description" 
          content="Transform scattered digital memories into beautiful, chronological stories. Discover patterns, celebrate milestones, and preserve your life journey with AI-powered organization and privacy-first design." 
        />
        <meta name="keywords" content="digital memories, photo organization, life timeline, memory preservation, AI insights, personal archive" />
        <meta property="og:title" content="Time Machine - Transform Your Memories Into Living Stories" />
        <meta property="og:description" content="Your life deserves better than scattered screenshots. Create meaningful narratives from your digital memories." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Animated Timeline */}
          <HeroSection />
          
          {/* Three-Panel Transformation Journey */}
          <TransformationShowcase />
          
          {/* User Testimonials with Emotional Outcomes */}
          <TestimonialsSection />
          
          {/* Memory Statistics with Privacy Focus */}
          <MemoryStatsSection />
          
          {/* Final CTA with Email Signup */}
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 32 32" 
                      className="text-primary"
                      fill="currentColor"
                    >
                      <circle cx="16" cy="16" r="14" className="opacity-10" />
                      <path d="M16 4a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 0 1 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                      <circle cx="16" cy="16" r="2" className="text-accent" />
                    </svg>
                  </div>
                  <span className="text-xl font-crimson font-semibold text-foreground">
                    Time Machine
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Transform your digital memories into meaningful, chronological stories.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product */}
              <div>
                <h3 className="text-sm font-inter font-semibold text-foreground mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="/product-features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-inter font-semibold text-foreground mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-inter font-semibold text-foreground mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="/contact-support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Time Machine. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">Made with ❤️ for memory keepers</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;