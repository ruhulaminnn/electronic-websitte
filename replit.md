# Replit.md

## Overview

This is a React frontend application built with Vite as the build tool and bundler. The project uses JavaScript/JSX with optional TypeScript support, and Tailwind CSS for styling. It's configured as a modern single-page application (SPA) starter template optimized for development on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 for building the user interface
- **Build Tool**: Vite 5 for fast development with Hot Module Reloading (HMR) and optimized production builds
- **Language**: JavaScript with JSX, with TypeScript support available (files can be renamed from `.jsx` to `.tsx`)
- **Styling**: Tailwind CSS 4 with PostCSS and Autoprefixer for utility-first CSS

### Project Structure

- `index.html` - Entry HTML file that loads the React application
- `src/` - Source directory containing React components and styles
- `src/index.jsx` - Main entry point that bootstraps the React app
- `src/App.css` - Global styles with Tailwind directives
- `vite.config.js` - Vite configuration with React plugin and server settings
- `tailwind.config.js` - Tailwind CSS configuration scanning HTML and source files
- `postcss.config.js` - PostCSS configuration loading Tailwind and Autoprefixer

### Development Server

The Vite dev server is configured to:
- Run on host `0.0.0.0` (accessible externally, required for Replit)
- Use port 5000
- Allow all hosts for Replit compatibility

### Build Configuration

- ESNext target for modern JavaScript
- Strict TypeScript checking enabled
- Module resolution set to Node
- JSX configured for React 17+ automatic runtime

## External Dependencies

### Core Libraries

| Package | Purpose |
|---------|---------|
| react | UI component library |
| react-dom | React DOM rendering |
| vite | Build tool and dev server |
| @vitejs/plugin-react | Vite plugin for React support |

### Styling

| Package | Purpose |
|---------|---------|
| tailwindcss | Utility-first CSS framework |
| postcss | CSS transformation tool |
| autoprefixer | Adds vendor prefixes to CSS |

### Type Definitions

| Package | Purpose |
|---------|---------|
| @types/react | TypeScript types for React |
| @types/react-dom | TypeScript types for React DOM |
| typescript | TypeScript compiler |

### External Services

No external APIs, databases, or third-party services are currently integrated. This is a frontend-only template ready for additional integrations as needed.