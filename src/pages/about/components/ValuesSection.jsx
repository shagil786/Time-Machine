import React from 'react';
import Icon from 'components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Privacy as a Fundamental Right",
      description: "Your memories belong to you. We use end-to-end encryption, never sell data, and give you complete control over sharing and deletion.",
      color: "success"
    },
    {
      icon: "Heart",
      title: "Technology Serves Human Connection",
      description: "We build tools that strengthen relationships and self-understanding, not replace them. Every feature is designed to enhance human experience.",
      color: "accent"
    },
    {
      icon: "TrendingUp",
      title: "Growth Over Perfection",
      description: "Life is messy and beautiful. We celebrate progress, learning, and authentic moments rather than curated highlights.",
      color: "primary"
    },
    {
      icon: "Clock",
      title: "Long-term Thinking",
      description: "We're building for decades, not quarters. Your life story deserves a platform that will preserve and protect it for generations.",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Compass" size={16} />
            <span>Our Values</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            What Guides Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles shape every decision we make, from product features to business practices. They're not just words on a wall—they're the foundation of how we build and operate Time Machine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${value.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value.icon} size={24} className={`text-${value.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-crimson font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional commitment section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Handshake" size={32} className="text-primary" />
            </div>
            
            <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
              Our Commitment to You
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We promise to always put your interests first, maintain the highest standards of data protection, and continuously improve our platform based on your needs and feedback.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-crimson font-semibold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-crimson font-semibold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Data Protection</div>
              </div>
              <div>
                <div className="text-2xl font-crimson font-semibold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Storage Promise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;