import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FeatureScreen } from '@components';
import { useTheme } from '@hooks';

export const ReanimatedScreen = () => {
  const { colors } = useTheme();

  return (
    <FeatureScreen
      title="Reanimated Examples"
      description="Learn React Native Reanimated animations here"
    >
      <View style={[styles.placeholder, { backgroundColor: colors.primaryLight }]}>
        <Text style={[styles.placeholderText, { color: colors.primary }]}>🎨 Animated components coming soon...</Text>
      </View>
    </FeatureScreen>
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
