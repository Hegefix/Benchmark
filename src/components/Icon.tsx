import React from 'react';

import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ICON_SIZES, IconSize } from '@constants';
import { useTheme } from '@hooks';

interface IconProps {
  /**
   * Icon name from MaterialCommunityIcons
   * Browse all icons: https://materialdesignicons.com
   */
  name: string;
  /**
   * Icon size - can be a preset size or custom number
   */
  size?: IconSize | number;
  /**
   * Icon color - defaults to theme text color
   */
  color?: string;
  /**
   * Additional styles
   */
  style?: ViewStyle | TextStyle | ImageStyle;
  /**
   * Accessibility label for screen readers
   */
  accessibilityLabel?: string;
}

/**
 * Icon component using MaterialCommunityIcons
 *
 * @example
 * <Icon name="home" size="md" />
 * <Icon name="account" size={32} color="#007AFF" />
 */
export const Icon = ({
  name,
  size = 'md',
  color,
  style,
  accessibilityLabel,
}: IconProps) => {
  const { colors } = useTheme();

  // If size is a string (preset), get the value from ICON_SIZES
  const iconSize = typeof size === 'string' ? ICON_SIZES[size] : size;

  return (
    <MaterialCommunityIcons
      name={name}
      size={iconSize}
      color={color || colors.text}
      style={style}
      accessibilityLabel={accessibilityLabel || name}
      accessibilityRole="image"
    />
  );
};
