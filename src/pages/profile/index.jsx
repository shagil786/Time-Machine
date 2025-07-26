import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { 
  User, 
  Mail, 
  Calendar, 
  Settings, 
  LogOut, 
  Save,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { format } from 'date-fns';

const Profile = () => {
  const { user, userProfile, updateProfile, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    full_name: userProfile?.full_name || '',
    avatar_url: userProfile?.avatar_url || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage({ type: '', text: '' });

    const updates = {};
    if (formData.full_name !== userProfile?.full_name) {
      updates.full_name = formData.full_name.trim() || null;
    }
    if (formData.avatar_url !== userProfile?.avatar_url) {
      updates.avatar_url = formData.avatar_url.trim() || null;
    }

    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      setIsSaving(false);
      return;
    }

    const result = await updateProfile(updates);

    if (result?.success) {
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
    } else {
      setMessage({ type: 'error', text: result?.error || 'Failed to update profile' });
    }

    setIsSaving(false);
  };

  const handleCancel = () => {
    setFormData({
      full_name: userProfile?.full_name || '',
      avatar_url: userProfile?.avatar_url || '',
    });
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const result = await signOut();
    
    if (result?.success) {
      navigate('/');
    } else {
      setMessage({ type: 'error', text: result?.error || 'Failed to sign out' });
      setIsSigningOut(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch {
      return 'Unknown date';
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile - Time Machine</title>
        <meta name="description" content="Manage your Time Machine profile and account settings." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Profile</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your account information and preferences
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-8">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  {formData.avatar_url ? (
                    <img
                      src={formData.avatar_url}
                      alt={formData.full_name || 'Profile'}
                      className="w-20 h-20 rounded-full object-cover border-4 border-background"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-muted border-4 border-background flex items-center justify-center">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground">
                    {userProfile?.full_name || 'User'}
                  </h2>
                  <p className="text-muted-foreground">
                    {userProfile?.role === 'admin' ? 'Administrator' : 'Member'}
                  </p>
                </div>

                <div className="flex space-x-2">
                  {!isEditing ? (
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        disabled={isSaving}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSave}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="animate-spin w-4 h-4 mr-2" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6 space-y-6">
              {/* Status Message */}
              {message.text && (
                <div className={`rounded-md p-4 border ${
                  message.type === 'success' ?'bg-green-50 border-green-200 text-green-700' :'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <div className="flex items-center">
                    {message.type === 'success' ? (
                      <CheckCircle className="w-4 h-4 mr-2" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mr-2" />
                    )}
                    <span className="text-sm">{message.text}</span>
                  </div>
                </div>
              )}

              {/* Profile Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <Input
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <p className="px-3 py-2 text-foreground">
                      {userProfile?.full_name || 'Not set'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <p className="px-3 py-2 text-muted-foreground">
                    {user?.email || 'Not available'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Email cannot be changed directly. Contact support if needed.
                  </p>
                </div>

                {isEditing && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Avatar URL
                    </label>
                    <Input
                      name="avatar_url"
                      value={formData.avatar_url}
                      onChange={handleInputChange}
                      placeholder="https://example.com/avatar.jpg"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Provide a URL to your profile image (optional)
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Member Since
                  </label>
                  <p className="px-3 py-2 text-foreground">
                    {userProfile?.created_at ? formatDate(userProfile.created_at) : 'Unknown'}
                  </p>
                </div>
              </div>

              {/* Account Actions */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Account Actions</h3>
                
                <div className="space-y-3">
                  <Button
                    variant="destructive"
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className="w-full sm:w-auto"
                  >
                    {isSigningOut ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4 mr-2" />
                        Signing out...
                      </>
                    ) : (
                      <>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Account Info */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Account Information</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>User ID:</strong> {user?.id}</p>
                  <p><strong>Account Type:</strong> {userProfile?.role || 'user'}</p>
                  <p><strong>Status:</strong> Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-card border border-border rounded-lg p-4 text-left hover:bg-accent/50 transition-colors"
            >
              <h3 className="font-medium text-foreground">Dashboard</h3>
              <p className="text-sm text-muted-foreground mt-1">
                View your memory overview
              </p>
            </button>
            
            <button
              onClick={() => navigate('/timeline')}
              className="bg-card border border-border rounded-lg p-4 text-left hover:bg-accent/50 transition-colors"
            >
              <h3 className="font-medium text-foreground">Timeline</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Explore your memories
              </p>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;