import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const TechnicalSpecs = () => {
  const [activeSpec, setActiveSpec] = useState('performance');

  const specifications = [
    {
      id: 'performance',
      title: 'Performance & Scale',
      icon: 'Zap',
      specs: [
        { label: 'Upload Speed', value: 'Up to 100MB/s', description: 'Parallel processing for faster uploads' },
        { label: 'Storage Capacity', value: 'Unlimited', description: 'Cloud-based storage with automatic scaling' },
        { label: 'Timeline Loading', value: '<200ms', description: 'Optimized rendering for smooth navigation' },
        { label: 'Concurrent Users', value: '10,000+', description: 'Scalable infrastructure for growing communities' },
        { label: 'Media Processing', value: 'Real-time', description: 'Instant thumbnail generation and metadata extraction' },
        { label: 'Search Response', value: '<50ms', description: 'Elasticsearch-powered instant search results' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: 'Shield',
      specs: [
        { label: 'Encryption', value: 'AES-256', description: 'End-to-end encryption for all data' },
        { label: 'Authentication', value: 'Multi-factor', description: 'Secure login with 2FA support' },
        { label: 'Data Centers', value: 'SOC 2 Certified', description: 'Enterprise-grade security compliance' },
        { label: 'Privacy Controls', value: 'Granular', description: 'Individual privacy settings for each memory' },
        { label: 'Data Retention', value: 'User Controlled', description: 'Complete control over data lifecycle' },
        { label: 'Compliance', value: 'GDPR, CCPA', description: 'Full compliance with privacy regulations' }
      ]
    },
    {
      id: 'compatibility',
      title: 'Platform Support',
      icon: 'Smartphone',
      specs: [
        { label: 'Web Browsers', value: 'All Modern', description: 'Chrome, Firefox, Safari, Edge support' },
        { label: 'Mobile Apps', value: 'iOS & Android', description: 'Native apps with full feature parity' },
        { label: 'File Formats', value: '50+ Types', description: 'Support for all major photo and video formats' },
        { label: 'Import Sources', value: '20+ Platforms', description: 'Direct import from social media and cloud storage' },
        { label: 'Export Formats', value: 'Multiple', description: 'PDF, JSON, ZIP, and custom formats' },
        { label: 'API Access', value: 'RESTful', description: 'Full API for custom integrations' }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Intelligence',
      icon: 'Brain',
      specs: [
        { label: 'Image Recognition', value: '99.5% Accuracy', description: 'Advanced computer vision for auto-tagging' },
        { label: 'Face Detection', value: 'Real-time', description: 'Automatic face recognition and grouping' },
        { label: 'Content Analysis', value: 'Deep Learning', description: 'Intelligent content categorization' },
        { label: 'Duplicate Detection', value: 'Pixel-perfect', description: 'Advanced algorithms for finding duplicates' },
        { label: 'Mood Analysis', value: 'Sentiment AI', description: 'Emotional context from text and images' },
        { label: 'Pattern Recognition', value: 'Behavioral', description: 'Discover personal patterns and trends' }
      ]
    }
  ];

  const integrations = [
    { name: 'Google Photos', icon: 'Image', status: 'active' },
    { name: 'iCloud Photos', icon: 'Cloud', status: 'active' },
    { name: 'Instagram', icon: 'Instagram', status: 'active' },
    { name: 'Facebook', icon: 'Facebook', status: 'active' },
    { name: 'Dropbox', icon: 'HardDrive', status: 'active' },
    { name: 'OneDrive', icon: 'Cloud', status: 'active' },
    { name: 'Flickr', icon: 'Camera', status: 'beta' },
    { name: 'Amazon Photos', icon: 'Package', status: 'coming-soon' }
  ];

  const systemRequirements = {
    web: [
      'Chrome 90+, Firefox 88+, Safari 14+, Edge 90+',
      'Minimum 4GB RAM recommended',
      'Stable internet connection (10 Mbps+)',
      'JavaScript enabled',
      'Local storage support'
    ],
    mobile: [
      'iOS 14.0+ or Android 8.0+',
      'Minimum 2GB RAM',
      'Camera and photo library access',
      'Push notification support',
      'Background app refresh enabled'
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-success';
      case 'beta':
        return 'text-warning';
      case 'coming-soon':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'beta':
        return 'Beta';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built on enterprise-grade infrastructure with cutting-edge technology to ensure your memories are safe, accessible, and beautifully presented across all devices.
          </p>
        </div>

        {/* Specification Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {specifications.map((spec) => (
            <Button
              key={spec.id}
              variant={activeSpec === spec.id ? 'default' : 'outline'}
              onClick={() => setActiveSpec(spec.id)}
              iconName={spec.icon}
              iconPosition="left"
              className="transition-all duration-300"
            >
              {spec.title}
            </Button>
          ))}
        </div>

        {/* Active Specification */}
        <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {specifications.find(s => s.id === activeSpec)?.title}
            </h3>
            <p className="text-muted-foreground">
              Detailed technical specifications and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.find(s => s.id === activeSpec)?.specs.map((spec) => (
              <div key={spec.label} className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground">{spec.label}</h4>
                  <span className="text-sm font-semibold text-primary">{spec.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Platform Integrations */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Platform Integrations</h3>
              <Button variant="ghost" size="sm" iconName="Plus" iconPosition="left">
                Request Integration
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={integration.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <span className="font-medium text-foreground">{integration.name}</span>
                  </div>
                  <span className={`text-xs font-medium ${getStatusColor(integration.status)}`}>
                    {getStatusText(integration.status)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                More integrations added regularly based on user requests
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">System Requirements</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Monitor" size={20} color="var(--color-primary)" />
                  <h4 className="font-medium text-foreground">Web Platform</h4>
                </div>
                <ul className="space-y-2">
                  {systemRequirements.web.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Smartphone" size={20} color="var(--color-primary)" />
                  <h4 className="font-medium text-foreground">Mobile Apps</h4>
                </div>
                <ul className="space-y-2">
                  {systemRequirements.mobile.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Need help with setup?</span>
                <Button variant="ghost" size="sm" iconName="HelpCircle" iconPosition="left">
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 bg-muted/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Performance Metrics</h3>
            <p className="text-muted-foreground">
              Real-world performance data from our global infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">Global Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50TB+</div>
              <div className="text-sm text-muted-foreground">Data Processed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have technical questions or need custom enterprise features?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" iconName="FileText" iconPosition="left">
              View API Documentation
            </Button>
            <Button variant="default" iconName="MessageCircle" iconPosition="left">
              Contact Technical Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;