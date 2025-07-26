import React from 'react';
import Icon from 'components/AppIcon';

const ProcessOverview = ({ activeStep, onStepClick }) => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Memories",
      description: "Import photos from multiple sources with intelligent processing",
      features: ["Drag & drop interface", "Google Photos sync", "Automatic metadata extraction", "Smart date detection"],
      icon: "Upload"
    },
    {
      number: 2,
      title: "AI Organization & Insights",
      description: "Let our AI create order and discover meaningful patterns",
      features: ["Chronological sorting", "Duplicate detection", "Smart tagging", "Personal analytics"],
      icon: "Brain"
    },
    {
      number: 3,
      title: "Explore & Share Your Story",
      description: "Navigate your timeline and share meaningful moments",
      features: ["Interactive timeline", "Multiple view modes", "Smart filtering", "Secure sharing"],
      icon: "Share2"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-crimson font-semibold text-foreground mb-4">
          Three Simple Steps to Your Digital Legacy
        </h2>
        <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
          Transform scattered memories into a beautiful, organized timeline that tells your unique story
        </p>
      </div>
      
      <div className="relative">
        {/* Connection Lines */}
        <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="flex justify-between items-center px-24">
            <div className="w-32 h-px bg-border"></div>
            <div className="w-32 h-px bg-border"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative bg-card border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                activeStep === step.number
                  ? 'border-primary shadow-lg ring-2 ring-primary/20'
                  : 'border-border hover:border-accent hover:shadow-md'
              }`}
              onClick={() => onStepClick(step.number)}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  activeStep === step.number
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={step.icon} size={28} />
                </div>
                
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold mb-3 ${
                  activeStep === step.number
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step.number}
                </div>
                
                <h3 className="text-xl font-crimson font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {step.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {step.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-inter">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-4 right-4">
                <Icon 
                  name={activeStep === step.number ? "ChevronDown" : "ChevronRight"} 
                  size={20} 
                  className="text-muted-foreground"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessOverview;