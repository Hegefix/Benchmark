import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { FeatureScreenLayout } from '@components';
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
        <Text style={[styles.placeholderText, { color: colors.primary }]}>
          🎨 Animated components coming soon...
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
