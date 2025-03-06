# Card Infrastructure Management System

A modern web application for managing card profiles, requests, and related banking operations. This project demonstrates frontend development skills using React, TypeScript, and modern web technologies.

## Features

- **Dashboard Overview**: Visual analytics and quick access to key functions
- **Card Profile Management**: Create, view, edit, and delete card profiles
- **Card Request Handling**: Process card requests through various stages
- **Responsive UI**: Clean, modern interface built with Tailwind CSS
- **Data Visualization**: Charts and statistics for business insights

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with Radix UI primitives
- **Charts**: Recharts for data visualization
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite 6

## Project Structure

```
src/
├── assets/         # Static assets and images
├── components/     # Reusable UI components
├── constants/      # Application constants and configuration
├── features/       # Feature-specific components and logic
├── hooks/          # Custom React hooks
├── mock/           # Mock data for development
├── pages/          # Page components for each route
├── schemas/        # Validation schemas
├── types/          # TypeScript type definitions
├── utils/          # Utility functions and helpers
└── App.tsx         # Main application component with routing
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sample-tayo/core-infra-assignment.git
   cd card-infrastructure-management
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to http://localhost:5173

## Testing

Run the test suite:

```bash
npm run test
# or
yarn test
```

## Building for Production

Create optimized production files:

```bash
npm run build
# or
yarn build
```

This generates optimized production files in the dist directory.
