import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import { Button, ScreenContainer, Icon } from '@components';
import { useTheme } from '@hooks';
import type { RootStackParamList } from '@types';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Icon name="home" size="xl" color={colors.primary} />

        <Text style={[styles.title, { color: colors.text }]}>Home Screen</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          Welcome to the Benchmark app!
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <Icon name="animation" size="md" color={colors.primary} />
            <Button
              title="Reanimated Examples"
              onPress={() => navigation.navigate('Reanimated')}
              variant="primary"
              style={styles.buttonWithIcon}
            />
          </View>

          <View style={styles.buttonRow}>
            <Icon name="lightning-bolt" size="md" color={colors.success} />
            <Button
              title="Turbo Modules"
              onPress={() => navigation.navigate('TurboModules')}
              variant="primary"
              style={styles.buttonWithIcon}
            />
          </View>

          <View style={styles.buttonRow}>
            <Icon name="cog" size="md" color={colors.text} />
            <Button
              title="Settings"
              onPress={() => navigation.navigate('Settings')}
              variant="primary"
              style={styles.buttonWithIcon}
            />
          </View>
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
    marginTop: 16,
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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  buttonWithIcon: {
    flex: 1,
  },
});
