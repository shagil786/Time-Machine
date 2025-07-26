import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/ui/Header';
import mediaService from '../../utils/mediaService';
import { 
  Upload, 
  Image, 
  Video, 
  FileText, 
  Calendar, 
  TrendingUp,
  Eye,
  Plus,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const { user, userProfile } = useAuth();
  const [mediaStats, setMediaStats] = useState({
    total: 0,
    images: 0,
    videos: 0,
    documents: 0,
    notes: 0
  });
  const [recentMedia, setRecentMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      loadDashboardData();
    }
  }, [user?.id]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Load recent media
      const mediaResult = await mediaService.getUserMedia(user.id, { limit: 6 });
      
      if (mediaResult?.success) {
        const media = mediaResult.data || [];
        setRecentMedia(media);

        // Calculate stats
        const stats = media.reduce((acc, item) => {
          acc.total++;
          if (item.file_type === 'image') acc.images++;
          else if (item.file_type === 'video') acc.videos++;
          else if (item.file_type === 'document') acc.documents++;
          else if (item.file_type === 'note') acc.notes++;
          return acc;
        }, { total: 0, images: 0, videos: 0, documents: 0, notes: 0 });

        setMediaStats(stats);
      }
    } catch (error) {
      console.log('Dashboard loading error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFileTypeIcon = (fileType) => {
    switch (fileType) {
      case 'image':
        return <Image className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'document':
        return <FileText className="w-4 h-4" />;
      case 'note':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return 'Unknown date';
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - Time Machine</title>
        <meta name="description" content="Your Time Machine dashboard - view your memories, upload new content, and explore your timeline." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back{userProfile?.full_name ? `, ${userProfile.full_name}` : ''}!
            </h1>
            <p className="mt-2 text-muted-foreground">
              Your digital memories, beautifully organized in time
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link
              to="/upload"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Upload Memories</h3>
                  <p className="text-sm text-muted-foreground">Add new photos, videos, or notes</p>
                </div>
              </div>
            </Link>

            <Link
              to="/timeline"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">View Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore your memories in time</p>
                </div>
              </div>
            </Link>

            <Link
              to="/profile"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-muted/50 p-3 rounded-lg group-hover:bg-muted transition-colors">
                  <TrendingUp className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">View Profile</h3>
                  <p className="text-sm text-muted-foreground">Manage your account settings</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mediaStats.total}</p>
                  <p className="text-sm text-muted-foreground">Total Memories</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded">
                  <Image className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mediaStats.images}</p>
                  <p className="text-sm text-muted-foreground">Images</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded">
                  <Video className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mediaStats.videos}</p>
                  <p className="text-sm text-muted-foreground">Videos</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded">
                  <FileText className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mediaStats.notes + mediaStats.documents}</p>
                  <p className="text-sm text-muted-foreground">Notes & Docs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Memories */}
          <div className="bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Recent Memories</h2>
                <Link
                  to="/timeline"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>View All</span>
                </Link>
              </div>
            </div>

            <div className="p-6">
              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : recentMedia?.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-muted/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">No memories yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start by uploading your first photo, video, or note
                  </p>
                  <Link
                    to="/upload"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload First Memory
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentMedia.map((media) => (
                    <div key={media.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          {getFileTypeIcon(media.file_type)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {media.file_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(media.date_taken || media.created_at)}
                        </p>
                        {media.description && (
                          <p className="text-xs text-muted-foreground truncate mt-1">
                            {media.description}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          {media.file_type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;