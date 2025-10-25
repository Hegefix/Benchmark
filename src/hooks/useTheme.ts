import { useColorScheme } from 'react-native';

import { colors } from '@constants';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeColors = isDarkMode ? colors.dark : colors.light;

  return {
    isDarkMode,
    colors: themeColors,
  };
};
