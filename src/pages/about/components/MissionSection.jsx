import React from 'react';
import Icon from 'components/AppIcon';

const MissionSection = () => {
  const problems = [
    {
      icon: "Smartphone",
      title: "Scattered Memories",
      description: "Photos buried in phone galleries, videos lost in cloud storage, memories fragmented across platforms"
    },
    {
      icon: "Zap",
      title: "Lost Context",
      description: "Beautiful moments without stories, important milestones forgotten, personal growth invisible"
    },
    {
      icon: "Users",
      title: "Social Media Fatigue",
      description: "Public validation over private reflection, algorithm-driven feeds, temporary stories that disappear"
    }
  ];

  const solutions = [
    {
      icon: "Timeline",
      title: "Chronological Clarity",
      description: "AI-powered organization that creates coherent life narratives from chaotic digital collections"
    },
    {
      icon: "Brain",
      title: "Pattern Recognition",
      description: "Discover meaningful trends in your personal journey and celebrate growth milestones automatically"
    },
    {
      icon: "Heart",
      title: "Private Sanctuary",
      description: "A thoughtful space for intentional memory curation without social pressure or public judgment"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            From Chaos to Clarity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We started Time Machine because we experienced the same frustration: years of precious memories scattered across devices, platforms, and forgotten folders. There had to be a better way to honor our life stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-error/10 text-error px-3 py-1 rounded-full text-sm font-inter font-medium mb-6">
              <Icon name="AlertTriangle" size={14} />
              <span>The Problem</span>
            </div>
            
            <h3 className="text-2xl font-crimson font-semibold text-foreground mb-6">
              Digital Memory Crisis
            </h3>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                    <Icon name={problem.icon} size={20} className="text-error" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-foreground mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-inter font-medium mb-6">
              <Icon name="CheckCircle" size={14} />
              <span>Our Solution</span>
            </div>
            
            <h3 className="text-2xl font-crimson font-semibold text-foreground mb-6">
              Meaningful Memory Architecture
            </h3>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name={solution.icon} size={20} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-foreground mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;