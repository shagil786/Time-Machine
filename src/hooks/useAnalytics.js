import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackFileUpload,
  trackEngagement,
  trackScrollDepth,
  trackTimeOnPage,
} from "../utils/analytics";

export const useAnalytics = () => {
  const location = useLocation();

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (location.pathname) {
      trackPageView(document.title, location.pathname);
    }
  }, [location.pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, and 100%
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) {
        // Only track if user spent more than 10 seconds
        trackTimeOnPage(timeSpent);
      }
    };
  }, [location.pathname]);

  const trackButton = useCallback(
    (buttonName) => {
      trackButtonClick(buttonName, location.pathname);
    },
    [location.pathname],
  );

  const trackForm = useCallback(
    (formName) => {
      trackFormSubmission(formName, location.pathname);
    },
    [location.pathname],
  );

  const trackUpload = useCallback(
    (fileType, fileSize) => {
      trackFileUpload(fileType, fileSize, location.pathname);
    },
    [location.pathname],
  );

  const trackUserAction = useCallback(
    (action, details = {}) => {
      trackEngagement(action, { ...details, page_path: location.pathname });
    },
    [location.pathname],
  );

  const trackCustomEvent = useCallback(
    (eventName, parameters = {}) => {
      trackEvent(eventName, { ...parameters, page_path: location.pathname });
    },
    [location.pathname],
  );

  return {
    trackButton,
    trackForm,
    trackUpload,
    trackUserAction,
    trackCustomEvent,
  };
};
