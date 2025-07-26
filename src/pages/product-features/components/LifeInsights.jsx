import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const LifeInsights = () => {
  const [activeInsight, setActiveInsight] = useState('growth');

  const growthData = [
    { month: 'Jan', memories: 45, milestones: 2 },
    { month: 'Feb', memories: 52, milestones: 1 },
    { month: 'Mar', memories: 38, milestones: 3 },
    { month: 'Apr', memories: 67, milestones: 2 },
    { month: 'May', memories: 73, milestones: 4 },
    { month: 'Jun', memories: 89, milestones: 3 },
    { month: 'Jul', memories: 95, milestones: 2 }
  ];

  const categoryData = [
    { name: 'Travel', value: 35, color: '#f6ad55' },
    { name: 'Family', value: 28, color: '#68d391' },
    { name: 'Career', value: 18, color: '#1a365d' },
    { name: 'Hobbies', value: 12, color: '#fc8181' },
    { name: 'Other', value: 7, color: '#a0aec0' }
  ];

  const moodData = [
    { date: '2024-01', happiness: 7.2, energy: 6.8 },
    { date: '2024-02', happiness: 6.9, energy: 7.1 },
    { date: '2024-03', happiness: 8.1, energy: 7.8 },
    { date: '2024-04', happiness: 7.8, energy: 8.2 },
    { date: '2024-05', happiness: 8.5, energy: 8.0 },
    { date: '2024-06', happiness: 8.9, energy: 8.7 },
    { date: '2024-07', happiness: 9.1, energy: 8.9 }
  ];

  const insights = [
    {
      id: 'growth',
      title: 'Personal Growth',
      icon: 'TrendingUp',
      description: 'Track your journey through documented milestones and achievements'
    },
    {
      id: 'patterns',
      title: 'Life Patterns',
      icon: 'BarChart3',
      description: 'Discover recurring themes and seasonal trends in your memories'
    },
    {
      id: 'milestones',
      title: 'Milestone Celebrations',
      icon: 'Award',
      description: 'Automatically detect and celebrate important life moments'
    },
    {
      id: 'mood',
      title: 'Emotional Journey',
      icon: 'Heart',
      description: 'Visualize emotional patterns and well-being trends over time'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: 'First Marathon Completed',
      date: '2024-05-10',
      category: 'fitness',
      impact: 'high',
      description: 'Achieved personal fitness goal after 6 months of training'
    },
    {
      id: 2,
      title: 'Career Promotion',
      date: '2024-04-02',
      category: 'career',
      impact: 'high',
      description: 'Promoted to Senior Developer role with increased responsibilities'
    },
    {
      id: 3,
      title: 'Family Vacation',
      date: '2024-07-15',
      category: 'family',
      impact: 'medium',
      description: 'First international trip with extended family to Bali'
    }
  ];

  const renderGrowthInsight = () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Memory Activity Over Time</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Bar dataKey="memories" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-card text-center">
          <div className="text-2xl font-bold text-primary mb-1">1,247</div>
          <div className="text-sm text-muted-foreground">Total Memories</div>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-card text-center">
          <div className="text-2xl font-bold text-success mb-1">23</div>
          <div className="text-sm text-muted-foreground">Milestones</div>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-card text-center">
          <div className="text-2xl font-bold text-accent mb-1">156%</div>
          <div className="text-sm text-muted-foreground">Growth Rate</div>
        </div>
      </div>
    </div>
  );

  const renderPatternsInsight = () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Memory Categories</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {categoryData.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-muted-foreground">{item.name} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Seasonal Patterns</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Most active season</span>
            <span className="font-medium text-foreground">Summer (42% of memories)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Peak activity day</span>
            <span className="font-medium text-foreground">Saturday</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Favorite time</span>
            <span className="font-medium text-foreground">Golden hour (6-8 PM)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMilestonesInsight = () => (
    <div className="space-y-4">
      {milestones.map((milestone) => (
        <div key={milestone.id} className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevation transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${
                  milestone.impact === 'high' ? 'bg-success' : 
                  milestone.impact === 'medium' ? 'bg-warning' : 'bg-muted'
                }`}></div>
                <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {milestone.category}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{milestone.description}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(milestone.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <Button variant="ghost" size="sm" iconName="ExternalLink" />
          </div>
        </div>
      ))}
    </div>
  );

  const renderMoodInsight = () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Emotional Trends</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
              <YAxis domain={[0, 10]} stroke="var(--color-muted-foreground)" />
              <Line 
                type="monotone" 
                dataKey="happiness" 
                stroke="var(--color-success)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-success)', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="var(--color-accent)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-sm text-muted-foreground">Happiness</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-sm text-muted-foreground">Energy</span>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Well-being Insights</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Average happiness score</span>
            <span className="font-medium text-success">8.2/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Trending direction</span>
            <div className="flex items-center space-x-1">
              <Icon name="TrendingUp" size={16} color="var(--color-success)" />
              <span className="font-medium text-success">Improving</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Best month</span>
            <span className="font-medium text-foreground">July 2024</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveInsight = () => {
    switch (activeInsight) {
      case 'growth':
        return renderGrowthInsight();
      case 'patterns':
        return renderPatternsInsight();
      case 'milestones':
        return renderMilestonesInsight();
      case 'mood':
        return renderMoodInsight();
      default:
        return renderGrowthInsight();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            AI-Powered Life Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your memories into meaningful discoveries. Our AI analyzes your timeline to reveal patterns, celebrate milestones, and provide insights into your personal growth journey.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {insights.map((insight) => (
              <Button
                key={insight.id}
                variant={activeInsight === insight.id ? 'default' : 'outline'}
                onClick={() => setActiveInsight(insight.id)}
                iconName={insight.icon}
                iconPosition="left"
                className="transition-all duration-300"
              >
                {insight.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-muted/20 rounded-2xl p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {insights.find(i => i.id === activeInsight)?.title}
            </h3>
            <p className="text-muted-foreground">
              {insights.find(i => i.id === activeInsight)?.description}
            </p>
          </div>

          {renderActiveInsight()}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All insights are generated from your personal data and remain completely private
          </p>
          <Button variant="outline" iconName="Brain" iconPosition="left">
            Explore AI Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifeInsights;