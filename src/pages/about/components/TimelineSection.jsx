import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2021,
      title: "The Spark",
      description: "Sarah and Marcus meet at a digital wellness conference, bonding over their shared frustration with scattered digital memories.",
      details: "After losing years of family photos in a cloud storage mishap, they realized the need for a better solution.",
      icon: "Lightbulb",
      color: "accent"
    },
    {
      year: 2022,
      title: "Foundation",
      description: "Time Machine is officially founded with a mission to transform digital memory chaos into meaningful narratives.",
      details: "Secured initial funding and assembled a team of privacy experts, AI researchers, and design professionals.",
      icon: "Rocket",
      color: "primary"
    },
    {
      year: 2023,
      title: "Beta Launch",
      description: "Private beta launches with 1,000 users, receiving overwhelming positive feedback and feature requests.",
      details: "Users reported rediscovering forgotten memories and gaining new insights into their personal growth patterns.",
      icon: "Users",
      color: "success"
    },
    {
      year: 2024,
      title: "Public Launch",
      description: "Time Machine goes public, reaching 50,000+ users and earning recognition from major tech publications.",
      details: "Featured in TechCrunch, Wired, and Fast Company for innovative approach to personal data organization.",
      icon: "Globe",
      color: "secondary"
    },
    {
      year: 2025,
      title: "Global Expansion",
      description: "Expanding internationally with multi-language support and partnerships with digital wellness organizations.",
      details: "Planning advanced AI features and collaborative family timeline tools based on user feedback.",
      icon: "Map",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Timeline" size={16} />
            <span>Our Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            Building the Future of Memory
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a shared frustration to a platform serving thousands, here's how Time Machine has evolved to become the trusted home for digital memories.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-success rounded-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col lg:flex-row items-center lg:items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div
                    className={`bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      activeYear === milestone.year ? 'ring-2 ring-primary/20 shadow-lg' : ''
                    }`}
                    onClick={() => setActiveYear(milestone.year)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-${milestone.color}/10 rounded-xl flex items-center justify-center`}>
                        <Icon name={milestone.icon} size={20} className={`text-${milestone.color}`} />
                      </div>
                      <div>
                        <div className="text-2xl font-crimson font-semibold text-primary">
                          {milestone.year}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {milestone.year === 2025 ? 'Coming Soon' : 'Milestone'}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-crimson font-semibold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    
                    {activeYear === milestone.year && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex-shrink-0 my-4 lg:my-0 hidden lg:block">
                  <div className={`w-6 h-6 bg-${milestone.color} rounded-full border-4 border-background shadow-lg z-10 relative`}>
                    {activeYear === milestone.year && (
                      <div className={`absolute inset-0 bg-${milestone.color} rounded-full animate-ping opacity-75`}></div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Users Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">2M+</div>
            <div className="text-sm text-muted-foreground">Memories Preserved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Press Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;