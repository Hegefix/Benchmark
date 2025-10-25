import React, { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { ScreenContainer, Icon } from '@components';
import { useTheme } from '@hooks';

import type { IconSize } from '@constants';

interface FeatureScreenLayoutProps {
  title: string;
  description: string;
  iconName?: string;
  iconSize?: IconSize;
  children?: ReactNode;
}

export const FeatureScreenLayout = ({
  title,
  description,
  iconName,
  iconSize = 'xl',
  children,
}: FeatureScreenLayoutProps) => {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        {iconName && (
          <Icon name={iconName} size={iconSize} color={colors.primary} />
        )}

        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          {description}
        </Text>

        {children}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 40,
    textAlign: 'center',
  },
});
