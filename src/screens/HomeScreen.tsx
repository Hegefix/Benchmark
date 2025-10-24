import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import { Button, ScreenContainer, Icon } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';
import type { DrawerParamList } from '@types';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();
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
            <Button
              title="Reanimated Examples"
              onPress={() => navigation.navigate(ROUTES.REANIMATED)}
              variant="primary"
              style={styles.buttonWithIcon}
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              title="Turbo Modules"
              onPress={() => navigation.navigate(ROUTES.TURBO_MODULES)}
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
