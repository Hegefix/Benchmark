import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import { Button, ScreenContainer } from '@components';
import { useTheme } from '@hooks';
import type { RootStackParamList } from '@types';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Home Screen</Text>
        <Text style={[styles.description, { color: colors.text }]}>
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
