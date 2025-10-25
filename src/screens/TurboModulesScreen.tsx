import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FeatureScreenLayout } from '@components';
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
        <Text style={[styles.placeholderText, { color: colors.success }]}>
          ⚡ Turbo Module examples coming soon...
        </Text>
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
    fontSize: 18,
    textAlign: 'center',
  },
});
