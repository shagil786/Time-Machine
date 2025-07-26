import React, { useState } from "react";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Select from "components/ui/Select";
import { Checkbox } from "components/ui/Checkbox";
import Icon from "components/AppIcon";
import contactService from "utils/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: "",
    priority: "normal",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const inquiryOptions = [
    {
      value: "technical",
      label: "Technical Support",
      description: "Upload issues, bugs, performance problems",
    },
    {
      value: "account",
      label: "Account Questions",
      description: "Billing, subscription, profile settings",
    },
    {
      value: "privacy",
      label: "Privacy Concerns",
      description: "Data security, sharing settings, GDPR requests",
    },
    {
      value: "features",
      label: "Feature Requests",
      description: "New functionality, improvements, suggestions",
    },
    {
      value: "partnership",
      label: "Partnership Inquiries",
      description: "Business partnerships, integrations, media",
    },
  ];

  const priorityOptions = [
    {
      value: "low",
      label: "Low Priority",
      description: "General questions, non-urgent requests",
    },
    {
      value: "normal",
      label: "Normal Priority",
      description: "Standard support needs",
    },
    {
      value: "high",
      label: "High Priority",
      description: "Account access issues, billing problems",
    },
    {
      value: "urgent",
      label: "Urgent",
      description: "Data loss, security concerns (Premium only)",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms =
        "You must agree to our terms to submit this form";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await contactService.submitContactForm(formData);

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          inquiryType: "",
          subject: "",
          message: "",
          priority: "normal",
          agreeToTerms: false,
        });
      } else {
        // Handle error
        console.error("Form submission error:", result.error);
        // You could add error state handling here
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-crimson font-semibold text-foreground mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting us. We've received your message and will
          respond within 24 hours for premium users, or 48 hours for free
          accounts.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitSuccess(false)}
          className="mx-auto"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-crimson font-semibold text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground">
          We're here to help with any questions about your Time Machine
          experience. Fill out the form below and we'll get back to you
          promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={errors.email}
            description="We'll use this to respond to your inquiry"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry category"
            options={inquiryOptions}
            value={formData.inquiryType}
            onChange={(value) => handleInputChange("inquiryType", value)}
            error={errors.inquiryType}
            required
          />

          <Select
            label="Priority Level"
            placeholder="Select priority"
            options={priorityOptions}
            value={formData.priority}
            onChange={(value) => handleInputChange("priority", value)}
            description="Urgent priority available for Premium users only"
          />
        </div>

        <Input
          label="Subject"
          type="text"
          placeholder="Brief description of your inquiry"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          error={errors.subject}
          required
        />

        <div>
          <label className="block text-sm font-inter font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full min-h-32 px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-y"
            placeholder="Please provide detailed information about your inquiry. Include any error messages, steps you've taken, or specific questions you have."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={6}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Minimum 10 characters required
          </p>
        </div>

        <Checkbox
          label="I agree to Time Machine's Terms of Service and Privacy Policy"
          description="Required to process your support request"
          checked={formData.agreeToTerms}
          onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
          error={errors.agreeToTerms}
          required
        />

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1 sm:flex-none"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                inquiryType: "",
                subject: "",
                message: "",
                priority: "normal",
                agreeToTerms: false,
              });
              setErrors({});
            }}
            disabled={isSubmitting}
          >
            Clear Form
          </Button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Icon name="Info" size={16} className="text-accent" />
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Response Times:</p>
            <ul className="space-y-1">
              <li>• Premium users: Within 24 hours</li>
              <li>• Free accounts: Within 48 hours</li>
              <li>• Urgent issues: Within 4 hours (Premium only)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
