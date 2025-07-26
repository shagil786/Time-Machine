import React from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const PricingCard = ({ plan, isPopular = false, onSelectPlan }) => {
  const {
    name,
    price,
    period,
    originalPrice,
    description,
    features,
    buttonText,
    buttonVariant = 'default'
  } = plan;

  return (
    <div className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? 'border-primary shadow-md scale-105' 
        : 'border-border hover:border-primary/30'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-inter font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground font-inter text-sm mb-6">
          {description}
        </p>
        
        <div className="mb-4">
          {originalPrice && (
            <div className="text-muted-foreground line-through text-lg mb-1">
              ${originalPrice}
            </div>
          )}
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-crimson font-semibold text-foreground">
              ${price}
            </span>
            <span className="text-muted-foreground font-inter ml-2">
              /{period}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon 
              name="Check" 
              size={20} 
              className="text-success mt-0.5 flex-shrink-0" 
            />
            <span className="text-foreground font-inter text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        variant={buttonVariant}
        size="lg"
        fullWidth
        onClick={() => onSelectPlan(plan)}
        className={isPopular ? 'bg-primary hover:bg-primary/90' : ''}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;