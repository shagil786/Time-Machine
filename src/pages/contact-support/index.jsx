import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import SupportOptions from './components/SupportOptions';
import TeamSection from './components/TeamSection';
import ResourcesSection from './components/ResourcesSection';
import Icon from 'components/AppIcon';

const ContactSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact & Support - Time Machine</title>
        <meta name="description" content="Get help with Time Machine. Contact our support team, browse FAQs, and access helpful resources for your digital memory preservation journey." />
        <meta name="keywords" content="Time Machine support, customer service, help center, FAQ, contact support, technical help" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="HeadphonesIcon" size={32} className="text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-crimson font-semibold text-foreground mb-6">
                We're Here to Help
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your memories matter to us. Get the support you need to make the most of your Time Machine experience with our dedicated team and comprehensive resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span>24-hour response for Premium users</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} className="text-success" />
                  <span>Human support, not bots</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>Privacy-first assistance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-16 lg:py-20 bg-muted/20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SupportOptions />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FAQSection />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-20 bg-muted/20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <TeamSection />
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <ResourcesSection />
          </div>
        </section>

        {/* Emergency Support Banner */}
        <section className="py-12 bg-error/5 border-y border-error/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-error" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-foreground">
                  Emergency Support
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experiencing data loss, security concerns, or account access issues? Premium users can contact our emergency support line for immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                  <Icon name="Phone" size={16} className="text-error" />
                  <span>Emergency Line: +1 (555) 911-HELP</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="text-sm text-muted-foreground">
                  Available 24/7 for Premium subscribers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-crimson font-semibold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is standing by to help you preserve and celebrate your most precious memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@timemachine.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Email Support Team
              </a>
              <button
                onClick={() => alert('Live chat would open here')}
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-foreground rounded-lg hover:bg-muted/50 transition-colors duration-200 font-medium"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start Live Chat
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Response times: Premium users within 24 hours • Free accounts within 48 hours
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    className="text-accent"
                    fill="currentColor"
                  >
                    <circle cx="16" cy="16" r="14" className="opacity-10" />
                    <path d="M16 4a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 0 1 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <circle cx="16" cy="16" r="2" className="text-accent" />
                  </svg>
                </div>
                <span className="text-xl font-crimson font-semibold">
                  Time Machine
                </span>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                Transforming scattered memories into meaningful stories. Your life deserves better than forgotten photos.
              </p>
              <div className="text-sm text-secondary-foreground/60">
                © {new Date().getFullYear()} Time Machine. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors duration-200">System Status</a></li>
                <li><a href="#" className="hover:text-accent transition-colors duration-200">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors duration-200">support@timemachine.com</a></li>
                <li><a href="#" className="hover:text-accent transition-colors duration-200">+1 (555) 123-4567</a></li>
                <li><a href="#" className="hover:text-accent transition-colors duration-200">Business Hours: 9 AM - 6 PM EST</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSupport;