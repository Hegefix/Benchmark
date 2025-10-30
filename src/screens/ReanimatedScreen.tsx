import React from 'react';

import { View, StyleSheet } from 'react-native';

import { FeatureScreenLayout, Typography } from '@components';
import { useTheme } from '@hooks';

export const ReanimatedScreen = () => {
  const { colors } = useTheme();

  return (
    <FeatureScreenLayout
      title="Reanimated Examples"
      description="Learn React Native Reanimated animations here"
    >
      <View
        style={[styles.placeholder, { backgroundColor: colors.primaryLight }]}
      >
        <Typography
          variant="bodyLarge"
          style={[styles.placeholderText, { color: colors.primary }]}
        >
          🎨 Animated components coming soon...
        </Typography>
      </View>
    </FeatureScreenLayout>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    padding: 32,
    borderRadius: 12,
  },
  placeholderText: {
    textAlign: 'center',
  },
});
