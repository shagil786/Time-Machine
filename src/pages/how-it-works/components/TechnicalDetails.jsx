import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const TechnicalDetails = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy & Security', icon: 'Shield' },
    { id: 'reliability', label: 'Platform Reliability', icon: 'Server' },
    { id: 'performance', label: 'Performance', icon: 'Zap' }
  ];

  const content = {
    privacy: {
      title: "Your Memories, Your Control",
      items: [
        {
          icon: "Lock",
          title: "End-to-End Encryption",
          description: "All uploads are encrypted before leaving your device and remain encrypted in our secure cloud storage."
        },
        {
          icon: "Eye",
          title: "Privacy by Design",
          description: "Your memories are private by default. You control exactly what to share and with whom."
        },
        {
          icon: "Shield",
          title: "GDPR Compliant",
          description: "Full compliance with international privacy regulations. Request your data or delete your account anytime."
        },
        {
          icon: "UserX",
          title: "No Data Mining",
          description: "We never sell your data or use your memories for advertising. Your personal moments stay personal."
        }
      ]
    },
    reliability: {
      title: "Built to Last, Designed to Scale",
      items: [
        {
          icon: "Cloud",
          title: "99.9% Uptime Guarantee",
          description: "Enterprise-grade infrastructure with automatic failover and redundancy across multiple data centers."
        },
        {
          icon: "HardDrive",
          title: "Triple Backup System",
          description: "Your memories are stored in three separate locations with real-time synchronization and integrity checks."
        },
        {
          icon: "Download",
          title: "Full Data Export",
          description: "Download all your memories and metadata in standard formats anytime. No vendor lock-in."
        },
        {
          icon: "Clock",
          title: "Legacy Planning",
          description: "Designate trusted contacts to access your timeline and ensure your memories live on."
        }
      ]
    },
    performance: {
      title: "Lightning Fast, Globally Accessible",
      items: [
        {
          icon: "Zap",
          title: "Instant Upload Processing",
          description: "Advanced compression and parallel processing mean your photos are ready to view in seconds."
        },
        {
          icon: "Globe",
          title: "Global CDN Network",
          description: "Your memories load quickly anywhere in the world through our distributed content delivery network."
        },
        {
          icon: "Smartphone",
          title: "Optimized for All Devices",
          description: "Seamless experience across desktop, tablet, and mobile with offline viewing capabilities."
        },
        {
          icon: "Cpu",
          title: "AI-Powered Efficiency",
          description: "Smart caching and predictive loading ensure smooth timeline navigation even with thousands of memories."
        }
      ]
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="border-b border-border">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-inter font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name={tab.icon} size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-crimson font-semibold text-foreground mb-2">
            {content[activeTab].title}
          </h3>
          <p className="text-muted-foreground font-inter">
            Technical details that matter to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content[activeTab].items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon name={item.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-inter font-medium text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;