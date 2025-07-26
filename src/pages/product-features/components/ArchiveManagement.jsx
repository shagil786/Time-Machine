import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import { Checkbox } from 'components/ui/Checkbox';

const ArchiveManagement = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');

  const managementTools = [
    {
      icon: 'Edit',
      title: 'Bulk Editing',
      description: 'Edit metadata, tags, and descriptions for multiple items simultaneously'
    },
    {
      icon: 'Copy',
      title: 'Duplicate Detection',
      description: 'Automatically identify and merge duplicate photos and videos'
    },
    {
      icon: 'Shield',
      title: 'Privacy Controls',
      description: 'Granular privacy settings for individual memories and collections'
    },
    {
      icon: 'Download',
      title: 'Export Options',
      description: 'Export your timeline in multiple formats including PDF, JSON, and ZIP'
    }
  ];

  const sampleItems = [
    {
      id: 1,
      name: 'Summer_Vacation_2024.jpg',
      type: 'image',
      size: '2.4 MB',
      date: '2024-07-15',
      tags: ['travel', 'family', 'vacation'],
      privacy: 'private',
      thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Graduation_Speech.mp4',
      type: 'video',
      size: '45.2 MB',
      date: '2024-06-20',
      tags: ['milestone', 'education'],
      privacy: 'shared',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Marathon_Finish.jpg',
      type: 'image',
      size: '1.8 MB',
      date: '2024-05-10',
      tags: ['fitness', 'achievement'],
      privacy: 'public',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'New_Job_Celebration.jpg',
      type: 'image',
      size: '3.1 MB',
      date: '2024-04-02',
      tags: ['career', 'milestone'],
      privacy: 'private',
      thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Weekend_Hike.jpg',
      type: 'image',
      size: '2.7 MB',
      date: '2024-03-18',
      tags: ['nature', 'fitness'],
      privacy: 'private',
      thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'Birthday_Party.mp4',
      type: 'video',
      size: '67.8 MB',
      date: '2024-02-14',
      tags: ['celebration', 'family'],
      privacy: 'shared',
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop'
    }
  ];

  const duplicates = [
    {
      id: 1,
      name: 'IMG_2024_001.jpg',
      count: 3,
      sizes: ['2.4 MB', '2.4 MB', '1.8 MB'],
      thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Video_20240620.mp4',
      count: 2,
      sizes: ['45.2 MB', '45.2 MB'],
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop'
    }
  ];

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    setSelectedItems(
      selectedItems.length === sampleItems.length 
        ? [] 
        : sampleItems.map(item => item.id)
    );
  };

  const getPrivacyIcon = (privacy) => {
    switch (privacy) {
      case 'public':
        return <Icon name="Globe" size={14} color="var(--color-success)" />;
      case 'shared':
        return <Icon name="Users" size={14} color="var(--color-warning)" />;
      case 'private':
        return <Icon name="Lock" size={14} color="var(--color-muted-foreground)" />;
      default:
        return <Icon name="Lock" size={14} />;
    }
  };

  const getTypeIcon = (type) => {
    return type === 'video' ? 'Video' : 'Image';
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Advanced Archive Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take complete control of your digital memories with powerful organization tools, privacy controls, and intelligent automation features designed for serious archivists.
          </p>
        </div>

        {/* Management Tools */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {managementTools.map((tool) => (
            <div key={tool.title} className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevation transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={tool.icon} size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Archive View */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              {/* Archive Header */}
              <div className="border-b border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      checked={selectedItems.length === sampleItems.length}
                      onChange={handleSelectAll}
                      label={`${selectedItems.length} of ${sampleItems.length} selected`}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      iconName="Grid3X3"
                      onClick={() => setViewMode('grid')}
                    />
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      iconName="List"
                      onClick={() => setViewMode('list')}
                    />
                  </div>
                </div>

                {selectedItems.length > 0 && (
                  <div className="flex items-center space-x-2 p-3 bg-primary/10 rounded-lg">
                    <Icon name="Info" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-primary font-medium">
                      {selectedItems.length} items selected
                    </span>
                    <div className="flex items-center space-x-2 ml-auto">
                      <Button variant="ghost" size="sm" iconName="Edit">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Tag">
                        Tag
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Download">
                        Export
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Archive Content */}
              <div className="p-6">
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {sampleItems.map((item) => (
                      <div key={item.id} className="group relative">
                        <div className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer">
                          <img 
                            src={item.thumbnail} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Checkbox
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelectItem(item.id)}
                              />
                            </div>
                            
                            <div className="absolute top-2 right-2 flex space-x-1">
                              <div className="bg-black/50 rounded-full p-1">
                                <Icon name={getTypeIcon(item.type)} size={14} color="white" />
                              </div>
                              <div className="bg-black/50 rounded-full p-1">
                                {getPrivacyIcon(item.privacy)}
                              </div>
                            </div>
                            
                            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-xs font-medium truncate">{item.name}</p>
                              <p className="text-white/80 text-xs">{item.size}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {sampleItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                        
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.thumbnail} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                            <div className="flex items-center space-x-2">
                              {getPrivacyIcon(item.privacy)}
                              <Icon name={getTypeIcon(item.type)} size={14} color="var(--color-muted-foreground)" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{item.size}</span>
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 bg-muted text-xs text-muted-foreground rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Tools */}
          <div className="space-y-6">
            {/* Duplicate Detection */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Duplicate Detection</h3>
                <Button variant="ghost" size="sm" iconName="Scan">
                  Scan
                </Button>
              </div>
              
              <div className="space-y-3">
                {duplicates.map((duplicate) => (
                  <div key={duplicate.id} className="flex items-center space-x-3 p-3 bg-warning/10 rounded-lg">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={duplicate.thumbnail} 
                        alt={duplicate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm truncate">{duplicate.name}</h4>
                      <p className="text-xs text-warning">{duplicate.count} duplicates found</p>
                    </div>
                    
                    <Button variant="ghost" size="sm" iconName="Merge">
                      Merge
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" fullWidth iconName="Search">
                  Find More Duplicates
                </Button>
              </div>
            </div>

            {/* Privacy Overview */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Privacy Overview</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Lock" size={16} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">Private</span>
                  </div>
                  <span className="font-medium text-foreground">847</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} color="var(--color-warning)" />
                    <span className="text-sm text-muted-foreground">Shared</span>
                  </div>
                  <span className="font-medium text-foreground">234</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Globe" size={16} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground">Public</span>
                  </div>
                  <span className="font-medium text-foreground">89</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" fullWidth iconName="Shield">
                  Privacy Settings
                </Button>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Export & Backup</h3>
              
              <div className="space-y-3">
                <Button variant="outline" size="sm" fullWidth iconName="Download" iconPosition="left">
                  Export Timeline (PDF)
                </Button>
                <Button variant="outline" size="sm" fullWidth iconName="Database" iconPosition="left">
                  Export Data (JSON)
                </Button>
                <Button variant="outline" size="sm" fullWidth iconName="Archive" iconPosition="left">
                  Download All (ZIP)
                </Button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border text-center">
                <p className="text-xs text-muted-foreground mb-2">Last backup</p>
                <p className="text-sm font-medium text-foreground">July 25, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveManagement;