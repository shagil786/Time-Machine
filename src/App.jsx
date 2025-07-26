import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./Routes";
import { useAnalytics } from "./hooks/useAnalytics";

function App() {
  // Initialize analytics
  useAnalytics();

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
