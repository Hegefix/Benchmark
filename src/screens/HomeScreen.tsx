import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import { Button, FeatureScreen, Icon } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';
import type { DrawerParamList } from '@types';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();
  const { colors } = useTheme();

  return (
    <FeatureScreen
      icon={<Icon name="home" size="xl" color={colors.primary} />}
      title="Home Screen"
      description="Welcome to the Benchmark app!"
      contentStyle={styles.content}
    >
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
    </FeatureScreen>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 12,
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
