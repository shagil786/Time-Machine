import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const CommunitySpaces = () => {
  const [activeTab, setActiveTab] = useState('public');

  const communityFeatures = [
    {
      icon: 'Share',
      title: 'Selective Sharing',
      description: 'Choose exactly what to share and with whom, maintaining complete control'
    },
    {
      icon: 'Users',
      title: 'Family Archives',
      description: 'Collaborate with family members to build comprehensive shared timelines'
    },
    {
      icon: 'BookOpen',
      title: 'Memory Books',
      description: 'Create collaborative memory books for special occasions and milestones'
    },
    {
      icon: 'Shield',
      title: 'Privacy First',
      description: 'Advanced privacy controls ensure your memories remain secure and private'
    }
  ];

  const publicTimelines = [
    {
      id: 1,
      title: 'My Journey Through Photography',
      author: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      description: 'A decade-long exploration of street photography across different cities and cultures.',
      thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      likes: 234,
      views: 1847,
      tags: ['photography', 'travel', 'art'],
      featured: true
    },
    {
      id: 2,
      title: 'From Startup to Success',
      author: 'Michael Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      description: 'The ups and downs of building a tech company from idea to IPO.',
      thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      likes: 189,
      views: 2341,
      tags: ['entrepreneurship', 'business', 'growth'],
      featured: false
    },
    {
      id: 3,
      title: 'Marathon Training Chronicles',
      author: 'Emma Thompson',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      description: 'Six months of training, setbacks, and the ultimate achievement of completing my first marathon.',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      likes: 156,
      views: 987,
      tags: ['fitness', 'running', 'achievement'],
      featured: false
    }
  ];

  const familyProjects = [
    {
      id: 1,
      title: 'The Johnson Family Legacy',
      members: 12,
      contributions: 847,
      lastUpdate: '2024-07-24',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop',
      description: 'Three generations of family memories spanning from 1950 to present day.'
    },
    {
      id: 2,
      title: 'Wedding Planning Journey',
      members: 8,
      contributions: 234,
      lastUpdate: '2024-07-23',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop',
      description: 'Collaborative planning and memories from our dream wedding celebration.'
    },
    {
      id: 3,
      title: 'Baby\'s First Year',
      members: 6,
      contributions: 456,
      lastUpdate: '2024-07-22',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop',
      description: 'Capturing every precious moment of our little one\'s first year.'
    }
  ];

  const memoryBooks = [
    {
      id: 1,
      title: 'College Graduation 2024',
      collaborators: ['Mom', 'Dad', 'Sister', 'Best Friend'],
      pages: 24,
      status: 'in-progress',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop',
      dueDate: '2024-08-15'
    },
    {
      id: 2,
      title: 'Grandpa\'s 80th Birthday',
      collaborators: ['Uncle John', 'Aunt Mary', 'Cousin Lisa'],
      pages: 18,
      status: 'completed',
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop',
      completedDate: '2024-07-10'
    },
    {
      id: 3,
      title: 'Summer Vacation Memories',
      collaborators: ['Travel Buddy', 'Local Guide'],
      pages: 32,
      status: 'in-progress',
      thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop',
      dueDate: '2024-08-30'
    }
  ];

  const renderPublicTimelines = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">Inspiring Public Timelines</h3>
        <p className="text-muted-foreground">
          Discover how others are documenting their journeys and get inspired for your own timeline
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicTimelines.map((timeline) => (
          <div key={timeline.id} className="bg-card rounded-lg shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <Image 
                  src={timeline.thumbnail} 
                  alt={timeline.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {timeline.featured && (
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                {timeline.views.toLocaleString()} views
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image 
                    src={timeline.avatar} 
                    alt={timeline.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{timeline.title}</h4>
                  <p className="text-sm text-muted-foreground">by {timeline.author}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {timeline.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {timeline.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Icon name="Heart" size={14} />
                  <span className="text-sm">{timeline.likes}</span>
                </div>
                <Button variant="ghost" size="sm" iconName="ExternalLink">
                  View Timeline
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFamilyArchives = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">Family Archive Projects</h3>
        <p className="text-muted-foreground">
          Collaborate with family members to build comprehensive shared timelines
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {familyProjects.map((project) => (
          <div key={project.id} className="bg-card rounded-lg shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <Image 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Members</span>
                  <span className="font-medium text-foreground">{project.members}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Contributions</span>
                  <span className="font-medium text-foreground">{project.contributions}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Update</span>
                  <span className="font-medium text-foreground">
                    {new Date(project.lastUpdate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" fullWidth iconName="Users" iconPosition="left">
                Join Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMemoryBooks = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">Collaborative Memory Books</h3>
        <p className="text-muted-foreground">
          Create beautiful memory books together for special occasions and milestones
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memoryBooks.map((book) => (
          <div key={book.id} className="bg-card rounded-lg shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden">
            <div className="aspect-video overflow-hidden relative">
              <Image 
                src={book.thumbnail} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  book.status === 'completed' 
                    ? 'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
                }`}>
                  {book.status === 'completed' ? 'Completed' : 'In Progress'}
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">{book.title}</h4>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pages</span>
                  <span className="font-medium text-foreground">{book.pages}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Collaborators</span>
                  <span className="font-medium text-foreground">{book.collaborators.length}</span>
                </div>
                {book.status === 'completed' ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-medium text-foreground">
                      {new Date(book.completedDate).toLocaleDateString()}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Due Date</span>
                    <span className="font-medium text-foreground">
                      {new Date(book.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Collaborators:</p>
                <div className="flex flex-wrap gap-1">
                  {book.collaborators.slice(0, 3).map((collaborator) => (
                    <span key={collaborator} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full">
                      {collaborator}
                    </span>
                  ))}
                  {book.collaborators.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full">
                      +{book.collaborators.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <Button 
                variant={book.status === 'completed' ? 'outline' : 'default'} 
                size="sm" 
                fullWidth 
                iconName={book.status === 'completed' ? 'Eye' : 'Edit'} 
                iconPosition="left"
              >
                {book.status === 'completed' ? 'View Book' : 'Continue Editing'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'public':
        return renderPublicTimelines();
      case 'family':
        return renderFamilyArchives();
      case 'books':
        return renderMemoryBooks();
      default:
        return renderPublicTimelines();
    }
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Community Spaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with others through shared memories while maintaining complete control over your privacy. Collaborate on family archives and create lasting memory books together.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityFeatures.map((feature) => (
            <div key={feature.title} className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevation transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="Shield" size={14} color="var(--color-primary)" />
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Privacy-First Community</h4>
              <p className="text-sm text-primary/80">
                All community features are completely optional. You maintain full control over what you share, 
                with whom, and can revoke access at any time. Your private memories remain private unless you 
                explicitly choose to share them.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 shadow-card">
            <div className="flex space-x-1">
              <Button
                variant={activeTab === 'public' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('public')}
                iconName="Globe"
                iconPosition="left"
              >
                Public Timelines
              </Button>
              <Button
                variant={activeTab === 'family' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('family')}
                iconName="Users"
                iconPosition="left"
              >
                Family Archives
              </Button>
              <Button
                variant={activeTab === 'books' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('books')}
                iconName="BookOpen"
                iconPosition="left"
              >
                Memory Books
              </Button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {renderActiveTab()}

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Share Your Story?</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of memory keepers and storytellers. Share your journey, 
              collaborate with family, and inspire others with your unique timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" iconName="Share" iconPosition="left">
                Create Public Timeline
              </Button>
              <Button variant="outline" iconName="Users" iconPosition="left">
                Start Family Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpaces;