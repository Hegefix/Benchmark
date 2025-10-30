import React, { ReactNode } from 'react';

import { View, StyleSheet } from 'react-native';

import { ScreenContainer, Icon, Typography } from '@components';
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

        <Typography variant="h2" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="body" style={styles.description}>
          {description}
        </Typography>

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
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'center',
  },
  description: {
    opacity: 0.7,
    marginBottom: 40,
    textAlign: 'center',
  },
});
