import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  ScrollView,
} from 'react-native';

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
    <SafeAreaView style={[styles.container, backgroundStyle]}>
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
    </SafeAreaView>
  );
};

interface SettingRowProps {
  label: string;
  value: string;
  isDarkMode: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({label, value, isDarkMode}) => {
  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const valueStyle = {
    color: isDarkMode ? '#a0a0a0' : '#666666',
  };

  return (
    <View style={styles.row}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});

