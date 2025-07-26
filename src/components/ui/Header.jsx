import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "./Button";
import {
  Menu,
  X,
  Clock,
  Upload,
  User,
  Calendar,
  BarChart3,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Icon from "../AppIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, userProfile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navigationItems = [
    { name: "Features", href: "/product-features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/contact-support" },
  ];

  const appNavigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Timeline", href: "/timeline", icon: Clock },
    { name: "Upload", href: "/upload", icon: Upload },
  ];

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  const isAppRoute = () => {
    const appRoutes = ["/dashboard", "/timeline", "/upload", "/profile"];
    return appRoutes.some((route) => location.pathname.startsWith(route));
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to={user ? "/dashboard" : "/"}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="text-primary"
                fill="currentColor"
              >
                <circle cx="16" cy="16" r="14" className="opacity-10" />
                <path d="M16 4a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 0 1 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                <circle cx="16" cy="16" r="2" className="text-accent" />
              </svg>
            </div>
            <span className="text-xl font-crimson font-semibold text-foreground">
              Time Machine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {user && isAppRoute()
              ? // App Navigation for authenticated users
                appNavigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveRoute(item.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })
              : // Marketing Navigation
                navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActiveRoute(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {userProfile?.avatar_url ? (
                    <img
                      src={userProfile.avatar_url}
                      alt={userProfile.full_name || "Profile"}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">
                      {userProfile?.full_name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {userProfile?.role === "admin" ? "Admin" : "Member"}
                    </p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium text-foreground">
                        {userProfile?.full_name || "User"}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>

                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile Settings
                      </Link>

                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <BarChart3 className="w-4 h-4 mr-3" />
                        Dashboard
                      </Link>

                      <Link
                        to="/timeline"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Calendar className="w-4 h-4 mr-3" />
                        Timeline
                      </Link>
                    </div>

                    <div className="border-t border-border py-2">
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/how-it-works">
                  <Button variant="ghost">View Demo</Button>
                </Link>
                <Link to="/product-features">
                  <Button>Explore Features</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {user && isAppRoute() ? (
              // App Navigation for mobile
              <>
                {appNavigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveRoute(item.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                <div className="border-t border-border pt-3 mt-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>

                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            ) : (
              // Marketing Navigation for mobile
              <>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActiveRoute(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {!user && (
                  <div className="border-t border-border pt-3 mt-3 space-y-2">
                    <Link
                      to="/how-it-works"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="ghost" className="w-full justify-start">
                        View Demo
                      </Button>
                    </Link>
                    <Link
                      to="/product-features"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button className="w-full justify-start">
                        Explore Features
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
