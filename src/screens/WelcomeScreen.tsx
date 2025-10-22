import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';

export const WelcomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Text style={[styles.title, textStyle]}>Welcome to Benchmark</Text>
        <Text style={[styles.subtitle, textStyle]}>
          Learning Reanimated & Turbo Modules
        </Text>
        <View style={styles.infoContainer}>
          <InfoCard
            title="React Native"
            version="0.82.1"
            isDarkMode={isDarkMode}
          />
          <InfoCard title="Node.js" version="20.19.5" isDarkMode={isDarkMode} />
          <InfoCard
            title="Status"
            version="Ready to Learn 🚀"
            isDarkMode={isDarkMode}
          />
        </View>
      </View>
    </View>
  );
};

interface InfoCardProps {
  title: string;
  version: string;
  isDarkMode: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, version, isDarkMode }) => {
  const cardStyle = {
    backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const versionStyle = {
    color: isDarkMode ? '#a0a0a0' : '#666666',
  };

  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[styles.cardTitle, textStyle]}>{title}</Text>
      <Text style={[styles.cardVersion, versionStyle]}>{version}</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    opacity: 0.7,
  },
  infoContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 16,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardVersion: {
    fontSize: 14,
    fontWeight: '500',
  },
});
