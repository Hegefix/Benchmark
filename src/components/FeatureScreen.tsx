import React from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';
import { ScreenContainer } from './ScreenContainer';
import { useTheme } from '@hooks';

interface FeatureScreenProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

export const FeatureScreen = ({
  title,
  description,
  icon,
  children,
  contentStyle,
  titleStyle,
  descriptionStyle,
}: FeatureScreenProps) => {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={[styles.content, contentStyle]}>
        {icon}
        <Text
          style={[
            styles.title,
            icon ? styles.titleWithIcon : null,
            { color: colors.text },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            { color: colors.textSecondary },
            descriptionStyle,
          ]}
        >
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleWithIcon: {
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    opacity: 0.8,
    marginTop: 8,
    marginBottom: 32,
    textAlign: 'center',
  },
});

