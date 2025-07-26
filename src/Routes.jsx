import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import Pricing from "pages/pricing";
import HowItWorks from "pages/how-it-works";
import About from "pages/about";
import ContactSupport from "pages/contact-support";
import ProductFeatures from "pages/product-features";
import NotFound from "pages/NotFound";

import Dashboard from "pages/dashboard";
import Timeline from "pages/timeline";
import Upload from "pages/upload";
import Profile from "pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/product-features" element={<ProductFeatures />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
