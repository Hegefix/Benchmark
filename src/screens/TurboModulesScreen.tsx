import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

export const TurboModulesScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.content}>
        <Text style={[styles.title, textStyle]}>Turbo Modules</Text>
        <Text style={[styles.description, textStyle]}>
          Learn about React Native's new architecture
        </Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            ⚡ Turbo Module examples coming soon...
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    backgroundColor: '#34C75920',
  },
  placeholderText: {
    fontSize: 18,
    color: '#34C759',
    textAlign: 'center',
  },
});

