
# Modern React Dashboard Application

A sophisticated React dashboard application built with modern technologies and best practices.

## 🚀 Technologies

This project leverages the following technologies:

- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework

## 📁 Component Structure

### Root Level (`App.tsx`)
- Provides core providers (QueryClient, Tooltip, Toast)
- Handles route configuration
- Houses the main layout structure

### Layout Component (`Layout.tsx`)
- Implements responsive navigation
- Uses glass morphism design pattern
- Handles route-based active state management
- Provides consistent layout wrapper for all pages

### Dashboard Page (`Dashboard.tsx`)
- Three main visualization sections:
  - Counter Trend (LineChart)
  - User Activity (BarChart)
  - User Profile Grid
- Uses Recharts for data visualization
- Implements responsive grid layout
- Uses shadcn/ui Card components for consistent styling

### Counter Page (`Counter.tsx`)
- Manages count state
- Implements dynamic background intensity
- Uses animation for transitions
- Provides increment/decrement/reset functionality

### User Form Page (`UserForm.tsx`)
- Form handling with React Hook Form
- Implements unsaved changes detection
- Uses local storage for data persistence
- Toast notifications for user feedback

### Rich Text Editor Page (`RichTextEditor.tsx`)
- Basic text formatting capabilities
- Real-time content updates
- Displays user data in editable format
- Rich formatting toolbar
- Live preview functionality

## 🏗️ Project Architecture

### State Management
- Local state with React hooks
- Route state with React Router
- Form state with React Hook Form
- Data persistence with Local Storage
- Toast notifications for user feedback

### UI/UX Features
- Responsive design
- Glass morphism effects
- Smooth animations
- Interactive data visualizations
- Consistent error handling
- Loading state management

### Best Practices
- TypeScript for type safety
- Modular component structure
- Consistent file naming
- Reusable utility functions
- Performance optimizations

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser
