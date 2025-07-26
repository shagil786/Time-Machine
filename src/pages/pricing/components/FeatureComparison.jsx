import React from 'react';
import Icon from 'components/AppIcon';

const FeatureComparison = () => {
  const features = [
    {
      category: "Storage & Uploads",
      items: [
        { name: "Photo & Video Uploads", free: "500 items", premium: "Unlimited", family: "Unlimited" },
        { name: "Storage Space", free: "2GB", premium: "100GB", family: "500GB" },
        { name: "File Size Limit", free: "25MB", premium: "500MB", family: "1GB" },
        { name: "Batch Upload", free: "10 at once", premium: "Unlimited", family: "Unlimited" }
      ]
    },
    {
      category: "Timeline Features",
      items: [
        { name: "Basic Timeline View", free: true, premium: true, family: true },
        { name: "Advanced Visualizations", free: false, premium: true, family: true },
        { name: "Calendar Grid View", free: false, premium: true, family: true },
        { name: "Decade Overview", free: false, premium: true, family: true }
      ]
    },
    {
      category: "AI & Insights",
      items: [
        { name: "Auto Date Detection", free: true, premium: true, family: true },
        { name: "Smart Tagging", free: "Basic", premium: "Advanced", family: "Advanced" },
        { name: "Life Insights Dashboard", free: false, premium: true, family: true },
        { name: "Pattern Recognition", free: false, premium: true, family: true }
      ]
    },
    {
      category: "Sharing & Collaboration",
      items: [
        { name: "Private Timeline", free: true, premium: true, family: true },
        { name: "Public Sharing", free: false, premium: true, family: true },
        { name: "Family Collaboration", free: false, premium: false, family: true },
        { name: "Multi-User Access", free: false, premium: false, family: "Up to 6 users" }
      ]
    },
    {
      category: "Export & Backup",
      items: [
        { name: "Basic Export", free: "PDF only", premium: "All formats", family: "All formats" },
        { name: "High-Res Downloads", free: false, premium: true, family: true },
        { name: "Automated Backups", free: false, premium: true, family: true },
        { name: "Legacy Planning", free: false, premium: false, family: true }
      ]
    }
  ];

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={20} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={20} className="text-muted-foreground mx-auto" />
      );
    }
    return (
      <span className="text-sm font-inter text-foreground text-center">
        {value}
      </span>
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="bg-muted px-8 py-6">
        <h3 className="text-2xl font-crimson font-semibold text-foreground text-center">
          Feature Comparison
        </h3>
        <p className="text-muted-foreground font-inter text-center mt-2">
          Compare what's included in each plan
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 font-inter font-medium text-foreground">
                Features
              </th>
              <th className="text-center py-4 px-6 font-inter font-medium text-foreground">
                Free
              </th>
              <th className="text-center py-4 px-6 font-inter font-medium text-primary">
                Premium
              </th>
              <th className="text-center py-4 px-6 font-inter font-medium text-foreground">
                Family
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className="bg-muted/30">
                  <td colSpan={4} className="py-3 px-6 font-inter font-medium text-foreground text-sm">
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="border-b border-border hover:bg-muted/20">
                    <td className="py-4 px-6 font-inter text-sm text-foreground">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(item.free)}
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      {renderFeatureValue(item.premium)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(item.family)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;