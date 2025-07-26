import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const StepCard = ({ step, title, description, image, isActive, onClick }) => {
  return (
    <div 
      className={`relative bg-card border border-border rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg ${
        isActive ? 'ring-2 ring-primary shadow-lg' : 'hover:border-accent'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          {step}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-crimson font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground font-inter leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="mt-6 rounded-lg overflow-hidden bg-muted">
        <Image 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="absolute top-4 right-4">
        <Icon 
          name={isActive ? "ChevronDown" : "ChevronRight"} 
          size={20} 
          className="text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default StepCard;