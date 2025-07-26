import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const CallToAction = () => {
  const features = [
    "500 free uploads to get started",
    "Automatic AI organization",
    "Multiple import options",
    "Secure cloud storage",
    "No credit card required"
  ];

  const stats = [
    { number: "10M+", label: "Memories Preserved" },
    { number: "50K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-2xl p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto mb-8">
            Join thousands of users who have transformed their scattered memories into beautiful, organized timelines. Your story deserves better than forgotten folders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-success hover:bg-success/90 text-success-foreground px-8"
            >
              Start Your Timeline Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="px-8"
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-crimson font-semibold text-foreground mb-6">
              What You Get With Your Free Account
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-success" />
                  </div>
                  <span className="text-muted-foreground font-inter">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="font-inter font-medium text-foreground">
                  Privacy Guaranteed
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your memories are encrypted and private by default. We never sell your data or use your photos for advertising.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-crimson font-semibold text-foreground mb-6">
              Trusted by Memory Keepers Worldwide
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card border border-border rounded-lg">
                  <div className="text-2xl font-crimson font-semibold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-inter italic mb-2">
                    "Time Machine helped me organize 20 years of family photos in just one weekend. The AI suggestions were incredibly accurate, and now my kids love exploring our family timeline."
                  </p>
                  <p className="text-xs text-muted-foreground font-inter">
                    — Sarah M., Family Historian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-inter mb-4">
            Questions about getting started? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" size="sm" iconName="MessageCircle">
              Live Chat Support
            </Button>
            <Button variant="ghost" size="sm" iconName="Book">
              View Documentation
            </Button>
            <Button variant="ghost" size="sm" iconName="Mail">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;