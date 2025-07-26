import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const MemoryUploadStudio = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const uploadFeatures = [
    {
      icon: 'Upload',
      title: 'Batch Upload',
      description: 'Upload hundreds of photos and videos simultaneously with progress tracking'
    },
    {
      icon: 'Zap',
      title: 'Auto Metadata',
      description: 'Automatically extract location, date, and camera information from your files'
    },
    {
      icon: 'Calendar',
      title: 'Smart Dating',
      description: 'Intelligent date detection from filenames, EXIF data, and content analysis'
    },
    {
      icon: 'Tag',
      title: 'AI Tagging',
      description: 'Automatic content recognition and smart tagging suggestions'
    }
  ];

  const sampleFiles = [
    {
      id: 1,
      name: 'vacation_bali_2024.jpg',
      size: '2.4 MB',
      type: 'image',
      status: 'completed',
      thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop',
      metadata: {
        date: '2024-07-15',
        location: 'Bali, Indonesia',
        camera: 'iPhone 15 Pro'
      }
    },
    {
      id: 2,
      name: 'graduation_ceremony.mp4',
      size: '45.2 MB',
      type: 'video',
      status: 'processing',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop',
      metadata: {
        date: '2024-06-20',
        location: 'University Campus',
        duration: '3:24'
      }
    },
    {
      id: 3,
      name: 'marathon_finish_line.jpg',
      size: '1.8 MB',
      type: 'image',
      status: 'uploading',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      metadata: {
        date: '2024-05-10',
        location: 'Central Park, NYC',
        camera: 'Canon EOS R5'
      }
    }
  ];

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Simulate upload process
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadProgress(0);
      }
    }, 200);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Icon name="CheckCircle" size={16} color="var(--color-success)" />;
      case 'processing':
        return <Icon name="Clock" size={16} color="var(--color-warning)" />;
      case 'uploading':
        return <Icon name="Upload" size={16} color="var(--color-primary)" />;
      default:
        return <Icon name="File" size={16} />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing...';
      case 'uploading':
        return 'Uploading...';
      default:
        return 'Pending';
    }
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-crimson font-semibold text-foreground mb-4">
            Memory Upload Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Effortlessly import your digital memories with intelligent processing, automatic organization, and seamless batch operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload Interface */}
          <div className="space-y-6">
            <div
              className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-primary bg-primary/5 scale-105' :'border-border hover:border-primary/50 hover:bg-muted/30'
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Upload" size={32} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Drop your memories here
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Or click to browse your files
                  </p>
                  <Button variant="outline" iconName="FolderOpen" iconPosition="left">
                    Choose Files
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Supports JPG, PNG, MP4, MOV up to 100MB each
                </p>
              </div>

              {isUploading && (
                <div className="absolute inset-0 bg-card/90 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto">
                      <svg className="w-16 h-16 animate-spin" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--color-border)"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--color-primary)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray={`${uploadProgress * 0.628} 62.8`}
                          strokeLinecap="round"
                          transform="rotate(-90 12 12)"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Uploading...</p>
                      <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {uploadFeatures.map((feature) => (
                <div key={feature.title} className="bg-card rounded-lg p-4 shadow-card hover:shadow-elevation transition-all duration-300">
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

          {/* File Processing Preview */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Processing Queue</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>3 files processing</span>
              </div>
            </div>

            <div className="space-y-4">
              {sampleFiles.map((file) => (
                <div key={file.id} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                      src={file.thumbnail} 
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground truncate">{file.name}</h4>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(file.status)}
                        <span className="text-xs text-muted-foreground">{getStatusText(file.status)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{file.size}</span>
                      <div className="flex items-center space-x-3">
                        <span>{file.metadata.date}</span>
                        <span>{file.metadata.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Auto-extracted metadata ready</span>
                <Button variant="ghost" size="sm" iconName="Settings" iconPosition="left">
                  Configure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryUploadStudio;