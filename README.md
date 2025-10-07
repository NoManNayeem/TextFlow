# TextFlow

[![Deploy to GitHub Pages](https://github.com/NoManNayeem/TextFlow/actions/workflows/deploy.yml/badge.svg)](https://github.com/NoManNayeem/TextFlow/actions/workflows/deploy.yml)

Transform your social media posts with beautiful text formatting using Unicode characters. Create professional LinkedIn, Facebook, and other social media posts with bold, italic, underline, strikethrough, and more. 100% client-side, free forever.

- **Live Preview**: https://nomannayeem.github.io/TextFlow/
- **Repository**: https://github.com/NoManNayeem/TextFlow

## ✨ Features

### 🎨 Text Formatting
- **Unicode formatting**: Bold, Italic, Underline, Strikethrough
- **Case converters**: UPPERCASE, lowercase, Title Case
- **Lists**: Bullet points and numbered lists
- **Mixed formatting**: Apply different styles to different parts of your text

### 🖥️ Platform-Specific Editors
- **LinkedIn Editor**: Authentic LinkedIn post interface with character limits (3,000 chars)
- **Facebook Editor**: Facebook-style post composer with visual elements
- **Generic Editor**: Clean, general-purpose text editor

### ⚡ User Experience
- **Real-time preview**: See exactly how your post will look on each platform
- **Character counters**: Live character, word, and sentence counts with platform limits
- **Keyboard shortcuts**: Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline)
- **One-click actions**: Copy to clipboard, download as text file, clear editor
- **Responsive design**: Works perfectly on desktop, tablet, and mobile
- **Dark mode**: Toggle between light and dark themes

### 🔒 Privacy & Performance
- **100% client-side**: Your text never leaves your browser
- **No data collection**: No tracking, no analytics, no data storage
- **Instant formatting**: Real-time text transformation
- **Offline capable**: Works without internet connection

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React, React Icons
- **State Management**: React hooks
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with theme provider
│   ├── page.js            # Home page (main formatter)
│   ├── about/page.js      # About page
│   └── tutorial/page.js   # Tutorial and guides
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── FormatterPage.jsx # Main formatter interface
│   ├── TextEditor.jsx    # Platform-specific editors
│   ├── FormattingToolbar.jsx # Formatting controls
│   ├── PlatformSelector.jsx  # Platform switcher
│   ├── EditorActions.jsx # Copy, download, reset actions
│   ├── MainLayout.jsx    # App layout wrapper
│   ├── Navbar.jsx        # Navigation component
│   └── Footer.jsx        # Footer component
├── hooks/                # Custom React hooks
│   └── useKeyboardShortcuts.js
└── lib/                  # Utility functions
    ├── formatUtils.js    # Text formatting logic
    └── utils.js          # General utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NoManNayeem/TextFlow.git
cd TextFlow

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Static Export (for GitHub Pages)
npm run build        # Build the application
npm run export       # Export as static site to ./out
```

## 📖 How to Use

1. **Select Platform**: Choose LinkedIn, Facebook, or Generic editor
2. **Type Your Content**: Write or paste your text in the editor
3. **Format Text**: 
   - Select any text
   - Click formatting buttons or use keyboard shortcuts
   - Mix different formats for professional results
4. **Copy & Post**: Copy formatted text and paste into your social media platform

### Keyboard Shortcuts
- `Ctrl+B` (or `Cmd+B` on Mac): Bold
- `Ctrl+I` (or `Cmd+I` on Mac): Italic  
- `Ctrl+U` (or `Cmd+U` on Mac): Underline

## 🎯 Supported Platforms

- **LinkedIn**: Professional posts with 3,000 character limit
- **Facebook**: Social posts with visual interface
- **Twitter/X**: Compatible with Unicode formatting
- **Instagram**: Bio and caption formatting
- **Any platform**: Works anywhere Unicode is supported

## 🚀 Deployment

### GitHub Pages (Current Setup)

The project is configured for automatic deployment to GitHub Pages:

1. Push changes to `main` branch
2. GitHub Actions automatically builds and deploys
3. Live site updates at: https://nomannayeem.github.io/TextFlow/

### Manual Deployment

```bash
# Build static site
npm run build
npm run export

# Deploy ./out folder to any static hosting service
# (Vercel, Netlify, GitHub Pages, etc.)
```

### Other Hosting Options

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `out` folder
- **AWS S3**: Upload static files to S3 bucket
- **Any static host**: The `out` folder contains all necessary files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for the professional community**
