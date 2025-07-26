import React, { useState } from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Family Historian",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Time Machine helped me organize 15 years of family photos scattered across multiple devices. The AI automatically sorted everything chronologically and I discovered photos I thought were lost forever. Now my kids can see their entire childhood story in one beautiful timeline.`,
      highlight: "Rediscovered lost family memories",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Creative Professional",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `As a photographer, I document everything but never had time to organize it meaningfully. Time Machine's pattern recognition showed me how my artistic style evolved over the years. It's like having a personal curator for my life's work.`,
      highlight: "Discovered artistic growth patterns",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Personal Development Coach",
      location: "Denver, CO",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `I use Time Machine to track my personal growth journey. The insights dashboard shows patterns I never noticed—like how my mood correlates with certain activities. It's become an essential tool for self-reflection and coaching my clients.`,
      highlight: "Enhanced self-awareness and coaching",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Busy Parent",
      location: "Chicago, IL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Between work and kids, I barely had time to look at photos, let alone organize them. Time Machine does the heavy lifting automatically. Now I can quickly find and share memories with family, and the privacy controls give me peace of mind.`,
      highlight: "Effortless organization for busy life",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Digital Wellness Advocate",
      location: "Portland, OR",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: `After years of social media fatigue, Time Machine feels like a breath of fresh air. It's private, meaningful, and helps me focus on genuine memories rather than performative posts. The platform respects my data and my time.`,
      highlight: "Meaningful alternative to social media",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>User Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            Real Stories, Real Impact
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from users who have transformed their digital memories into meaningful life narratives with Time Machine.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-crimson">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-inter font-semibold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-0">
                    <span className="inline-flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-inter">
                      <Icon name="CheckCircle" size={14} />
                      <span>{testimonials[activeTestimonial].highlight}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-card/50 rounded-2xl p-6 border border-border">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={14} className="text-accent fill-current" />
              ))}
            </div>
          </div>
          
          <div className="bg-card/50 rounded-2xl p-6 border border-border">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">User Satisfaction</div>
            <div className="text-xs text-success mt-2">Based on 10,000+ reviews</div>
          </div>
          
          <div className="bg-card/50 rounded-2xl p-6 border border-border">
            <div className="text-3xl font-crimson font-semibold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Daily Active Users</div>
            <div className="text-xs text-accent mt-2">Highly engaged community</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;