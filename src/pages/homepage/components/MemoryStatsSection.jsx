import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const MemoryStatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    memoriesPreserved: 0,
    patternsDiscovered: 0,
    milestonescelebrated: 0,
    yearsDocumented: 0
  });

  const finalStats = {
    memoriesPreserved: 2847291,
    patternsDiscovered: 156847,
    milestonescelebrated: 89234,
    yearsDocumented: 847291
  };

  const statsConfig = [
    {
      key: 'memoriesPreserved',
      label: 'Memories Preserved',
      icon: 'Image',
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Photos, videos, and documents safely stored and organized'
    },
    {
      key: 'patternsDiscovered',
      label: 'Patterns Discovered',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'AI-powered insights revealing life trends and connections'
    },
    {
      key: 'milestonescelebrated',
      label: 'Milestones Celebrated',
      icon: 'Trophy',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Important life events automatically identified and highlighted'
    },
    {
      key: 'yearsDocumented',
      label: 'Years Documented',
      icon: 'Calendar',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      description: 'Collective years of life stories preserved across all users'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setAnimatedStats(prev => {
        const newStats = {};
        let allComplete = true;

        Object.keys(finalStats).forEach(key => {
          const target = finalStats[key];
          const current = prev[key];
          const increment = target / steps;
          
          if (current < target) {
            newStats[key] = Math.min(current + increment, target);
            allComplete = false;
          } else {
            newStats[key] = target;
          }
        });

        if (allComplete) {
          clearInterval(interval);
        }

        return newStats;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="text-sm font-inter font-medium text-foreground">
              Privacy-First Platform Statistics
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-4">
            Millions of Stories <span className="text-primary">Preserved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a growing community of memory keepers who trust Time Machine 
            to preserve their most precious moments while maintaining complete privacy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statsConfig.map((stat, index) => (
            <div
              key={stat.key}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6`}>
                <Icon name={stat.icon} size={32} className={stat.color} />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-inter font-bold text-foreground mb-2">
                {formatNumber(animatedStats[stat.key])}
              </div>

              {/* Label */}
              <div className="text-lg font-inter font-semibold text-foreground mb-3">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Privacy First */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-success/10 rounded-xl">
                  <Icon name="Lock" size={24} className="text-success" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    Privacy First
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Your data stays yours
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption ensures your memories remain private and secure.
              </p>
            </div>

            {/* No Ads */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    Ad-Free Experience
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Focus on memories
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                No advertisements or data mining - just pure memory preservation.
              </p>
            </div>

            {/* Lifetime Access */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Icon name="Infinity" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    Built to Last
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Generational preservation
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Legacy features ensure your timeline can be passed down through generations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            <Icon name="Info" size={16} className="inline mr-2" />
            All statistics are aggregated and anonymized to protect individual privacy. 
            No personal data is shared or used for advertising purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoryStatsSection;