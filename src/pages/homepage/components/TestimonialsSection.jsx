import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Creative Director",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Time Machine helped me rediscover photos from my college years that I thought were lost forever. Seeing the patterns in my creative journey has been incredibly inspiring for my current work.`,
      highlight: "Rediscovered lost memories",
      rating: 5,
      timelineYears: 8,
      memoriesFound: 1247
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Family Historian",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Creating a collaborative timeline for our family reunions has brought us closer together. My grandmother loves seeing her stories connected to our modern memories.`,
      highlight: "Strengthened family bonds",
      rating: 5,
      timelineYears: 15,
      memoriesFound: 2891
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Life Coach",
      location: "Portland, OR",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `The AI insights showed me patterns I never noticed - like how my mood improved after starting yoga. It's become an essential tool for my personal development journey.`,
      highlight: "Discovered personal patterns",
      rating: 5,
      timelineYears: 6,
      memoriesFound: 892
    },
    {
      id: 4,
      name: "David Park",
      role: "Travel Blogger",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `As someone who travels constantly, Time Machine helps me see the bigger picture of my adventures. The location-based insights have even helped me plan better trips.`,
      highlight: "Enhanced travel planning",
      rating: 5,
      timelineYears: 10,
      memoriesFound: 3456
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-4">
            Stories of <span className="text-primary">Rediscovery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people sharing how Time Machine transformed their relationship with their memories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Featured Testimonial */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Quote" size={16} className="text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Icon key={index} name="Star" size={16} className="text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
                <Icon name="Heart" size={16} className="text-success" />
                <span className="text-sm font-inter font-medium text-success">
                  {currentTestimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
                </div>
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.location}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="text-lg font-inter font-bold text-primary">
                    {currentTestimonial.timelineYears}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Documented
                  </div>
                </div>
                <div>
                  <div className="text-lg font-inter font-bold text-primary">
                    {currentTestimonial.memoriesFound.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Memories Organized
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Testimonial Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`text-left p-6 rounded-xl transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-card border-2 border-primary shadow-lg scale-105'
                      : 'bg-card/50 border border-border hover:bg-card hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-inter font-medium text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Icon key={starIndex} name="Star" size={12} className="text-accent fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.memoriesFound.toLocaleString()} memories
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-primary w-6' :'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-inter font-medium text-foreground">
              Join 50,000+ users preserving their stories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;