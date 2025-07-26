import React from 'react';
import Icon from 'components/AppIcon';

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: "Shield",
      title: "30-Day Money-Back Guarantee",
      description: "Not satisfied? Get a full refund within 30 days, no questions asked."
    },
    {
      icon: "Lock",
      title: "Secure Payment Processing",
      description: "Your payment information is encrypted and processed securely through Stripe."
    },
    {
      icon: "Download",
      title: "Data Export Guarantee",
      description: "Your memories are yours forever. Export all your data anytime in multiple formats."
    },
    {
      icon: "Users",
      title: "Privacy First",
      description: "You own your data. We never sell your information or use it for advertising."
    },
    {
      icon: "Clock",
      title: "Cancel Anytime",
      description: "No long-term commitments. Cancel your subscription anytime with one click."
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you preserve your precious memories."
    }
  ];

  return (
    <div className="bg-muted/30 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Your Trust, Our Priority
        </h3>
        <p className="text-muted-foreground font-inter">
          We're committed to protecting your memories and your investment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon 
                name={feature.icon} 
                size={20} 
                className="text-primary" 
              />
            </div>
            <div>
              <h4 className="font-inter font-medium text-foreground text-sm mb-1">
                {feature.title}
              </h4>
              <p className="text-muted-foreground font-inter text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSignals;