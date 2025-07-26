import React, { useState, useEffect } from 'react';

import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimelineProgress(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const timelineNodes = [
    { year: '2020', title: 'College Graduation', active: timelineProgress > 20 },
    { year: '2021', title: 'First Job', active: timelineProgress > 40 },
    { year: '2022', title: 'New City', active: timelineProgress > 60 },
    { year: '2023', title: 'Career Growth', active: timelineProgress > 80 },
    { year: '2024', title: 'New Adventures', active: timelineProgress > 95 }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-crimson font-semibold text-foreground leading-tight mb-6">
              Your life deserves better than{' '}
              <span className="text-primary">scattered screenshots</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your digital memories into a beautiful, chronological story. 
              Discover patterns, celebrate growth, and create meaningful connections 
              between your past and present moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="default" 
                size="lg"
                className="bg-success hover:bg-success/90 text-success-foreground"
                iconName="Play"
                iconPosition="left"
              >
                Start Your Timeline
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="PlayCircle"
                iconPosition="left"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-accent" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>50K+ Users</span>
              </div>
            </div>
          </div>

          {/* Right - Animated Timeline Preview */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-lg font-inter font-semibold text-foreground mb-2">
                  Your Timeline Preview
                </h3>
                <p className="text-sm text-muted-foreground">
                  Watch your memories come to life
                </p>
              </div>

              {/* Timeline Visualization */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                <div 
                  className="absolute left-8 top-0 w-0.5 bg-primary transition-all duration-1000 ease-out"
                  style={{ height: `${timelineProgress}%` }}
                ></div>

                {/* Timeline Nodes */}
                <div className="space-y-6">
                  {timelineNodes.map((node, index) => (
                    <div key={node.year} className="relative flex items-center">
                      {/* Node Circle */}
                      <div className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        node.active 
                          ? 'bg-primary border-primary shadow-lg' 
                          : 'bg-background border-border'
                      }`}>
                        {node.active && (
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`ml-6 transition-all duration-500 ${
                        node.active ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-2'
                      }`}>
                        <div className="text-sm font-inter font-medium text-primary">
                          {node.year}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {node.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Stats */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-inter font-semibold text-foreground">
                      247
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Memories
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-inter font-semibold text-foreground">
                      12
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Patterns
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-inter font-semibold text-foreground">
                      5
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;