import React from 'react';

import { render } from '@test-utils';

import { SettingsScreen } from '../SettingsScreen';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
      card: '#f5f5f5',
    },
  }),
}));

jest.mock('@components', () => ({
  ScreenContainer: ({ children }: any) => {
    const { View } = require('react-native');
    return <View>{children}</View>;
  },
  SettingRow: ({ label, value }: any) => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>{label}</Text>
        <Text>{value}</Text>
      </View>
    );
  },
}));

describe('SettingsScreen', () => {
  it('should render screen title', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Settings')).toBeTruthy();
  });

  it('should render About section title', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('About')).toBeTruthy();
  });

  it('should render Learning Topics section title', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Learning Topics')).toBeTruthy();
  });

  it('should render version information', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Version')).toBeTruthy();
    expect(getByText('1.0.0')).toBeTruthy();
  });

  it('should render React Native version', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('React Native')).toBeTruthy();
    expect(getByText('0.82.1')).toBeTruthy();
  });

  it('should render Node.js version', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Node.js')).toBeTruthy();
    expect(getByText('20.19.5')).toBeTruthy();
  });

  it('should render Reanimated status', () => {
    const { getAllByText } = render(<SettingsScreen />);
    expect(getAllByText('Ready').length).toBeGreaterThan(0);
  });

  it('should render Turbo Modules status', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Turbo Modules')).toBeTruthy();
  });
});
