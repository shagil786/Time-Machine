import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Icon from 'components/AppIcon';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Mock submission - in real app would integrate with email service
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    {
      icon: 'Upload',
      title: 'Easy Upload',
      description: 'Drag & drop your memories'
    },
    {
      icon: 'Zap',
      title: 'AI Organization',
      description: 'Automatic smart categorization'
    },
    {
      icon: 'Timeline',
      title: 'Beautiful Timeline',
      description: 'Interactive life visualization'
    },
    {
      icon: 'Shield',
      title: 'Privacy Protected',
      description: 'Your data stays secure'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-success/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
              <Icon name="Sparkles" size={16} className="text-success" />
              <span className="text-sm font-inter font-medium text-success">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-crimson font-semibold text-foreground mb-6 leading-tight">
              Transform Your Memories Into a 
              <span className="text-primary"> Living Story</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Join thousands who've discovered the joy of organized memories. 
              Start with our free plan and see your life story unfold in ways you never imagined.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-card border border-border rounded-lg">
                    <Icon name={feature.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-inter font-medium text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg"
                className="bg-success hover:bg-success/90 text-success-foreground"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Timeline Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="PlayCircle"
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right - Email Signup Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <Icon name="Mail" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-inter font-semibold text-foreground mb-2">
                      Get Early Access
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Be the first to know about new features and get exclusive memory preservation tips.
                    </p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                    
                    <Button 
                      type="submit"
                      variant="default"
                      size="lg"
                      fullWidth
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      iconName="Send"
                      iconPosition="right"
                    >
                      Get Started Now
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={12} />
                        <span>50K+ users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={12} className="text-accent fill-current" />
                        <span>4.9/5 rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Shield" size={12} />
                        <span>Privacy first</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-4">
                    <Icon name="CheckCircle" size={32} className="text-success" />
                  </div>
                  <h3 className="text-xl font-inter font-semibold text-foreground mb-2">
                    Welcome to Time Machine!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Check your email for next steps to start building your timeline.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Mail" size={12} />
                    <span>Confirmation sent to {email}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by memory keepers worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              'Featured in TechCrunch',
              'Product Hunt #1',
              'App Store Featured',
              'Google Play Editor\'s Choice'
            ].map((achievement, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-sm font-inter font-medium text-foreground">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;