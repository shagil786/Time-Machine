import React from "react";
import { useAnalytics } from "../hooks/useAnalytics";

const AnalyticsProvider = ({ children }) => {
  // Initialize analytics - this will only work inside Router context
  useAnalytics();

  return <>{children}</>;
};

export default AnalyticsProvider;
