/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* blue-900 */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-900 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* gray-700 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-300 */
          foreground: "var(--color-destructive-foreground)", /* gray-900 */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* orange-300 */
          foreground: "var(--color-accent-foreground)", /* gray-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-300 */
          foreground: "var(--color-success-foreground)", /* gray-900 */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange-300 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-300 */
          foreground: "var(--color-error-foreground)", /* gray-900 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'crimson': ['Crimson Pro', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(26, 54, 93, 0.08)',
        'timeline': '0 2px 8px rgba(26, 54, 93, 0.06)',
        'elevation': '0 4px 20px rgba(26, 54, 93, 0.08)',
        'subtle': '0 2px 8px rgba(26, 54, 93, 0.06)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "timeline-reveal": "timeline-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "timeline-reveal": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'momentum': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}