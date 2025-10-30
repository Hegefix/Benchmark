import React from 'react';

import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, ScreenContainer, Icon, Typography } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';

import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '@types';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Icon name="hand-wave" size="xl" color={colors.primary} />

        <Typography variant="h1" style={styles.title}>
          Welcome to Benchmark
        </Typography>
        <Typography variant="bodyLarge" style={styles.subtitle}>
          Learning Reanimated & Turbo Modules
        </Typography>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate(ROUTES.MAIN_DRAWER)}
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
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
