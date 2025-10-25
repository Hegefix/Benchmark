/**
 * Centralized route name constants for React Navigation.
 * This helps prevent typos and provides type safety for navigation.
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

/**
 * Type representing all possible route names.
 */
export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
