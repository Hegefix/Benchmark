import React, { ReactNode } from 'react';

import { Text, TextStyle, TextProps } from 'react-native';

import { useTheme } from '@hooks';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'caption'
  | 'button'
  | 'buttonSmall';

interface TypographyProps extends TextProps {
  /**
   * Text variant style
   * @default "body"
   */
  variant?: TypographyVariant;
  /**
   * Text content
   */
  children: ReactNode;
}

const FONT_FAMILIES = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
} as const;

const variantStyles: Record<TypographyVariant, TextStyle> = {
  h1: {
    fontSize: 32,
    fontFamily: FONT_FAMILIES.bold,
    fontWeight: '700',
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    fontFamily: FONT_FAMILIES.bold,
    fontWeight: '700',
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontFamily: FONT_FAMILIES.semiBold,
    fontWeight: '600',
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.regular,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodyLarge: {
    fontSize: 18,
    fontFamily: FONT_FAMILIES.regular,
    fontWeight: '400',
    lineHeight: 26,
  },
  bodyMedium: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.medium,
    fontWeight: '500',
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontFamily: FONT_FAMILIES.regular,
    fontWeight: '400',
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontFamily: FONT_FAMILIES.regular,
    fontWeight: '400',
    lineHeight: 16,
  },
  button: {
    fontSize: 18,
    fontFamily: FONT_FAMILIES.semiBold,
    fontWeight: '600',
    lineHeight: 24,
  },
  buttonSmall: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.semiBold,
    fontWeight: '600',
    lineHeight: 22,
  },
};

export const Typography = ({
  variant = 'body',
  children,
  style,
  ...props
}: TypographyProps) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[variantStyles[variant], { color: colors.text }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
