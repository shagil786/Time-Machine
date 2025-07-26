import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import mediaService from '../../utils/mediaService';
import { Calendar, Image, Video, FileText, MapPin, Upload, Filter, Search, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { format, parseISO, isValid, eachMonthOfInterval, isSameMonth } from 'date-fns';

const Timeline = () => {
  const { user } = useAuth();
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (user?.id) {
      loadTimelineData();
    }
  }, [user?.id]);

  const loadTimelineData = async () => {
    try {
      setLoading(true);
      const result = await mediaService.getTimelineData(user.id);
      
      if (result?.success) {
        setTimelineData(result.data || []);
      }
    } catch (error) {
      console.log('Timeline loading error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Group and filter data
  const processedData = useMemo(() => {
    let filteredData = timelineData;

    // Filter by type
    if (selectedFilter !== 'all') {
      filteredData = filteredData.filter(item => item.file_type === selectedFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter(item => 
        item.file_name?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Group by date
    const grouped = filteredData.reduce((acc, item) => {
      const date = item.date_taken || item.created_at;
      let dateKey;
      
      try {
        const parsedDate = parseISO(date);
        if (isValid(parsedDate)) {
          dateKey = format(parsedDate, 'yyyy-MM-dd');
        } else {
          dateKey = 'unknown';
        }
      } catch {
        dateKey = 'unknown';
      }

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(item);
      
      return acc;
    }, {});

    // Sort dates
    const sortedDates = Object.keys(grouped).sort((a, b) => {
      if (a === 'unknown') return 1;
      if (b === 'unknown') return -1;
      return new Date(b) - new Date(a);
    });

    return { grouped, sortedDates };
  }, [timelineData, selectedFilter, searchQuery]);

  // Available months for navigation
  const availableMonths = useMemo(() => {
    if (!timelineData.length) return [];

    const dates = timelineData
      .map(item => item.date_taken || item.created_at)
      .filter(date => {
        try {
          return isValid(parseISO(date));
        } catch {
          return false;
        }
      })
      .map(date => parseISO(date))
      .sort((a, b) => b - a);

    if (!dates.length) return [];

    const firstDate = dates[dates.length - 1];
    const lastDate = dates[0];

    return eachMonthOfInterval({ start: firstDate, end: lastDate }).reverse();
  }, [timelineData]);

  const getFileTypeIcon = (fileType) => {
    switch (fileType) {
      case 'image':
        return <Image className="w-4 h-4 text-green-500" />;
      case 'video':
        return <Video className="w-4 h-4 text-blue-500" />;
      case 'document':
        return <FileText className="w-4 h-4 text-purple-500" />;
      case 'note':
        return <FileText className="w-4 h-4 text-orange-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = parseISO(dateString);
      if (isValid(date)) {
        return format(date, 'EEEE, MMMM d, yyyy');
      }
    } catch {}
    return 'Unknown Date';
  };

  const formatTime = (dateString) => {
    try {
      const date = parseISO(dateString);
      if (isValid(date)) {
        return format(date, 'h:mm a');
      }
    } catch {}
    return '';
  };

  const getTypeCount = (type) => {
    return timelineData.filter(item => item.file_type === type).length;
  };

  const navigateMonth = (direction) => {
    const currentIndex = availableMonths.findIndex(month => 
      isSameMonth(month, selectedMonth)
    );
    
    if (direction === 'prev' && currentIndex < availableMonths.length - 1) {
      setSelectedMonth(availableMonths[currentIndex + 1]);
    } else if (direction === 'next' && currentIndex > 0) {
      setSelectedMonth(availableMonths[currentIndex - 1]);
    }
  };

  const MediaModal = ({ media, onClose }) => {
    if (!media) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground truncate">
              {media.file_name}
            </h3>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto max-h-[70vh]">
            {media.file_type === 'image' && media.file_url && (
              <img
                src={media.file_url}
                alt={media.file_name}
                className="max-w-full h-auto rounded-lg mb-4"
              />
            )}
            
            {media.file_type === 'video' && media.file_url && (
              <video
                controls
                className="max-w-full h-auto rounded-lg mb-4"
                src={media.file_url}
              />
            )}
            
            {media.file_type === 'note' && media.content && (
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <pre className="whitespace-pre-wrap text-sm text-foreground">
                  {media.content}
                </pre>
              </div>
            )}

            {media.description && (
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Description</h4>
                <p className="text-muted-foreground">{media.description}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-foreground">Date:</span>
                <p className="text-muted-foreground">
                  {formatDate(media.date_taken || media.created_at)}
                </p>
              </div>
              
              <div>
                <span className="font-medium text-foreground">Type:</span>
                <p className="text-muted-foreground capitalize">{media.file_type}</p>
              </div>

              {media.location_name && (
                <div>
                  <span className="font-medium text-foreground">Location:</span>
                  <p className="text-muted-foreground">{media.location_name}</p>
                </div>
              )}

              {media.tags && media.tags.length > 0 && (
                <div>
                  <span className="font-medium text-foreground">Tags:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {media.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Timeline - Time Machine</title>
        <meta name="description" content="Explore your memories organized in a beautiful timeline view." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your Timeline</h1>
              <p className="mt-2 text-muted-foreground">
                {timelineData.length} memories organized in time
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="/upload">
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Add Memories
                </Button>
              </Link>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Type Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === 'all' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    All ({timelineData.length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter('image')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === 'image' ?'bg-green-100 text-green-700' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Images ({getTypeCount('image')})
                  </button>
                  <button
                    onClick={() => setSelectedFilter('video')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === 'video' ?'bg-blue-100 text-blue-700' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Videos ({getTypeCount('video')})
                  </button>
                  <button
                    onClick={() => setSelectedFilter('note')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === 'note' ?'bg-orange-100 text-orange-700' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Notes ({getTypeCount('note')})
                  </button>
                  <button
                    onClick={() => setSelectedFilter('document')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedFilter === 'document'
                        ? 'bg-purple-100 text-purple-700' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Documents ({getTypeCount('document')})
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search memories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Month Navigation */}
          {availableMonths.length > 0 && (
            <div className="flex items-center justify-center space-x-4 mb-8">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                disabled={availableMonths.findIndex(month => 
                  isSameMonth(month, selectedMonth)
                ) >= availableMonths.length - 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <h2 className="text-xl font-semibold text-foreground">
                  {format(selectedMonth, 'MMMM yyyy')}
                </h2>
              </div>
              
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                disabled={availableMonths.findIndex(month => 
                  isSameMonth(month, selectedMonth)
                ) <= 0}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Timeline Content */}
          {loading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-6 bg-muted rounded w-48 mb-4"></div>
                  <div className="space-y-4">
                    {[...Array(2)].map((_, j) => (
                      <div key={j} className="flex space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : processedData.sortedDates.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-muted/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No memories found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || selectedFilter !== 'all' ?'Try adjusting your filters or search terms' :'Start by uploading your first memory'
                }
              </p>
              {!searchQuery && selectedFilter === 'all' && (
                <Link to="/upload">
                  <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload First Memory
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {processedData.sortedDates.map((dateKey) => (
                <div key={dateKey} className="relative">
                  {/* Date Header */}
                  <div className="sticky top-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {dateKey === 'unknown' ? 'Unknown Date' : formatDate(dateKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {processedData.grouped[dateKey].length} {processedData.grouped[dateKey].length === 1 ? 'memory' : 'memories'}
                    </p>
                  </div>

                  {/* Media Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {processedData.grouped[dateKey].map((media) => (
                      <div
                        key={media.id}
                        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedMedia(media)}
                      >
                        {/* Media Preview */}
                        <div className="aspect-video bg-muted flex items-center justify-center relative">
                          {media.file_type === 'image' && media.file_url ? (
                            <img
                              src={media.file_url}
                              alt={media.file_name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center space-y-2">
                              {getFileTypeIcon(media.file_type)}
                              <span className="text-xs text-muted-foreground capitalize">
                                {media.file_type}
                              </span>
                            </div>
                          )}
                          
                          <div className="absolute top-2 right-2">
                            <button className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors">
                              <Eye className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Media Info */}
                        <div className="p-4">
                          <h4 className="font-medium text-foreground truncate mb-1">
                            {media.file_name}
                          </h4>
                          
                          {media.description && (
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                              {media.description}
                            </p>
                          )}

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>
                              {formatTime(media.date_taken || media.created_at)}
                            </span>
                            
                            {media.location_name && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span className="truncate max-w-20">
                                  {media.location_name}
                                </span>
                              </div>
                            )}
                          </div>

                          {media.tags && media.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {media.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                              {media.tags.length > 3 && (
                                <span className="text-xs text-muted-foreground">
                                  +{media.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Media Modal */}
        <MediaModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      </div>
    </>
  );
};

export default Timeline;