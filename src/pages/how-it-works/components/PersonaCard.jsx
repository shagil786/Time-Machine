import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const PersonaCard = ({ persona, isExpanded, onToggle }) => {
  const personaData = {
    archivist: {
      title: "The Nostalgic Archivist",
      subtitle: "Sarah, 34, Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      icon: "Archive",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      journey: `Sarah discovered Time Machine while searching for a way to organize 15 years of scattered digital photos across multiple devices and cloud services. She uploaded over 3,000 photos and was amazed when the AI automatically sorted them chronologically and suggested meaningful tags.\n\nNow she spends Sunday evenings adding context to her memories, creating themed collections like "College Adventures" and "Family Holidays." The platform helped her rediscover forgotten moments and share curated timelines with family members.`,
      benefits: [
        "Organized 15 years of scattered photos in one weekend",
        "Rediscovered 200+ forgotten memories through AI suggestions",
        "Created 12 themed collections for different life phases",
        "Shared family timelines with relatives across 3 countries"
      ]
    },
    tracker: {
      title: "The Life Tracker",
      subtitle: "Marcus, 28, Fitness Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      icon: "TrendingUp",
      color: "text-green-600",
      bgColor: "bg-green-50",
      journey: `Marcus uses Time Machine to document his personal development journey and client transformations. He uploads progress photos, workout videos, and achievement milestones regularly, using the insights dashboard to track patterns in his fitness journey.\n\nThe AI analytics revealed his most productive training periods and helped him identify successful strategies. He now shares selective timelines with clients as motivation and uses the platform for accountability with his mentor.`,
      benefits: [
        "Tracked 2 years of fitness progress with visual analytics",
        "Identified peak performance patterns through AI insights",
        "Motivated 50+ clients with transformation timelines",
        "Maintained accountability through mentor sharing"
      ]
    },
    historian: {
      title: "The Family Historian",
      subtitle: "Elena, 52, Retired Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      icon: "Users",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      journey: `Elena became the family's memory keeper after inheriting boxes of old photos and documents. She digitized family archives spanning four generations and invited 15 family members to contribute their own memories to collaborative timelines.\n\nThe platform helped her organize family reunions, create memorial collections for departed relatives, and produce printed memory books for special occasions. Her grandchildren now actively contribute to the family timeline.`,
      benefits: [
        "Digitized and organized 4 generations of family history",
        "Coordinated contributions from 15 family members",
        "Created memorial timelines for 3 departed relatives",
        "Produced 8 printed memory books for family events"
      ]
    },
    storyteller: {
      title: "The Creative Storyteller",
      subtitle: "David, 31, Freelance Writer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      icon: "PenTool",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      journey: `David approaches Time Machine as a narrative tool for his creative projects. He carefully curates uploads with rich descriptions and uses different visualization modes to craft compelling stories about his travels, creative process, and personal growth.\n\nHis polished timelines serve as portfolio pieces and inspiration for his writing. He's experimented with collaborative storytelling projects and uses the platform to document his creative journey for potential book projects.`,
      benefits: [
        "Created 25+ narrative timelines as portfolio pieces",
        "Documented creative process for 3 book projects",
        "Collaborated on 5 storytelling projects with other artists",
        "Generated 10,000+ words of reflective content"
      ]
    }
  };

  const data = personaData[persona];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image 
              src={data.avatar} 
              alt={data.title}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg ${data.bgColor}`}>
                <Icon name={data.icon} size={20} className={data.color} />
              </div>
              <div>
                <h3 className="text-lg font-crimson font-semibold text-foreground">
                  {data.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-muted-foreground"
            />
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border">
          <div className="pt-6 space-y-6">
            <div>
              <h4 className="font-inter font-medium text-foreground mb-3">User Journey</h4>
              <p className="text-muted-foreground font-inter leading-relaxed whitespace-pre-line">
                {data.journey}
              </p>
            </div>
            
            <div>
              <h4 className="font-inter font-medium text-foreground mb-3">Key Benefits</h4>
              <div className="space-y-2">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-inter">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonaCard;