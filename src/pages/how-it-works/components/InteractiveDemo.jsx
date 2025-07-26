import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

import Button from 'components/ui/Button';

const InteractiveDemo = ({ activeStep }) => {
  const [demoState, setDemoState] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [detectedItems, setDetectedItems] = useState([]);

  const demoData = {
    1: {
      title: "Upload Your Memories",
      content: (
        <div className="space-y-6">
          <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
            demoState === 'uploading' ? 'border-primary bg-primary/5' : 'border-border hover:border-accent'
          }`}>
            <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h4 className="text-lg font-inter font-medium text-foreground mb-2">
              Drag & Drop Your Photos
            </h4>
            <p className="text-muted-foreground mb-4">
              Or choose from multiple import options
            </p>
            
            {demoState === 'uploading' && (
              <div className="space-y-3">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-primary font-medium">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button variant="outline" size="sm" iconName="Camera">
                Direct Upload
              </Button>
              <Button variant="outline" size="sm" iconName="Cloud">
                Google Photos
              </Button>
              <Button variant="outline" size="sm" iconName="Smartphone">
                iCloud Sync
              </Button>
              <Button variant="outline" size="sm" iconName="Share2">
                Social Media
              </Button>
            </div>
          </div>
          
          <Button 
            variant="default" 
            onClick={() => startUploadDemo()}
            disabled={demoState === 'uploading'}
            className="w-full"
          >
            {demoState === 'uploading' ? 'Uploading...' : 'Try Upload Demo'}
          </Button>
        </div>
      )
    },
    2: {
      title: "AI Organization & Insights",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Calendar" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Smart Dating</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatically detects dates from EXIF data, filenames, and content analysis
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Tag" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Auto Tagging</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                AI suggests relevant tags based on image content and context
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Copy" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Duplicate Detection</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Identifies and manages duplicate photos across all uploads
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="BarChart3" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Personal Analytics</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Discovers patterns in your photography and life events
              </p>
            </div>
          </div>
          
          {detectedItems.length > 0 && (
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <h4 className="font-inter font-medium text-foreground mb-3 flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-2" />
                AI Analysis Complete
              </h4>
              <div className="space-y-2">
                {detectedItems.map((item, index) => (
                  <div key={index} className="text-sm text-muted-foreground flex items-center">
                    <Icon name="ArrowRight" size={16} className="mr-2 text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            variant="default" 
            onClick={() => startAnalysisDemo()}
            disabled={demoState === 'analyzing'}
            className="w-full"
          >
            {demoState === 'analyzing' ? 'Analyzing...' : 'See AI in Action'}
          </Button>
        </div>
      )
    },
    3: {
      title: "Explore & Share Your Story",
      content: (
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-inter font-medium text-foreground">Timeline Visualization</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" iconName="Calendar">
                  Calendar
                </Button>
                <Button variant="outline" size="sm" iconName="BarChart3">
                  Timeline
                </Button>
                <Button variant="outline" size="sm" iconName="Grid3X3">
                  Grid
                </Button>
              </div>
            </div>
            
            <div className="relative bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-full h-20 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Icon name="Camera" size={24} className="text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">College Years</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-20 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">Wedding Day</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-20 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Icon name="Baby" size={24} className="text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">New Family</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Filter" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Smart Filtering</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Filter by date, people, locations, or custom tags
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Share2" size={20} className="text-primary" />
                <h4 className="font-inter font-medium text-foreground">Secure Sharing</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Share specific timelines with family and friends
              </p>
            </div>
          </div>
          
          <Button variant="default" className="w-full">
            Explore Timeline Demo
          </Button>
        </div>
      )
    }
  };

  const startUploadDemo = () => {
    setDemoState('uploading');
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDemoState('complete');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const startAnalysisDemo = () => {
    setDemoState('analyzing');
    setDetectedItems([]);
    
    const items = [
      "Detected 47 photos from summer vacation 2023",
      "Found 12 duplicate images across different folders",
      "Identified 8 people in your photos",
      "Suggested tags: #family, #vacation, #beach, #sunset"
    ];
    
    items.forEach((item, index) => {
      setTimeout(() => {
        setDetectedItems(prev => [...prev, item]);
        if (index === items.length - 1) {
          setDemoState('complete');
        }
      }, (index + 1) * 1000);
    });
  };

  useEffect(() => {
    setDemoState('idle');
    setUploadProgress(0);
    setDetectedItems([]);
  }, [activeStep]);

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          {demoData[activeStep]?.title}
        </h3>
        <p className="text-muted-foreground font-inter">
          Interactive demonstration of Step {activeStep}
        </p>
      </div>
      
      {demoData[activeStep]?.content}
    </div>
  );
};

export default InteractiveDemo;