import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { SettingRow } from '@components';

export const SettingsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, textStyle]}>Settings</Text>

        <View style={[styles.section, cardStyle]}>
          <Text style={[styles.sectionTitle, textStyle]}>About</Text>
          <SettingRow label="Version" value="1.0.0" isDarkMode={isDarkMode} />
          <SettingRow
            label="React Native"
            value="0.82.1"
            isDarkMode={isDarkMode}
          />
          <SettingRow label="Node.js" value="20.19.5" isDarkMode={isDarkMode} />
        </View>

        <View style={[styles.section, cardStyle]}>
          <Text style={[styles.sectionTitle, textStyle]}>Learning Topics</Text>
          <SettingRow
            label="Reanimated"
            value="Ready"
            isDarkMode={isDarkMode}
          />
          <SettingRow
            label="Turbo Modules"
            value="Ready"
            isDarkMode={isDarkMode}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});
