import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

// Mock DrawerContent
jest.mock('@components', () => ({
  DrawerContent: () => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>DrawerContent</Text>
      </View>
    );
  },
}));

// Mock MaterialCommunityIcons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

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

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn(_config => _config),
}));

describe('RootNavigator', () => {
  it('should render Navigation component', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('navigation-container')).toBeTruthy();
  });

  it('should be defined', () => {
    expect(Navigation).toBeDefined();
  });

  it('should export Navigation as a component', () => {
    expect(typeof Navigation).toBe('function');
  });

  it('should configure drawer navigator with correct options', () => {
    const drawerCalls = (createDrawerNavigator as jest.Mock).mock.calls;
    expect(drawerCalls.length).toBeGreaterThan(0);

    const drawerConfig = drawerCalls[0][0];
    expect(drawerConfig.screenOptions.drawerPosition).toBe('right');
    expect(drawerConfig.screenOptions.drawerType).toBe('front');
    expect(drawerConfig.screenOptions.headerShown).toBe(true);
  });

  it('should configure stack navigator with correct options', () => {
    const stackCalls = (createNativeStackNavigator as jest.Mock).mock.calls;
    expect(stackCalls.length).toBeGreaterThan(0);

    const stackConfig = stackCalls[0][0];
    expect(stackConfig.screenOptions.headerBackButtonDisplayMode).toBe(
      'minimal',
    );
  });

  it('should call createStaticNavigation with root stack', () => {
    expect(createStaticNavigation).toHaveBeenCalled();
  });

  it('should have drawerContent function in drawer config', () => {
    const drawerCalls = (createDrawerNavigator as jest.Mock).mock.calls;
    const drawerConfig = drawerCalls[0][0];

    expect(typeof drawerConfig.drawerContent).toBe('function');

    // Test the drawerContent function
    const mockProps = { state: {}, navigation: {}, descriptors: {} };
    const result = drawerConfig.drawerContent(mockProps);
    expect(result).toBeDefined();
  });

  it('should have drawerIcon functions for each screen', () => {
    const drawerCalls = (createDrawerNavigator as jest.Mock).mock.calls;
    const drawerConfig = drawerCalls[0][0];

    const { ROUTES } = require('@constants');

    // Test Home screen icon
    const homeOptions = drawerConfig.screens[ROUTES.HOME].options;
    expect(typeof homeOptions.drawerIcon).toBe('function');
    const homeIcon = homeOptions.drawerIcon({ color: 'red', size: 24 });
    expect(homeIcon).toBeDefined();

    // Test Reanimated screen icon
    const reanimatedOptions = drawerConfig.screens[ROUTES.REANIMATED].options;
    expect(typeof reanimatedOptions.drawerIcon).toBe('function');
    const reanimatedIcon = reanimatedOptions.drawerIcon({
      color: 'blue',
      size: 24,
    });
    expect(reanimatedIcon).toBeDefined();

    // Test TurboModules screen icon
    const turboOptions = drawerConfig.screens[ROUTES.TURBO_MODULES].options;
    expect(typeof turboOptions.drawerIcon).toBe('function');
    const turboIcon = turboOptions.drawerIcon({ color: 'green', size: 24 });
    expect(turboIcon).toBeDefined();

    // Test Settings screen icon
    const settingsOptions = drawerConfig.screens[ROUTES.SETTINGS].options;
    expect(typeof settingsOptions.drawerIcon).toBe('function');
    const settingsIcon = settingsOptions.drawerIcon({
      color: 'purple',
      size: 24,
    });
    expect(settingsIcon).toBeDefined();
  });
});
