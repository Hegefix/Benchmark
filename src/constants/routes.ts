/**
 * Route Constants
 * Centralized route names for type-safe navigation
 */

export const ROUTES = {
  // Root Stack Routes
  WELCOME: 'Welcome',
  MAIN_DRAWER: 'MainDrawer',

  // Drawer Routes
  HOME: 'Home',
  REANIMATED: 'Reanimated',
  TURBO_MODULES: 'TurboModules',
  SETTINGS: 'Settings',
} as const;

// Type for route names
export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
