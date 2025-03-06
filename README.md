# Card Infrastructure Management System

A modern web application for managing card profiles, requests, and related banking operations. This project demonstrates frontend development skills using React, TypeScript, and modern web technologies.

## Features

- Dashboard Overview: Visual analytics and quick access to key functions
- Card Profile Management: Create, view, edit, and delete card profiles
- Card Request Handling: Process card requests through various stages
- Responsive UI: Clean, modern interface built with Tailwind CSS
- Data Visualization: Charts and statistics for business insights

## Technology Stack

- Framework: React 19 with TypeScript
- Routing: React Router 7
- Styling: Tailwind CSS 4
- UI Components: Custom components with Radix UI primitives
- Charts: Recharts for data visualization
- Form Handling: React Hook Form with Zod validation
- Build Tool: Vite 6

## Project Structure

```
src/
├── assets/         # Static assets and images
├── components/     # Reusable UI components
├── constants/      # Application constants and configuration
├── domains/        # Domain-specific components and logic
├── lib/            # Utility functions and helpers
├── pages/          # Page components for each route
└── App.tsx         # Main application component with routing
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:5173

## Development Approach

- Component Architecture: Modular components with clear separation of concerns
- Type Safety: Comprehensive TypeScript types for enhanced code quality
- Performance Optimization: Lazy loading of routes for faster initial load
- Code Organization: Structured by domain and feature for maintainability
- Responsive Design: Mobile-friendly layouts using Tailwind's utility classes

## Testing

Run the test suite:
```bash
npm run test
```

## Building for Production

Create optimized production files:
```bash
npm run build
```
This generates optimized production files in the `dist` directory.