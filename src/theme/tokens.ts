/**
 * Design Tokens
 * Centralized theme configuration for consistent styling across the app
 */

export const colors = {
  light: {
    // Primary colors
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',

    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F2F2F7',
    card: '#FFFFFF',

    // Text colors
    text: '#000000',
    textSecondary: '#8E8E93',
    textTertiary: '#C7C7CC',

    // Border colors
    border: '#C6C6C8',
    borderLight: '#E5E5EA',

    // UI elements
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    // Primary colors
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    success: '#32D74B',
    warning: '#FF9F0A',
    error: '#FF453A',

    // Background colors
    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    card: '#1C1C1E',

    // Text colors
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#48484A',

    // Border colors
    border: '#38383A',
    borderLight: '#2C2C2E',

    // UI elements
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radii = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const typography = {
  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  // Font weights
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
} as const;

// Type exports for better TypeScript support
export type ColorScheme = keyof typeof colors;
export type Colors = typeof colors.light;
export type Spacing = keyof typeof spacing;
export type Radii = keyof typeof radii;
export type FontSize = keyof typeof typography.sizes;
export type FontWeight = keyof typeof typography.weights;
export type Shadow = keyof typeof shadows;
