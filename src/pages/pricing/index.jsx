import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
import PricingCard from './components/PricingCard';
import FeatureComparison from './components/FeatureComparison';
import TestimonialCard from './components/TestimonialCard';
import TrustSignals from './components/TrustSignals';
import FAQ from './components/FAQ';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const pricingPlans = [
    {
      name: "Free",
      price: billingPeriod === 'monthly' ? '0' : '0',
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: "Perfect for getting started with your digital archive",
      features: [
        "500 photo & video uploads",
        "2GB storage space",
        "Basic timeline view",
        "Auto date detection",
        "Private timeline only",
        "PDF export only",
        "Community support"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline"
    },
    {
      name: "Premium",
      price: billingPeriod === 'monthly' ? '9.99' : '99',
      originalPrice: billingPeriod === 'yearly' ? '119.88' : null,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: "Unlock the full power of AI-driven memory insights",
      features: [
        "Unlimited uploads",
        "100GB storage space",
        "Advanced timeline visualizations",
        "AI insights dashboard",
        "Pattern recognition",
        "Public sharing options",
        "All export formats",
        "Priority support",
        "Automated backups"
      ],
      buttonText: "Start Premium",
      buttonVariant: "default"
    },
    {
      name: "Family",
      price: billingPeriod === 'monthly' ? '19.99' : '199',
      originalPrice: billingPeriod === 'yearly' ? '239.88' : null,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: "Collaborative memory keeping for the whole family",
      features: [
        "Everything in Premium",
        "500GB shared storage",
        "Up to 6 family members",
        "Collaborative timelines",
        "Family archive management",
        "Legacy planning tools",
        "Multi-user permissions",
        "Dedicated family support",
        "Advanced sharing controls"
      ],
      buttonText: "Start Family Plan",
      buttonVariant: "secondary"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "I had thousands of photos scattered across different devices and platforms. Time Machine's AI organized everything chronologically and helped me rediscover memories I'd completely forgotten. The insights dashboard showed me patterns in my life I never noticed before.",
      rating: 5,
      plan: "Premium"
    },
    {
      name: "Michael Rodriguez",
      role: "Life Coach",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "As someone focused on personal development, Time Machine has become an essential tool for tracking my growth journey. The timeline visualization helps me see how far I've come, and I share selective timelines with my accountability partners.",
      rating: 5,
      plan: "Premium"
    },
    {
      name: "Jennifer Thompson",
      role: "Family Historian",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The Family plan has revolutionized how we preserve our family history. My parents, siblings, and I all contribute memories to our shared timeline. It's become our digital family album that spans three generations.",
      rating: 5,
      plan: "Family"
    }
  ];

  const handleSelectPlan = (plan) => {
    console.log('Selected plan:', plan.name);
    // Handle plan selection logic here
  };

  const handleBillingToggle = (period) => {
    setBillingPeriod(period);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Time Machine | Choose Your Memory Preservation Plan</title>
        <meta name="description" content="Choose the perfect plan for preserving your digital memories. From free basic timeline to premium AI insights and family collaboration features." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-crimson font-semibold text-foreground mb-6">
              Choose Your Memory
              <span className="text-primary"> Preservation Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed mb-8 max-w-3xl mx-auto">
              From basic timeline organization to AI-powered insights and family collaboration, 
              find the perfect plan to transform your scattered digital memories into meaningful stories.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`font-inter text-sm ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => handleBillingToggle(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                  billingPeriod === 'yearly' ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`font-inter text-sm ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-inter font-medium">
                  Save 17%
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  isPopular={index === 1}
                  onSelectPlan={handleSelectPlan}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <FeatureComparison />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-crimson font-semibold text-foreground mb-4">
                Trusted by Memory Keepers Worldwide
              </h2>
              <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
                See how Time Machine has transformed the way people preserve and explore their life stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <TrustSignals />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-crimson font-semibold text-foreground mb-4">
              Ready to Transform Your Digital Memories?
            </h2>
            <p className="text-muted-foreground font-inter text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the joy of organized, 
              meaningful memory preservation with Time Machine.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-success hover:bg-success/90 text-success-foreground"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Free Timeline
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    className="text-accent"
                    fill="currentColor"
                  >
                    <circle cx="16" cy="16" r="14" className="opacity-10" />
                    <path d="M16 4a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 0 1 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <circle cx="16" cy="16" r="2" className="text-accent" />
                  </svg>
                  <span className="text-xl font-crimson font-semibold">Time Machine</span>
                </div>
                <p className="text-secondary-foreground/80 font-inter text-sm leading-relaxed max-w-md">
                  Transform your scattered digital memories into meaningful stories. 
                  Preserve, organize, and celebrate your life's journey with AI-powered insights.
                </p>
              </div>
              
              <div>
                <h4 className="font-inter font-medium text-secondary-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-secondary-foreground/80">
                  <li><a href="/product-features" className="hover:text-accent transition-colors">Features</a></li>
                  <li><a href="/pricing" className="hover:text-accent transition-colors">Pricing</a></li>
                  <li><a href="/how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-inter font-medium text-secondary-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-secondary-foreground/80">
                  <li><a href="/contact-support" className="hover:text-accent transition-colors">Contact</a></li>
                  <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-secondary-foreground/60 font-inter text-sm">
                © {new Date().getFullYear()} Time Machine. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pricing;