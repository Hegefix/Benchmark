import React from 'react';

import { View, StyleSheet } from 'react-native';

import { FeatureScreenLayout, Typography } from '@components';
import { useTheme } from '@hooks';

export const TurboModulesScreen = () => {
  const { colors } = useTheme();

  return (
    <FeatureScreenLayout
      title="Turbo Modules"
      description="Learn about React Native's new architecture"
    >
      <View
        style={[styles.placeholder, { backgroundColor: colors.successLight }]}
      >
        <Typography
          variant="bodyLarge"
          style={[styles.placeholderText, { color: colors.success }]}
        >
          ⚡ Turbo Module examples coming soon...
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
