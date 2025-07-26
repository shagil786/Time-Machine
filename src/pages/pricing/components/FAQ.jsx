import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change takes effect at your next billing cycle, and you'll retain premium features until then."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "Your data remains safe for 90 days after cancellation. You can export all your memories in multiple formats during this period. After 90 days, premium features are removed, but your basic timeline with up to 500 items remains accessible forever."
    },
    {
      question: "How does the Family plan work?",
      answer: "The Family plan allows up to 6 family members to collaborate on shared timelines while maintaining individual private spaces. Each member gets their own account with premium features, plus access to collaborative family archives and shared memory collections."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use end-to-end encryption for all uploads, secure cloud storage, and never access your personal content. You control all sharing settings, and we never use your data for advertising or sell it to third parties."
    },
    {
      question: "Can I import photos from other platforms?",
      answer: "Yes! Premium and Family plans include import tools for Google Photos, iCloud, Facebook, Instagram, and other major platforms. Our AI automatically organizes imported content by date and suggests tags to make the process seamless."
    },
    {
      question: "What file formats do you support?",
      answer: "We support all major photo formats (JPEG, PNG, HEIC, RAW) and video formats (MP4, MOV, AVI). Premium plans support larger file sizes and additional formats. All uploads are automatically optimized for web viewing while preserving originals."
    },
    {
      question: "Do you offer student or nonprofit discounts?",
      answer: "Yes! We offer 50% discounts for students with valid .edu email addresses and qualified nonprofit organizations. Contact our support team with verification documents to apply for these special rates."
    },
    {
      question: "How does the AI insights feature work?",
      answer: "Our AI analyzes patterns in your timeline to surface meaningful insights like travel frequency, relationship milestones, personal growth trends, and seasonal memories. All analysis happens securely on our servers, and insights are generated only for your private viewing."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-muted-foreground font-inter">
          Everything you need to know about Time Machine pricing
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
            >
              <span className="font-inter font-medium text-foreground pr-4">
                {faq.question}
              </span>
              <Icon
                name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-muted-foreground flex-shrink-0"
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 border-t border-border bg-muted/10">
                <p className="text-muted-foreground font-inter text-sm leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground font-inter text-sm mb-4">
          Still have questions? We're here to help.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Mail" size={16} />
            <span className="font-inter text-sm">support@timemachine.com</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="MessageCircle" size={16} />
            <span className="font-inter text-sm">Live Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;