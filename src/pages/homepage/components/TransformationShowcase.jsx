import React, { useState } from 'react';
import Icon from 'components/AppIcon';


const TransformationShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Upload & Organize",
      subtitle: "Effortless Memory Collection",
      description: "Simply drag and drop your photos, videos, and documents. Our AI automatically organizes everything by date, location, and content.",
      icon: "Upload",
      color: "text-success",
      bgColor: "bg-success/10",
      features: [
        "Batch upload support",
        "Automatic date detection",
        "Smart categorization",
        "Duplicate removal"
      ],
      mockData: {
        uploadedToday: 24,
        totalFiles: 1247,
        categories: 8
      }
    },
    {
      id: 1,
      title: "Discover Patterns",
      subtitle: "AI-Powered Insights",
      description: "Uncover meaningful patterns in your life journey. See your growth, celebrate milestones, and understand your personal evolution.",
      icon: "TrendingUp",
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "Growth tracking",
        "Milestone detection",
        "Mood analysis",
        "Relationship mapping"
      ],
      mockData: {
        patternsFound: 15,
        milestones: 7,
        growthScore: 92
      }
    },
    {
      id: 2,
      title: "Relive Your Story",
      subtitle: "Beautiful Timeline Experience",
      description: "Navigate through your life with our immersive timeline interface. Zoom through decades or focus on specific moments.",
      icon: "Clock",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Interactive timeline",
        "Multiple view modes",
        "Smooth navigation",
        "Rich media preview"
      ],
      mockData: {
        timelineYears: 12,
        viewModes: 4,
        interactions: 156
      }
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-4">
            Transform Chaos into <span className="text-primary">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Time Machine turns your scattered digital memories into a meaningful, 
            organized narrative of your life journey.
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="flex flex-col lg:flex-row bg-muted/50 rounded-2xl p-2 gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-card shadow-md text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                <div className={`p-2 rounded-lg ${step.bgColor}`}>
                  <Icon name={step.icon} size={20} className={step.color} />
                </div>
                <div className="text-left">
                  <div className="font-inter font-medium text-sm">
                    {step.title}
                  </div>
                  <div className="text-xs opacity-70">
                    Step {index + 1}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentStep.bgColor} mb-6`}>
              <Icon name={currentStep.icon} size={16} className={currentStep.color} />
              <span className={`text-sm font-inter font-medium ${currentStep.color}`}>
                {currentStep.subtitle}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-crimson font-semibold text-foreground mb-4">
              {currentStep.title}
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              {currentStep.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {currentStep.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`p-1 rounded-full ${currentStep.bgColor}`}>
                    <Icon name="Check" size={12} className={currentStep.color} />
                  </div>
                  <span className="text-sm font-inter text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {Object.entries(currentStep.mockData).map(([key, value], index) => (
                <div key={index}>
                  <div className="text-2xl font-inter font-bold text-foreground">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Demo */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
              {/* Demo Interface */}
              {activeStep === 0 && (
                <div className="space-y-6">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-success/30 rounded-xl p-8 text-center bg-success/5">
                    <Icon name="Upload" size={48} className="text-success mx-auto mb-4" />
                    <p className="text-foreground font-medium mb-2">Drop your memories here</p>
                    <p className="text-sm text-muted-foreground">Photos, videos, documents</p>
                  </div>
                  
                  {/* File List */}
                  <div className="space-y-3">
                    {[
                      { name: "graduation_2023.jpg", size: "2.4 MB", status: "complete" },
                      { name: "vacation_video.mp4", size: "15.2 MB", status: "uploading" },
                      { name: "birthday_party.jpg", size: "1.8 MB", status: "pending" }
                    ].map((file, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Icon name="FileImage" size={16} className="text-muted-foreground" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{file.size}</div>
                        </div>
                        <Icon 
                          name={file.status === 'complete' ? 'CheckCircle' : file.status === 'uploading' ? 'Loader' : 'Clock'} 
                          size={16} 
                          className={file.status === 'complete' ? 'text-success' : 'text-accent'} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-6">
                  {/* Insights Header */}
                  <div className="text-center">
                    <h4 className="text-lg font-inter font-semibold text-foreground mb-2">
                      Your Life Insights
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Patterns discovered in your timeline
                    </p>
                  </div>

                  {/* Pattern Cards */}
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Travel Growth", 
                        description: "You've visited 12 new places this year",
                        trend: "+40%",
                        icon: "MapPin"
                      },
                      { 
                        title: "Social Connections", 
                        description: "Most active with friends on weekends",
                        trend: "Peak: Sat",
                        icon: "Users"
                      },
                      { 
                        title: "Personal Milestones", 
                        description: "7 major achievements documented",
                        trend: "2x last year",
                        icon: "Trophy"
                      }
                    ].map((insight, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Icon name={insight.icon} size={20} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">{insight.title}</div>
                          <div className="text-xs text-muted-foreground">{insight.description}</div>
                        </div>
                        <div className="text-xs font-medium text-accent">
                          {insight.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-6">
                  {/* Timeline Interface */}
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-inter font-semibold text-foreground mb-2">
                      Interactive Timeline
                    </h4>
                    <div className="flex justify-center gap-2">
                      {['Year', 'Month', 'Week', 'Day'].map((view, index) => (
                        <button
                          key={view}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            index === 1 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {view}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">July 2024</span>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </div>

                    <div className="space-y-3">
                      {[
                        { date: "Jul 15", title: "Beach vacation", type: "photo", count: 24 },
                        { date: "Jul 10", title: "Family dinner", type: "video", count: 3 },
                        { date: "Jul 05", title: "Work presentation", type: "document", count: 1 },
                        { date: "Jul 01", title: "Monthly review", type: "note", count: 1 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-foreground">{item.title}</span>
                              <span className="text-xs text-muted-foreground">({item.count})</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{item.date}</div>
                          </div>
                          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationShowcase;