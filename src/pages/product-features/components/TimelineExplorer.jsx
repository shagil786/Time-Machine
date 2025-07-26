import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const TimelineExplorer = () => {
  const [activeView, setActiveView] = useState('horizontal');
  const [selectedYear, setSelectedYear] = useState(2024);

  const viewModes = [
    { id: 'horizontal', name: 'Horizontal Scroll', icon: 'ArrowRight' },
    { id: 'vertical', name: 'Vertical Feed', icon: 'ArrowDown' },
    { id: 'calendar', name: 'Calendar Grid', icon: 'Calendar' },
    { id: 'decade', name: 'Decade Overview', icon: 'Clock' }
  ];

  const sampleMemories = [
    {
      id: 1,
      date: '2024-07-15',
      title: 'Summer Vacation in Bali',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
      tags: ['travel', 'vacation', 'family']
    },
    {
      id: 2,
      date: '2024-06-20',
      title: 'Graduation Day',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      tags: ['milestone', 'education', 'achievement']
    },
    {
      id: 3,
      date: '2024-05-10',
      title: 'First Marathon',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tags: ['fitness', 'achievement', 'personal']
    },
    {
      id: 4,
      date: '2024-04-02',
      title: 'New Job Celebration',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      tags: ['career', 'milestone', 'celebration']
    }
  ];

  const renderHorizontalView = () => (
    <div className="relative">
      <div className="flex items-center space-x-6 overflow-x-auto pb-4">
        <div className="flex-shrink-0 w-1 h-32 bg-primary rounded-full"></div>
        {sampleMemories.map((memory, index) => (
          <div key={memory.id} className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              <div className="w-48 h-32 rounded-lg overflow-hidden shadow-card hover:shadow-elevation transition-all duration-300 group-hover:scale-105">
                <Image 
                  src={memory.thumbnail} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white text-sm font-medium truncate">{memory.title}</h4>
                    <p className="text-white/80 text-xs">{new Date(memory.date).toLocaleDateString()}</p>
                  </div>
                </div>
                {memory.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                    <Icon name="Play" size={16} color="white" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-2 border-card"></div>
            </div>
            {index < sampleMemories.length - 1 && (
              <div className="absolute top-16 left-48 w-6 h-0.5 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderVerticalView = () => (
    <div className="space-y-6">
      {sampleMemories.map((memory) => (
        <div key={memory.id} className="flex items-start space-x-4 group cursor-pointer">
          <div className="flex-shrink-0 mt-2">
            <div className="w-3 h-3 bg-accent rounded-full border-2 border-card group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <div className="flex-1 bg-card rounded-lg p-4 shadow-card hover:shadow-elevation transition-all duration-300 group-hover:translate-x-2">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={memory.thumbnail} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{memory.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{new Date(memory.date).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-1">
                  {memory.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCalendarView = () => (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-foreground">July 2024</h4>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="ChevronLeft" />
          <Button variant="ghost" size="sm" iconName="ChevronRight" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <div key={day} className="aspect-square flex items-center justify-center text-sm relative group cursor-pointer hover:bg-muted rounded-lg transition-colors duration-200">
            <span className="text-foreground">{day}</span>
            {day === 15 && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDecadeView = () => (
    <div className="space-y-6">
      {[2024, 2023, 2022, 2021, 2020].map((year) => (
        <div key={year} className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevation transition-all duration-300 cursor-pointer group">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-semibold text-foreground">{year}</h4>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Image" size={16} />
              <span className="text-sm">{Math.floor(Math.random() * 200) + 50} memories</span>
            </div>
          </div>
          <div className="flex space-x-2 overflow-hidden">
            {sampleMemories.slice(0, 4).map((memory, index) => (
              <div key={index} className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={memory.thumbnail} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              <span className="text-xs">+{Math.floor(Math.random() * 50) + 10}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'horizontal':
        return renderHorizontalView();
      case 'vertical':
        return renderVerticalView();
      case 'calendar':
        return renderCalendarView();
      case 'decade':
        return renderDecadeView();
      default:
        return renderHorizontalView();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Timeline Explorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate your life story through multiple visualization modes. Each view offers unique insights into your personal journey with smooth transitions and contextual filtering.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {viewModes.map((mode) => (
              <Button
                key={mode.id}
                variant={activeView === mode.id ? 'default' : 'outline'}
                onClick={() => setActiveView(mode.id)}
                iconName={mode.icon}
                iconPosition="left"
                className="transition-all duration-300"
              >
                {mode.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 min-h-[400px]">
          {renderActiveView()}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Experience seamless navigation with zoom controls, smart filtering, and contextual information reveals
          </p>
          <Button variant="outline" iconName="Zap" iconPosition="left">
            Try Interactive Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TimelineExplorer;