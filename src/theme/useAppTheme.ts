import { useColorScheme } from 'react-native';

import {
  colors,
  spacing,
  radii,
  typography,
  shadows,
  type ColorScheme,
} from './tokens';

export interface AppTheme {
  colors: typeof colors.light | typeof colors.dark;
  spacing: typeof spacing;
  radii: typeof radii;
  typography: typeof typography;
  shadows: typeof shadows;
  colorScheme: ColorScheme;
  isDark: boolean;
}

/**
 * Hook to access the current app theme
 * Automatically switches between light and dark mode based on system settings
 */
export const useAppTheme = (): AppTheme => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const themeColors = isDark ? colors.dark : colors.light;

  return {
    colors: themeColors,
    spacing,
    radii,
    typography,
    shadows,
    colorScheme: isDark ? 'dark' : 'light',
    isDark,
  };
};
