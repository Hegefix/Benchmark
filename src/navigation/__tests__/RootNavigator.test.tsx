import React from 'react';

import { render } from '@test-utils';

import { Navigation } from '../RootNavigator';

// Mock all screens
jest.mock('@screens', () => ({
  WelcomeScreen: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>WelcomeScreen</Text>
      </View>
    );
  },
  HomeScreen: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  },
  ReanimatedScreen: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>ReanimatedScreen</Text>
      </View>
    );
  },
  TurboModulesScreen: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>TurboModulesScreen</Text>
      </View>
    );
  },
  SettingsScreen: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  },
}));

// Mock createStaticNavigation
jest.mock('@react-navigation/native', () => ({
  createStaticNavigation: jest.fn(_config => {
    return () => {
      const { Text, View } = require('react-native');
      return (
        <View testID="navigation-container">
          <Text>Navigation</Text>
        </View>
      );
    };
  }),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(_config => _config),
}));

describe('RootNavigator', () => {
  it('should render Navigation component', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('navigation-container')).toBeTruthy();
  });

  it('should be defined', () => {
    expect(Navigation).toBeDefined();
  });
});
