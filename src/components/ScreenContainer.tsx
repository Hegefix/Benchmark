import React from 'react';
import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { useTheme } from '@hooks';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScreenContainer = ({ children, style }: ScreenContainerProps) => {
  const { isDarkMode, colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }, style]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
