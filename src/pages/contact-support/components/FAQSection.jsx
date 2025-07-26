import React, { useState } from 'react';
import Input from 'components/ui/Input';
import Icon from 'components/AppIcon';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I upload my first memories to Time Machine?',
      answer: `Getting started is simple! After creating your account, click the "Upload" button in the top navigation. You can drag and drop photos, videos, or documents directly into the upload area, or click to browse your files.\n\nOur system automatically detects dates from your media metadata and organizes everything chronologically. You can upload individual files or entire folders at once. For best results, we recommend starting with a small batch (10-20 items) to get familiar with the interface before uploading larger collections.`
    },
    {
      id: 2,
      category: 'Account & Billing',
      question: 'What\'s the difference between Free and Premium accounts?',
      answer: `Free accounts include 500 uploads, basic timeline viewing, and standard support. Premium accounts offer unlimited uploads, AI-powered insights, advanced privacy controls, collaboration features, priority support, and export options.\n\nPremium users also get access to our mobile app, automatic backup features, and the ability to create shareable timeline collections. You can upgrade anytime from your account settings, and all your existing content will immediately gain Premium features.`
    },
    {
      id: 3,
      category: 'Privacy & Security',
      question: 'How secure is my data on Time Machine?',
      answer: `Your privacy is our top priority. All uploads are encrypted in transit and at rest using industry-standard AES-256 encryption. We never sell your data or use it for advertising.\n\nYou have complete control over sharing - everything is private by default. When you choose to share timeline collections, you can set specific permissions and revoke access anytime. We're GDPR compliant and offer data export and deletion options. Our servers are hosted in secure facilities with regular security audits.`
    },
    {
      id: 4,
      category: 'Technical Support',question: 'Why are my photos not uploading correctly?',
      answer: `Upload issues are usually caused by file size, format, or connection problems. Here's how to troubleshoot:\n\n1. Check file size - individual files should be under 100MB\n2. Supported formats: JPEG, PNG, GIF, MP4, MOV, PDF, and most common formats\n3. Try uploading one file at a time to identify problematic files\n4. Clear your browser cache and cookies\n5. Disable browser extensions temporarily\n\nIf problems persist, try using an incognito/private browser window or contact our support team with specific error messages.`
    },
    {
      id: 5,
      category: 'Features & Usage',
      question: 'How does the AI timeline organization work?',
      answer: `Our AI analyzes your uploaded content to automatically organize and enhance your timeline experience. It reads metadata from photos (date, location, camera settings) and uses image recognition to identify people, objects, and scenes.\n\nThe AI creates smart suggestions for timeline events, detects duplicate photos, and can identify patterns in your life (like regular trips or milestones). All AI processing happens securely on our servers, and you can always manually adjust or override any automatic categorizations. Premium users get additional AI insights like mood analysis and life pattern recognition.`
    },
    {
      id: 6,
      category: 'Account & Billing',
      question: 'How do I cancel my Premium subscription?',
      answer: `You can cancel your Premium subscription anytime from your Account Settings. Go to the "Billing" section and click "Cancel Subscription." Your Premium features will remain active until the end of your current billing period.\n\nAfter cancellation, your account will revert to the Free plan. If you have more than 500 uploads, you'll still be able to view all your content, but won't be able to upload new items until you're back under the limit or resubscribe. No data is ever deleted when downgrading.`
    },
    {
      id: 7,
      category: 'Privacy & Security',question: 'Can I share my timeline with family members?',
      answer: `Yes! Premium users can create collaborative timelines and invite family members to contribute. You can set different permission levels - some people can view only, others can add content, and you can designate co-administrators.\n\nSharing options include private links, email invitations, or creating family groups. You maintain control over what gets shared and can revoke access anytime. Free users can share individual photos or create public timeline snippets, but collaborative features require Premium.`
    },
    {
      id: 8,
      category: 'Technical Support',question: 'How do I export my timeline data?',
      answer: `Premium users can export their complete timeline data in multiple formats. Go to Settings > Data Export and choose from:\n\n• ZIP archive with original files and metadata\n• PDF timeline book with photos and descriptions\n• JSON data file for technical users\n• CSV spreadsheet with timeline information\n\nExports include all your uploads, descriptions, tags, and timeline organization. Large exports may take several hours to prepare, and you'll receive an email when ready for download. Exports are available for 7 days after generation.`
    },
    {
      id: 9,
      category: 'Features & Usage',
      question: 'What happens to my account if I pass away?',
      answer: `Time Machine offers legacy planning features for Premium users. You can designate trusted contacts who can access your timeline after account inactivity. Set up legacy contacts in your Privacy Settings.\n\nYou can specify what content should be shared and what should remain private. Legacy contacts receive access only after a verification process and specified inactivity period (3-12 months). This ensures your memories can be preserved for family while respecting your privacy wishes. Free accounts can export data for manual preservation.`
    },
    {
      id: 10,
      category: 'Getting Started',
      question: 'Can I import photos from Google Photos or iCloud?',
      answer: `Yes! Premium users can directly import from Google Photos, iCloud, Dropbox, and other cloud services. Use the "Import" feature in your upload area and connect your accounts securely.\n\nThe import process preserves original dates, locations, and album organization. Large imports happen in the background, and you'll receive progress updates. Free users can manually download and upload from these services, though this requires more time and effort.`
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQs.map(item => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6">
          Find quick answers to common questions about Time Machine. Can't find what you're looking for? Use our contact form above.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 max-w-md">
            <Input
              type="search"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-sm text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Expand All
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={collapseAll}
              className="text-sm text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {searchQuery && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        </div>
      )}

      <div className="space-y-4">
        {categories.map(category => {
          const categoryFAQs = filteredFAQs.filter(item => item.category === category);
          
          if (categoryFAQs.length === 0) return null;

          return (
            <div key={category} className="space-y-3">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon 
                    name={
                      category === 'Getting Started' ? 'Play' :
                      category === 'Account & Billing' ? 'CreditCard' :
                      category === 'Privacy & Security' ? 'Shield' :
                      category === 'Technical Support'? 'Settings' : 'HelpCircle'
                    } 
                    size={16} 
                    className="text-primary" 
                  />
                </div>
                <h3 className="text-lg font-inter font-semibold text-foreground">
                  {category}
                </h3>
              </div>

              {categoryFAQs.map(item => (
                <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-inter font-medium text-foreground pr-4">
                      {item.question}
                    </span>
                    <Icon 
                      name={expandedItems.has(item.id) ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground flex-shrink-0" 
                    />
                  </button>
                  
                  {expandedItems.has(item.id) && (
                    <div className="px-6 pb-4 border-t border-border bg-muted/20">
                      <div className="pt-4 text-muted-foreground whitespace-pre-line leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-inter font-medium text-foreground mb-2">
            No results found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or browse all categories above.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;