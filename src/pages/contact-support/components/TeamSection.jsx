import React from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Head of Customer Success',
      bio: 'Former Google Photos product manager with 8 years in digital archiving. Passionate about helping families preserve their most precious memories.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      expertise: ['Account Management', 'Product Training', 'Family Archives'],
      email: 'sarah@timemachine.com'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Technical Support Lead',
      bio: 'Full-stack developer turned support specialist. Expert in troubleshooting upload issues and helping users maximize their Time Machine experience.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      expertise: ['Technical Issues', 'API Integration', 'Data Migration'],
      email: 'marcus@timemachine.com'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Privacy & Security Specialist',
      bio: 'Cybersecurity expert with CISSP certification. Ensures your memories stay safe and helps with privacy settings and data protection questions.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      expertise: ['Data Privacy', 'Security Settings', 'GDPR Compliance'],
      email: 'emily@timemachine.com'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Community Manager',
      bio: 'Digital storytelling enthusiast who helps users discover creative ways to organize and share their timelines. Manages our user community and forums.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      expertise: ['Creative Tips', 'Community Support', 'Best Practices'],
      email: 'david@timemachine.com'
    }
  ];

  const handleEmailContact = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Meet Our Support Team
        </h2>
        <p className="text-muted-foreground">
          Real people who care about your Time Machine experience. Our team combines technical expertise with genuine passion for helping you preserve your memories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="relative">
                <Image
                  src={member.avatar}
                  alt={`${member.name} - ${member.role}`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-border"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-inter font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {member.role}
              </p>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="mb-4">
                <p className="text-xs font-medium text-foreground mb-2">Specializes in:</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => handleEmailContact(member.email)}
                className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <Icon name="Mail" size={16} />
                <span>Contact {member.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="text-center">
          <h3 className="text-lg font-inter font-semibold text-foreground mb-2">
            Our Support Philosophy
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe every memory matters and every user deserves thoughtful, human support. Our team is here to ensure your Time Machine experience is seamless, secure, and meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Heart" size={24} className="text-primary" />
            </div>
            <h4 className="font-inter font-medium text-foreground mb-2">Human-First</h4>
            <p className="text-sm text-muted-foreground">
              Real people, not bots. We understand that your memories are personal and precious.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} className="text-primary" />
            </div>
            <h4 className="font-inter font-medium text-foreground mb-2">Fast Response</h4>
            <p className="text-sm text-muted-foreground">
              Quick acknowledgment, thorough solutions. We respect your time and urgency.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} className="text-primary" />
            </div>
            <h4 className="font-inter font-medium text-foreground mb-2">Privacy Focused</h4>
            <p className="text-sm text-muted-foreground">
              Your data stays yours. We never access your content without explicit permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;