import React from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete walkthrough for new users, from account setup to your first timeline',
      type: 'Guide',
      duration: '10 min read',
      icon: 'BookOpen',
      popular: true,
      topics: ['Account Setup', 'First Upload', 'Timeline Basics', 'Privacy Settings']
    },
    {
      id: 2,
      title: 'Upload Troubleshooting',
      description: 'Step-by-step solutions for common upload issues and error messages',
      type: 'Troubleshooting',
      duration: '5 min read',
      icon: 'AlertCircle',
      popular: true,
      topics: ['File Formats', 'Size Limits', 'Connection Issues', 'Error Codes']
    },
    {
      id: 3,
      title: 'Privacy & Sharing Controls',
      description: 'Master your privacy settings and learn how to safely share your memories',
      type: 'Tutorial',
      duration: '8 min read',
      icon: 'Shield',
      popular: false,
      topics: ['Privacy Levels', 'Family Sharing', 'Public Timelines', 'Data Export']
    },
    {
      id: 4,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides for all major Time Machine features',
      type: 'Video Series',
      duration: '25 videos',
      icon: 'Play',
      popular: true,
      topics: ['Visual Learning', 'Feature Demos', 'Tips & Tricks', 'Advanced Features']
    },
    {
      id: 5,
      title: 'Mobile App Guide',
      description: 'Get the most out of Time Machine on your phone and tablet',
      type: 'Mobile Guide',
      duration: '6 min read',
      icon: 'Smartphone',
      popular: false,
      topics: ['App Installation', 'Mobile Upload', 'Offline Viewing', 'Notifications']
    },
    {
      id: 6,
      title: 'Data Migration Tools',
      description: 'Import your existing photos and memories from other platforms',
      type: 'Technical Guide',
      duration: '12 min read',
      icon: 'Download',
      popular: false,
      topics: ['Google Photos', 'iCloud Import', 'Social Media', 'Bulk Operations']
    }
  ];

  const quickLinks = [
    { name: 'System Status', icon: 'Activity', url: '#' },
    { name: 'API Documentation', icon: 'Code', url: '#' },
    { name: 'Security Updates', icon: 'Shield', url: '#' },
    { name: 'Feature Requests', icon: 'Lightbulb', url: '#' },
    { name: 'Community Guidelines', icon: 'Users', url: '#' },
    { name: 'Terms of Service', icon: 'FileText', url: '#' }
  ];

  const handleResourceClick = (resource) => {
    // In a real app, this would navigate to the resource
    alert(`Opening: ${resource.title}`);
  };

  const handleQuickLinkClick = (link) => {
    // In a real app, this would navigate to the appropriate page
    alert(`Opening: ${link.name}`);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Help Resources
        </h2>
        <p className="text-muted-foreground">
          Self-service resources to help you get the most out of Time Machine. From quick tutorials to comprehensive guides.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {resources.map((resource) => (
          <div key={resource.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={resource.icon} size={24} className="text-accent" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-inter font-semibold text-foreground">
                    {resource.title}
                  </h3>
                  {resource.popular && (
                    <span className="px-2 py-1 bg-success/10 text-xs font-medium text-success rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Tag" size={14} />
                    <span>{resource.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{resource.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {resource.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleResourceClick(resource)}
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Resource
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8">
        <h3 className="text-lg font-inter font-semibold text-foreground mb-4">
          Quick Links
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleQuickLinkClick(link)}
              className="flex flex-col items-center space-y-2 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name={link.icon} size={16} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Icon name="Lightbulb" size={16} className="text-primary" />
          </div>
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-2">
              Can't Find What You Need?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Our help resources are constantly updated based on user feedback. If you can't find the answer you're looking for, let us know and we'll create new content to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                Suggest New Content
              </Button>
              <Button variant="ghost" size="sm" iconName="Mail" iconPosition="left">
                Request Personal Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;