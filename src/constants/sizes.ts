/**
 * Standard icon sizes used throughout the app
 * Following Material Design guidelines
 */
export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export type IconSize = keyof typeof ICON_SIZES;
