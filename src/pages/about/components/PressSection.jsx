import React from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';

const PressSection = () => {
  const pressFeatures = [
    {
      id: 1,
      publication: "TechCrunch",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      headline: "Time Machine Transforms Digital Memory Chaos Into Meaningful Life Stories",
      excerpt: "This innovative platform addresses a universal problem: our digital memories are scattered, disorganized, and emotionally disconnected from our actual life experiences.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Startup Spotlight"
    },
    {
      id: 2,
      publication: "Wired",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop",
      headline: "The Privacy-First Approach to Personal Digital Archiving",
      excerpt: "Time Machine\'s commitment to user privacy and data ownership sets a new standard for how personal technology platforms should operate.",
      author: "Michael Chen",
      date: "April 8, 2024",
      category: "Privacy & Security"
    },
    {
      id: 3,
      publication: "Fast Company",
      logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=100&fit=crop",
      headline: "How AI is Helping People Rediscover Their Own Life Stories",
      excerpt: "The platform\'s intelligent organization features help users find patterns and meaning in their personal digital archives.",
      author: "Emily Rodriguez",
      date: "May 22, 2024",
      category: "Innovation"
    },
    {
      id: 4,
      publication: "The Verge",
      logo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=200&h=100&fit=crop",
      headline: "Beyond Social Media: The Rise of Private Digital Storytelling",
      excerpt: "Time Machine represents a shift toward more intentional, private ways of documenting and reflecting on our lives.",
      author: "David Park",
      date: "June 10, 2024",
      category: "Digital Culture"
    }
  ];

  const awards = [
    {
      title: "Best Privacy Innovation",
      organization: "Digital Rights Foundation",
      year: "2024",
      icon: "Shield"
    },
    {
      title: "Top Productivity App",
      organization: "Product Hunt",
      year: "2024",
      icon: "Award"
    },
    {
      title: "Excellence in UX Design",
      organization: "UX Design Awards",
      year: "2024",
      icon: "Palette"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Newspaper" size={16} />
            <span>Press & Recognition</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            Industry Recognition
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Time Machine has been featured in leading technology, privacy, and wellness publications for our innovative approach to personal digital archiving.
          </p>
        </div>

        {/* Press Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pressFeatures.map((feature) => (
            <article key={feature.id} className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-8 bg-muted rounded overflow-hidden">
                  <Image
                    src={feature.logo}
                    alt={`${feature.publication} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    {feature.publication}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.category}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-crimson font-semibold text-foreground mb-3 leading-tight">
                {feature.headline}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>By {feature.author}</span>
                <span>{feature.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
              Awards & Recognition
            </h3>
            <p className="text-muted-foreground">
              Honored by industry leaders for innovation, privacy, and user experience
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={award.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-inter font-semibold text-foreground mb-2">
                  {award.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {award.organization}
                </p>
                <p className="text-xs text-primary font-medium">
                  {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-crimson text-foreground italic mb-6 max-w-4xl mx-auto leading-relaxed">
            "Time Machine isn't just another photo app—it's a thoughtful platform that helps people understand their own stories. The privacy-first approach and intelligent organization make it a standout in the crowded digital wellness space."
          </blockquote>
          <cite className="text-muted-foreground">
            — Alex Thompson, Senior Editor at Digital Trends
          </cite>
        </div>
      </div>
    </section>
  );
};

export default PressSection;