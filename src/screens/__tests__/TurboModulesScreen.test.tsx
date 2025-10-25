import React from 'react';
import { render } from '@test-utils';
import { TurboModulesScreen } from '../TurboModulesScreen';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
      success: '#34C759',
      successLight: '#34C75920',
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

describe('TurboModulesScreen', () => {
  it('should render screen title', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(getByText('Turbo Modules')).toBeTruthy();
  });

  it('should render description', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(
      getByText("Learn about React Native's new architecture"),
    ).toBeTruthy();
  });

  it('should render placeholder text', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(getByText('⚡ Turbo Module examples coming soon...')).toBeTruthy();
  });
});
