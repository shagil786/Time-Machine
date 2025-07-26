import React from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const SupportOptions = () => {
  const supportChannels = [
    {
      id: 'email',
      title: 'Email Support',
      description: 'Get detailed help via email with our support team',
      availability: '24/7 submission, responses within 24-48 hours',
      icon: 'Mail',
      action: 'Send Email',
      contact: 'support@timemachine.com',
      bestFor: 'Complex issues, account problems, detailed questions'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Instant help during business hours',
      availability: 'Monday-Friday, 9 AM - 6 PM EST',
      icon: 'MessageCircle',
      action: 'Start Chat',
      contact: 'Available in app',
      bestFor: 'Quick questions, upload issues, general guidance'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Direct phone assistance for Premium users',
      availability: 'Monday-Friday, 10 AM - 5 PM EST',
      icon: 'Phone',
      action: 'Call Now',
      contact: '+1 (555) 123-4567',
      bestFor: 'Urgent issues, billing problems, technical emergencies'
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Connect with other users and share tips',
      availability: 'Always available',
      icon: 'Users',
      action: 'Visit Forum',
      contact: 'community.timemachine.com',
      bestFor: 'Creative inspiration, best practices, user tips'
    }
  ];

  const handleContactAction = (channel) => {
    switch (channel.id) {
      case 'email':
        window.location.href = `mailto:${channel.contact}`;
        break;
      case 'chat':
        // In a real app, this would open a chat widget
        alert('Live chat would open here during business hours');
        break;
      case 'phone':
        window.location.href = `tel:${channel.contact}`;
        break;
      case 'community':
        // In a real app, this would navigate to the community forum
        alert('Community forum would open here');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Support Channels
        </h2>
        <p className="text-muted-foreground">
          Choose the support option that works best for your needs. Premium users get priority access and faster response times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportChannels.map((channel) => (
          <div key={channel.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={channel.icon} size={24} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-inter font-semibold text-foreground mb-2">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {channel.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {channel.availability}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {channel.contact}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs font-medium text-foreground mb-1">Best for:</p>
                  <p className="text-xs text-muted-foreground">
                    {channel.bestFor}
                  </p>
                </div>
                
                <Button
                  variant={channel.id === 'phone' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleContactAction(channel)}
                  iconName={
                    channel.id === 'email' ? 'Mail' :
                    channel.id === 'chat' ? 'MessageCircle' :
                    channel.id === 'phone'? 'Phone' : 'ExternalLink'
                  }
                  iconPosition="left"
                  fullWidth
                >
                  {channel.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Icon name="Star" size={16} className="text-accent" />
          </div>
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-2">
              Premium Support Benefits
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Priority email responses within 24 hours</li>
              <li>• Dedicated phone support during business hours</li>
              <li>• Access to advanced troubleshooting resources</li>
              <li>• Direct line to our technical specialists</li>
              <li>• Urgent issue escalation (4-hour response)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" iconName="Crown" iconPosition="left">
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportOptions;