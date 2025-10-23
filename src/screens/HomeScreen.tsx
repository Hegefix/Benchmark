import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
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

export const HomeScreen = () => {
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
      <View style={styles.content}>
        <Text style={[styles.title, textStyle]}>Home Screen</Text>
        <Text style={[styles.description, textStyle]}>
          Welcome to the Benchmark app!
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Reanimated Examples"
            onPress={() => navigation.navigate('Reanimated')}
            variant="primary"
          />

          <Button
            title="Turbo Modules"
            onPress={() => navigation.navigate('TurboModules')}
            variant="primary"
          />

          <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
            variant="primary"
          />
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
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 16,
  },
});
