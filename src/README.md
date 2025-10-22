# Source Code Structure

This directory contains the main source code for the Benchmark learning project.

## Directory Structure

```
src/
├── screens/           # Screen components (full-screen views)
├── components/        # Reusable UI components
├── navigation/        # Navigation configuration and navigators
├── hooks/            # Custom React hooks
├── utils/            # Utility functions and helpers
├── types/            # TypeScript type definitions
└── constants/        # App-wide constants (colors, sizes, etc.)
```

## Guidelines

### Screens
- Full-screen components that represent entire views
- Should be used with navigation
- Example: `WelcomeScreen`, `HomeScreen`, `ProfileScreen`

### Components
- Reusable UI components
- Should be small and focused on a single responsibility
- Example: `Button`, `Card`, `AnimatedBox`

### Hooks
- Custom React hooks for shared logic
- Example: `useAnimation`, `useTheme`, `useNativeModule`

### Utils
- Pure functions and helpers
- No React-specific code
- Example: `formatDate`, `validateEmail`, `calculateDistance`

### Types
- TypeScript interfaces and types
- Shared across the application
- Example: `User`, `NavigationParams`, `ApiResponse`

### Constants
- App-wide constant values
- Example: `COLORS`, `SIZES`, `API_ENDPOINTS`

## Learning Topics

This project is focused on learning:
- **React Native Reanimated** - Advanced animations and gestures
- **Turbo Modules** - Native module development with the new architecture

