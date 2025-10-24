import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FeatureScreen } from '@components';
import { useTheme } from '@hooks';

export const TurboModulesScreen = () => {
  const { colors } = useTheme();

  return (
    <FeatureScreen
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
