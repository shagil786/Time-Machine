import React from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, avatar, content, rating, plan } = testimonial;

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={16}
            className={index < rating ? 'text-accent fill-current' : 'text-muted-foreground'}
          />
        ))}
      </div>

      <blockquote className="text-foreground font-inter text-sm leading-relaxed mb-6">
        "{content}"
      </blockquote>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
            <Image
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-inter font-medium text-foreground text-sm">
              {name}
            </div>
            <div className="font-inter text-xs text-muted-foreground">
              {role}
            </div>
          </div>
        </div>
        
        <div className="text-xs font-inter text-primary bg-primary/10 px-2 py-1 rounded-full">
          {plan} User
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;