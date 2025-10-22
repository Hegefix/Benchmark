import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

export const ReanimatedScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={styles.content}>
        <Text style={[styles.title, textStyle]}>Reanimated Examples</Text>
        <Text style={[styles.description, textStyle]}>
          Learn React Native Reanimated animations here
        </Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            🎨 Animated components coming soon...
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
    backgroundColor: '#007AFF20',
  },
  placeholderText: {
    fontSize: 18,
    color: '#007AFF',
    textAlign: 'center',
  },
});

