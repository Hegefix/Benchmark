import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import { Button } from '@components';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Reanimated: undefined;
  TurboModules: undefined;
  Settings: undefined;
};

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Home')}
            variant="primary"
          />

          <View style={styles.secondaryButtonsRow}>
            <Button
              title="🎨 Reanimated"
              onPress={() => navigation.navigate('Reanimated')}
              variant="secondary"
            />

            <Button
              title="⚡ Turbo Modules"
              onPress={() => navigation.navigate('TurboModules')}
              variant="secondary"
            />
          </View>
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
    marginBottom: 32,
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
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 12,
  },
  secondaryButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
