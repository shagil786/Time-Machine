import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import mediaService from '../../utils/mediaService';
import { 
  Upload as UploadIcon, 
  Image, 
  Video, 
  FileText, 
  X, 
  Calendar,
  MapPin,
  Tag,
  Loader2,
  CheckCircle
} from 'lucide-react';

const Upload = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadComplete, setUploadComplete] = useState(false);

  const [formData, setFormData] = useState({
    description: '',
    tags: '',
    location: '',
    customDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleFileSelect = (e) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = async (files) => {
    const processedFiles = [];

    for (const file of files) {
      const fileType = getFileType(file);
      const fileData = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        type: fileType,
        name: file.name,
        size: file.size,
        preview: null,
        exifData: null,
      };

      // Create preview for images
      if (fileType === 'image') {
        try {
          const preview = await createImagePreview(file);
          fileData.preview = preview;
          
          // Extract EXIF data
          const exifResult = await mediaService.extractExifData(file);
          if (exifResult?.success && exifResult.data) {
            fileData.exifData = exifResult.data;
          }
        } catch (error) {
          console.log('Preview/EXIF error:', error);
        }
      }

      processedFiles.push(fileData);
    }

    setSelectedFiles(prev => [...prev, ...processedFiles]);
  };

  const createImagePreview = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  };

  const getFileType = (file) => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type === 'text/plain') return 'note';
    return 'document';
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'image':
        return <Image className="w-8 h-8 text-green-500" />;
      case 'video':
        return <Video className="w-8 h-8 text-blue-500" />;
      case 'note':
        return <FileText className="w-8 h-8 text-orange-500" />;
      case 'document':
        return <FileText className="w-8 h-8 text-purple-500" />;
      default:
        return <FileText className="w-8 h-8 text-gray-500" />;
    }
  };

  const removeFile = (fileId) => {
    setSelectedFiles(prev => prev.filter(f => f.id !== fileId));
    setUploadProgress(prev => {
      const updated = { ...prev };
      delete updated[fileId];
      return updated;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleUpload = async () => {
    if (!selectedFiles.length || !user?.id) return;

    setUploading(true);
    const results = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileData = selectedFiles[i];
      
      try {
        setUploadProgress(prev => ({
          ...prev,
          [fileData.id]: { progress: 0, status: 'uploading' }
        }));

        // Upload file to storage
        const uploadResult = await mediaService.uploadFile(fileData.file, user.id);
        
        if (!uploadResult?.success) {
          throw new Error(uploadResult?.error || 'Upload failed');
        }

        setUploadProgress(prev => ({
          ...prev,
          [fileData.id]: { progress: 50, status: 'processing' }
        }));

        // Prepare media entry data
        const mediaData = {
          user_id: user.id,
          file_url: uploadResult.data.publicUrl,
          file_name: fileData.name,
          file_type: fileData.type,
          file_size: fileData.size,
          description: formData.description || null,
          location_name: formData.location || null,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(Boolean) : null,
          status: 'ready',
        };

        // Add EXIF data if available
        if (fileData.exifData) {
          mediaData.date_taken = fileData.exifData.dateTaken;
          mediaData.latitude = fileData.exifData.latitude;
          mediaData.longitude = fileData.exifData.longitude;
        }

        // Use custom date if provided
        if (formData.customDate) {
          mediaData.date_taken = new Date(formData.customDate).toISOString();
        }

        // For text files, read content
        if (fileData.type === 'note' && fileData.file.type === 'text/plain') {
          try {
            const content = await fileData.file.text();
            mediaData.content = content;
          } catch (error) {
            console.log('Error reading text file:', error);
          }
        }

        // Create media entry in database
        const mediaResult = await mediaService.createMediaEntry(mediaData);
        
        if (!mediaResult?.success) {
          throw new Error(mediaResult?.error || 'Failed to create media entry');
        }

        setUploadProgress(prev => ({
          ...prev,
          [fileData.id]: { progress: 100, status: 'complete' }
        }));

        results.push(mediaResult.data);

      } catch (error) {
        console.log('Upload error:', error);
        setUploadProgress(prev => ({
          ...prev,
          [fileData.id]: { progress: 0, status: 'error', error: error.message }
        }));
      }
    }

    setUploading(false);
    
    if (results.length > 0) {
      setUploadComplete(true);
      setTimeout(() => {
        navigate('/timeline');
      }, 2000);
    }
  };

  if (uploadComplete) {
    return (
      <>
        <Helmet>
          <title>Upload Complete - Time Machine</title>
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Upload Complete!</h2>
            <p className="text-muted-foreground">
              Your memories have been added to your timeline. Redirecting...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Upload Memories - Time Machine</title>
        <meta name="description" content="Upload your photos, videos, documents, and notes to your Time Machine timeline." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Upload Memories</h1>
            <p className="mt-2 text-muted-foreground">
              Add photos, videos, documents, or notes to your timeline
            </p>
          </div>

          {/* Upload Area */}
          <div className="space-y-6">
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
                dragActive 
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*,video/*,.txt,.pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <div className="mt-4">
                  <p className="text-lg font-medium text-foreground">
                    Drop files here or click to select
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Support for images, videos, documents, and text files
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Selected Files ({selectedFiles.length})
                </h3>
                
                <div className="space-y-3">
                  {selectedFiles.map((file) => (
                    <div key={file.id} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                      <div className="flex-shrink-0">
                        {file.preview ? (
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 flex items-center justify-center">
                            {getFileIcon(file.type)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(file.size)} • {file.type}
                        </p>
                        
                        {/* Upload Progress */}
                        {uploadProgress[file.id] && (
                          <div className="mt-2">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-muted rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all"
                                  style={{ width: `${uploadProgress[file.id].progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {uploadProgress[file.id].progress}%
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {uploadProgress[file.id].status}
                            </p>
                            {uploadProgress[file.id].error && (
                              <p className="text-xs text-red-600 mt-1">
                                {uploadProgress[file.id].error}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {!uploading && (
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata Form */}
            {selectedFiles.length > 0 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Add Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="What's the story behind these memories?"
                      className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Tag className="w-4 h-4 inline mr-2" />
                        Tags
                      </label>
                      <Input
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="vacation, family, work (comma separated)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Location
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Where was this taken?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Custom Date (optional)
                    </label>
                    <Input
                      type="datetime-local"
                      name="customDate"
                      value={formData.customDate}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Leave empty to use automatic date detection or upload time
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Upload Button */}
            {selectedFiles.length > 0 && (
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedFiles([]);
                    setUploadProgress({});
                    setFormData({
                      description: '',
                      tags: '',
                      location: '',
                      customDate: '',
                    });
                  }}
                  disabled={uploading}
                >
                  Clear All
                </Button>
                <Button
                  onClick={handleUpload}
                  disabled={uploading || selectedFiles.length === 0}
                  className="min-w-[120px]"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <UploadIcon className="w-4 h-4 mr-2" />
                      Upload {selectedFiles.length} {selectedFiles.length === 1 ? 'File' : 'Files'}
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Upload;