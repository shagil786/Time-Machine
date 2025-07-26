// Google Analytics 4 Configuration
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pageTitle, pagePath) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, pagePath) => {
  trackEvent("button_click", {
    button_name: buttonName,
    page_path: pagePath,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, pagePath) => {
  trackEvent("form_submit", {
    form_name: formName,
    page_path: pagePath,
  });
};

// Track file uploads
export const trackFileUpload = (fileType, fileSize, pagePath) => {
  trackEvent("file_upload", {
    file_type: fileType,
    file_size: fileSize,
    page_path: pagePath,
  });
};

// Track user engagement
export const trackEngagement = (action, details = {}) => {
  trackEvent("user_engagement", {
    action: action,
    ...details,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent("scroll_depth", {
    depth_percentage: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (timeSpent) => {
  trackEvent("time_on_page", {
    time_spent_seconds: timeSpent,
  });
};
