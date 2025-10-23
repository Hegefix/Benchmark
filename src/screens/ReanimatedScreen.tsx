import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@components';
import { useTheme } from '@hooks';

export const ReanimatedScreen = () => {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Reanimated Examples
        </Text>
        <Text style={[styles.description, { color: colors.text }]}>
          Learn React Native Reanimated animations here
        </Text>
        <View
          style={[styles.placeholder, { backgroundColor: colors.primaryLight }]}
        >
          <Text style={[styles.placeholderText, { color: colors.primary }]}>
            🎨 Animated components coming soon...
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 40,
    textAlign: 'center',
  },
  placeholder: {
    padding: 32,
    borderRadius: 12,
  },
  placeholderText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
