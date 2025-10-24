import React from 'react';

import { ROUTES } from '@constants';
import { render, fireEvent } from '@test-utils';

import { HomeScreen } from '../HomeScreen';

const mockNavigate = jest.fn();

// Navigation is mocked in __mocks__ but we override navigate for testing
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Mock components to avoid rendering complexity
jest.mock('@components', () => ({
  Button: ({ title, onPress }: any) => {
    const { Text, TouchableOpacity } = require('react-native');
    return (
      <TouchableOpacity onPress={onPress} testID={`button-${title}`}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  },
  ScreenContainer: ({ children }: any) => {
    const { View } = require('react-native');
    return <View>{children}</View>;
  },
  Icon: ({ name }: any) => {
    const { Text } = require('react-native');
    return <Text testID={`icon-${name}`}>{name}</Text>;
  },
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render home title', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Home Screen')).toBeTruthy();
  });

  it('should render welcome message', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Welcome to the Benchmark app!')).toBeTruthy();
  });

  it('should render Reanimated Examples button', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Reanimated Examples')).toBeTruthy();
  });

  it('should render Turbo Modules button', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Turbo Modules')).toBeTruthy();
  });

  it('should navigate to Reanimated when button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Reanimated Examples'));
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.REANIMATED);
  });

  it('should navigate to TurboModules when button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Turbo Modules'));
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.TURBO_MODULES);
  });
});
