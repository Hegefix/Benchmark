import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import { SettingRow, ScreenContainer, Typography } from '@components';
import { useTheme } from '@hooks';

export const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <Typography variant="h1" style={styles.title}>
          Settings
        </Typography>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Typography variant="h3" style={styles.sectionTitle}>
            About
          </Typography>
          <SettingRow label="Version" value="1.0.0" />
          <SettingRow label="React Native" value="0.82.1" />
          <SettingRow label="Node.js" value="20.19.5" />
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Typography variant="h3" style={styles.sectionTitle}>
            Learning Topics
          </Typography>
          <SettingRow label="Reanimated" value="Ready" />
          <SettingRow label="Turbo Modules" value="Ready" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 24,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 12,
  },
});
