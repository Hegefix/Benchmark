/**
 * Type definitions for test mocks
 * Improves type safety in test files
 */

import type { ReactNode } from 'react';

import type { IconSize } from '@constants';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

/**
 * Mock props for Icon component in tests
 */
export interface MockIconProps {
  name: string;
  size?: IconSize | number;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
}

/**
 * Mock props for Button component in tests
 */
export interface MockButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  testID?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
}

/**
 * Mock props for ScreenContainer component in tests
 */
export interface MockScreenContainerProps {
  children: ReactNode;
}

/**
 * Mock props for FeatureScreenLayout component in tests
 */
export interface MockFeatureScreenLayoutProps {
  title: string;
  description: string;
  iconName?: string;
  iconSize?: IconSize;
  children?: ReactNode;
}

/**
 * Mock props for SettingRow component in tests
 */
export interface MockSettingRowProps {
  label: string;
  value: string;
}

/**
 * Mock props for DrawerContent component in tests
 */
export interface MockDrawerContentProps extends DrawerContentComponentProps {
  userName?: string;
  userEmail?: string;
}
