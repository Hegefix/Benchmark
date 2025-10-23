import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import { Button, ScreenContainer } from '@components';
import { useTheme } from '@hooks';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Reanimated: undefined;
  TurboModules: undefined;
  Settings: undefined;
};

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to Benchmark
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Learning Reanimated & Turbo Modules
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Home')}
            variant="primary"
          />
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
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 12,
  },
});
