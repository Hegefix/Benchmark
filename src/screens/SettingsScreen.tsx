import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { SettingRow, ScreenContainer } from '@components';
import { useTheme } from '@hooks';

export const SettingsScreen = () => {
  const { colors, isDarkMode, scheme, preference, setPreference } = useTheme();
  const isSystemPreference = preference === 'system';

  const handleDarkModeChange = (value: boolean) => {
    setPreference(value ? 'dark' : 'light');
  };

  const handleSystemPreferenceChange = (value: boolean) => {
    if (value) {
      setPreference('system');
      return;
    }

    setPreference(scheme);
  };

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Settings</Text>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>
          <SettingRow
            label="Dark Mode"
            accessory={
              <Switch
                value={isDarkMode}
                onValueChange={handleDarkModeChange}
                disabled={isSystemPreference}
                trackColor={{ false: colors.primaryLight, true: colors.primaryLight }}
                thumbColor={isDarkMode ? colors.primary : colors.card}
                ios_backgroundColor={colors.primaryLight}
              />
            }
          />
          <SettingRow
            label="Use system theme"
            accessory={
              <Switch
                value={isSystemPreference}
                onValueChange={handleSystemPreferenceChange}
                trackColor={{ false: colors.primaryLight, true: colors.primaryLight }}
                thumbColor={isSystemPreference ? colors.primary : colors.card}
                ios_backgroundColor={colors.primaryLight}
              />
            }
          />
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>
          <SettingRow label="Version" value="1.0.0" />
          <SettingRow label="React Native" value="0.82.1" />
          <SettingRow label="Node.js" value="20.19.5" />
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Learning Topics</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});
