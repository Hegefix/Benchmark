import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@hooks';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
}: ButtonProps) => {
  const { colors } = useTheme();

  const buttonStyle =
    variant === 'primary'
      ? [styles.primaryButton, { backgroundColor: colors.primary }]
      : [styles.secondaryButton, { backgroundColor: colors.primaryLight }];
  const buttonTextStyle =
    variant === 'primary'
      ? [styles.primaryButtonText, { color: colors.onPrimary }]
      : [styles.secondaryButtonText, { color: colors.primary }];

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[buttonTextStyle, textStyle]}>{title}</Text>
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
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
