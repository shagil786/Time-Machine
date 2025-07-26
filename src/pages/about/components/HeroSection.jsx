import React from 'react';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f6ad55%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Digital Archaeology for the Modern Age</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-crimson font-semibold text-foreground mb-6 leading-tight">
            Your Life Story
            <span className="text-primary block">Deserves Better</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We believe every moment tells a story when you see the bigger picture. Time Machine transforms scattered digital memories into meaningful narratives, helping you discover patterns in your life and celebrate your personal growth journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm font-inter">Privacy-First Architecture</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Users" size={20} className="text-accent" />
              <span className="text-sm font-inter">50,000+ Life Stories Preserved</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Award" size={20} className="text-primary" />
              <span className="text-sm font-inter">Featured in 25+ Publications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;