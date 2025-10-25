import React from 'react';

import { render } from '@test-utils';

import { ReanimatedScreen } from '../ReanimatedScreen';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
      primary: '#007AFF',
      primaryLight: '#007AFF20',
    },
  }),
}));

jest.mock('@components', () => ({
  ScreenContainer: ({ children }: any) => {
    const { View } = require('react-native');
    return <View>{children}</View>;
  },
  FeatureScreenLayout: ({ title, description, children }: any) => {
    const { View, Text } = require('react-native');
    return (
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        {children}
      </View>
    );
  },
}));

describe('ReanimatedScreen', () => {
  it('should render screen title', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(getByText('Reanimated Examples')).toBeTruthy();
  });

  it('should render description', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(
      getByText('Learn React Native Reanimated animations here'),
    ).toBeTruthy();
  });

  it('should render placeholder text', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(getByText('🎨 Animated components coming soon...')).toBeTruthy();
  });
});
