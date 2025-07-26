import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const JournalIntegration = () => {
  const [selectedMood, setSelectedMood] = useState('happy');
  const [journalText, setJournalText] = useState(`Today was an incredible day! Finally completed my first marathon after months of training. The feeling of crossing that finish line was indescribable - a perfect mix of exhaustion and pure joy.\n\nThe weather was perfect, and having my family there cheering me on made it even more special. I can't believe I actually did it! This feels like such a significant milestone in my fitness journey.`);

  const moods = [
    { id: 'excited', emoji: '🤩', label: 'Excited', color: 'text-yellow-500' },
    { id: 'happy', emoji: '😊', label: 'Happy', color: 'text-green-500' },
    { id: 'content', emoji: '😌', label: 'Content', color: 'text-blue-500' },
    { id: 'thoughtful', emoji: '🤔', label: 'Thoughtful', color: 'text-purple-500' },
    { id: 'grateful', emoji: '🙏', label: 'Grateful', color: 'text-pink-500' },
    { id: 'nostalgic', emoji: '🥺', label: 'Nostalgic', color: 'text-orange-500' }
  ];

  const journalFeatures = [
    {
      icon: 'PenTool',
      title: 'Rich Text Editor',
      description: 'Format your thoughts with bold, italic, lists, and more'
    },
    {
      icon: 'Heart',
      title: 'Mood Tracking',
      description: 'Capture your emotional state with each entry'
    },
    {
      icon: 'Link',
      title: 'Memory Linking',
      description: 'Connect journal entries to specific photos and videos'
    },
    {
      icon: 'Search',
      title: 'Smart Search',
      description: 'Find entries by mood, date, or content keywords'
    }
  ];

  const sampleEntries = [
    {
      id: 1,
      date: '2024-07-15',
      mood: 'excited',
      title: 'Bali Adventure Begins',
      preview: 'Just landed in Bali and the excitement is overwhelming! The warm tropical air...',
      wordCount: 247
    },
    {
      id: 2,
      date: '2024-06-20',
      mood: 'grateful',
      title: 'Graduation Reflections',
      preview: 'Four years of hard work finally paid off. Walking across that stage felt...',
      wordCount: 312
    },
    {
      id: 3,
      date: '2024-05-10',
      mood: 'happy',
      title: 'Marathon Victory',
      preview: 'Today was an incredible day! Finally completed my first marathon after...',
      wordCount: 189
    }
  ];

  const formatToolbar = [
    { icon: 'Bold', action: 'bold' },
    { icon: 'Italic', action: 'italic' },
    { icon: 'Underline', action: 'underline' },
    { icon: 'List', action: 'list' },
    { icon: 'Quote', action: 'quote' },
    { icon: 'Link', action: 'link' }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Journal Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Add depth to your memories with rich journaling capabilities. Capture thoughts, emotions, and reflections that transform simple moments into meaningful stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Journal Editor */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              {/* Editor Header */}
              <div className="border-b border-border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">New Journal Entry</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>July 26, 2024</span>
                  </div>
                </div>

                {/* Mood Selector */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    How are you feeling?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood.id}
                        onClick={() => setSelectedMood(mood.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
                          selectedMood === mood.id
                            ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span className="text-lg">{mood.emoji}</span>
                        <span className="text-sm">{mood.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Formatting Toolbar */}
                <div className="flex items-center space-x-1 p-2 bg-muted/30 rounded-lg">
                  {formatToolbar.map((tool) => (
                    <button
                      key={tool.action}
                      className="p-2 hover:bg-card rounded transition-colors duration-200"
                      title={tool.action}
                    >
                      <Icon name={tool.icon} size={16} color="var(--color-muted-foreground)" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-4">
                <textarea
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                  className="w-full h-64 resize-none border-none outline-none bg-transparent text-foreground placeholder-muted-foreground"
                  placeholder="What's on your mind today?"
                />
              </div>

              {/* Editor Footer */}
              <div className="border-t border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{journalText.length} characters</span>
                    <span>{journalText.split(' ').length} words</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" iconName="Save">
                      Save Draft
                    </Button>
                    <Button variant="default" size="sm" iconName="Plus">
                      Add to Timeline
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {journalFeatures.map((feature) => (
                <div key={feature.title} className="bg-card rounded-lg p-4 shadow-card">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={feature.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journal History */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Recent Entries</h3>
                <Button variant="ghost" size="sm" iconName="Search" iconPosition="left">
                  Search
                </Button>
              </div>

              <div className="space-y-4">
                {sampleEntries.map((entry) => (
                  <div key={entry.id} className="group cursor-pointer">
                    <div className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">
                            {moods.find(m => m.id === entry.mood)?.emoji}
                          </span>
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {entry.title}
                          </h4>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(entry.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {entry.preview}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {entry.wordCount} words
                        </span>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Button variant="ghost" size="sm" iconName="Edit" />
                          <Button variant="ghost" size="sm" iconName="ExternalLink" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" iconName="BookOpen" iconPosition="left">
                  View All Entries
                </Button>
              </div>
            </div>

            {/* Mood Analytics */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4">Mood Insights</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Most common mood</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">😊</span>
                    <span className="font-medium text-foreground">Happy</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Entries this month</span>
                  <span className="font-medium text-foreground">12</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Average words per entry</span>
                  <span className="font-medium text-foreground">249</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" fullWidth iconName="BarChart3" iconPosition="left">
                  View Detailed Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalIntegration;