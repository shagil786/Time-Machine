import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Ready to Begin?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-crimson font-semibold text-white mb-6 leading-tight">
            Your Story Starts Today
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who have transformed their scattered digital memories into meaningful life narratives. Start your journey with Time Machine today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link to="/homepage">
              <Button 
                variant="default" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Timeline
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                iconName="Play"
                iconPosition="left"
              >
                See How It Works
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={18} />
              <span className="text-sm font-inter">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} />
              <span className="text-sm font-inter">Free 30-Day Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={18} />
              <span className="text-sm font-inter">50,000+ Happy Users</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-success/10 rounded-full blur-lg"></div>
    </section>
  );
};

export default CTASection;