import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { Typography } from '@components';
import { useTheme } from '@hooks';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
  /**
   * Accessibility label for screen readers
   * Defaults to title if not provided
   */
  accessibilityLabel?: string;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  accessibilityLabel,
  disabled = false,
}: ButtonProps) => {
  const { colors } = useTheme();

  const buttonStyle =
    variant === 'primary'
      ? [styles.primaryButton, { backgroundColor: colors.primary }]
      : [styles.secondaryButton, { backgroundColor: colors.primaryLight }];
  const buttonTextStyle =
    variant === 'primary'
      ? [styles.primaryButtonText, { color: colors.background }]
      : [styles.secondaryButtonText, { color: colors.primary }];

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled }}
    >
      <Typography
        variant={variant === 'primary' ? 'button' : 'buttonSmall'}
        style={[buttonTextStyle, textStyle]}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    // Font styles handled by Typography component
  },
  secondaryButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    // Font styles handled by Typography component
  },
});
