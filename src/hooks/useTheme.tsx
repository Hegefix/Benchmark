import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import colors from '@constants/colors.json';

type ThemeName = 'light' | 'dark';
type ThemePreference = ThemeName | 'system';

type ThemeColors = {
  background: string;
  text: string;
  textSecondary: string;
  card: string;
  primary: string;
  primaryLight: string;
  onPrimary: string;
  success: string;
  successLight: string;
};

interface ThemeContextValue {
  colors: ThemeColors;
  isDarkMode: boolean;
  scheme: ThemeName;
  preference: ThemePreference;
  isSystemPreference: boolean;
  setPreference: (preference: ThemePreference) => void;
  toggleScheme: () => void;
}

const palette = colors as Record<ThemeName, ThemeColors>;

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const systemScheme = useColorScheme();
  const [preference, setPreference] = useState<ThemePreference>('system');

  const resolvedScheme: ThemeName =
    preference === 'system'
      ? systemScheme === 'dark'
        ? 'dark'
        : 'light'
      : preference;

  const themeColors = palette[resolvedScheme];

  const selectPreference = useCallback(
    (next: ThemePreference) => {
      setPreference(next);
    },
    [setPreference],
  );

  const toggleScheme = useCallback(() => {
    setPreference(prev => {
      const current = prev === 'system' ? resolvedScheme : prev;
      return current === 'dark' ? 'light' : 'dark';
    });
  }, [resolvedScheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colors: themeColors,
      isDarkMode: resolvedScheme === 'dark',
      scheme: resolvedScheme,
      preference,
      isSystemPreference: preference === 'system',
      setPreference: selectPreference,
      toggleScheme,
    }),
    [themeColors, resolvedScheme, preference, selectPreference, toggleScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
