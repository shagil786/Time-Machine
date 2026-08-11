# Time Machine 🕰️

**AI-powered digital memory preservation platform**

Time Machine is a modern web application that helps users preserve, organize, and rediscover their digital memories through intelligent timeline management and AI-powered features.

## 🌟 About

Time Machine transforms how you interact with your digital memories. Using advanced AI and computer vision, it automatically organizes your photos and videos into meaningful timelines, making it easier to relive precious moments and discover forgotten memories.

## ✨ Key Features

- **📸 Smart Media Upload** - Drag-and-drop interface with EXIF data extraction
- **🤖 AI-Powered Organization** - Automatic categorization and tagging
- **📅 Intelligent Timeline** - Chronological memory organization
- **🔍 Advanced Search** - Find memories by date, location, or content
- **🛡️ Privacy-First** - Secure data handling with user control
- **📱 Responsive Design** - Works seamlessly across all devices
- **🎨 Beautiful UI** - Modern, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - Modern React with concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Supabase** - Backend-as-a-Service for authentication and database
- **D3.js & Recharts** - Data visualization for timeline analytics
- **React Hook Form** - Efficient form handling and validation
- **Framer Motion** - Smooth UI animations and transitions
- **EXIFR** - EXIF data extraction from images
- **Lucide React** - Beautiful icon library

## 📋 Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Supabase account (for backend services)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Time-Machine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Analytics (Optional):**
   - Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
   - Get your Measurement ID (G-XXXXXXXXXX)
   - Add to your `.env` file:
   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

5. **Run database migrations:**
   ```bash
   # Apply the migrations in supabase/migrations/
   # You can do this through the Supabase dashboard
   ```

6. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

7. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Time-Machine/
├── public/                    # Static assets and favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (Button, Input, etc.)
│   │   ├── AppIcon.jsx      # Icon component
│   │   ├── AppImage.jsx     # Image component
│   │   ├── ErrorBoundary.jsx # Error handling
│   │   └── ScrollToTop.jsx  # Scroll behavior
│   ├── contexts/            # React contexts (AuthContext)
│   ├── pages/              # Page components
│   │   ├── homepage/       # Landing page
│   │   ├── about/          # About page
│   │   ├── contact-support/ # Contact and support
│   │   ├── product-features/ # Product features
│   │   ├── how-it-works/   # How it works
│   │   ├── pricing/        # Pricing page
│   │   ├── dashboard/      # User dashboard
│   │   ├── timeline/       # Timeline view
│   │   ├── upload/         # Media upload
│   │   └── profile/        # User profile
│   ├── styles/             # Global styles and Tailwind CSS
│   ├── utils/              # Utility functions and services
│   │   ├── supabase.js     # Supabase client configuration
│   │   ├── authService.js  # Authentication service
│   │   ├── mediaService.js # Media handling service
│   │   └── contactService.js # Contact form service
│   ├── App.jsx             # Main application component
│   ├── Routes.jsx          # Application routes
│   └── index.jsx           # Application entry point
├── supabase/
│   └── migrations/         # Database migrations
├── .env                    # Environment variables
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.mjs         # Vite configuration
```

## 🧩 Available Routes

The application includes the following routes:

- **`/`** - Homepage (Landing page)
- **`/about`** - About page with team information
- **`/product-features`** - Product features showcase
- **`/how-it-works`** - How the platform works
- **`/pricing`** - Pricing plans and comparison
- **`/contact-support`** - Contact form and support
- **`/dashboard`** - User dashboard (authenticated)
- **`/timeline`** - Timeline view (authenticated)
- **`/upload`** - Media upload interface (authenticated)
- **`/profile`** - User profile management (authenticated)

## 🔧 Adding New Routes

To add new routes, update the `src/Routes.jsx` file:

```jsx
import NewPage from "pages/new-page";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* Existing routes */}
        <Route path="/new-page" element={<NewPage />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
```

## 🎨 Styling & Design

This project uses **Tailwind CSS** for styling with a comprehensive configuration:

- **Forms plugin** - Enhanced form styling and validation states
- **Typography plugin** - Beautiful text styling and readability
- **Aspect ratio plugin** - Responsive media elements
- **Container queries** - Component-specific responsive design
- **Fluid typography** - Responsive text scaling
- **Animation utilities** - Smooth transitions and micro-interactions
- **Custom color palette** - Brand colors and semantic color system

## 📱 Responsive Design

The app is built with mobile-first responsive design using Tailwind CSS breakpoints:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 📦 Available Scripts

- **`npm start`** - Start development server
- **`npm run build`** - Build for production
- **`npm run serve`** - Preview production build

To verify a production build locally:

```bash
npm run build
```

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 👥 Team

- **Muhammad Shagil Nizami** - Founder & CEO
  - Full-stack developer and entrepreneur
  - LinkedIn: [msn007](https://www.linkedin.com/in/msn007/)
  - GitHub: [shaggy786](https://github.com/shaggy786)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS
- Backend powered by Supabase

---

Built with ❤️ by Muhammad Shagil Nizami
