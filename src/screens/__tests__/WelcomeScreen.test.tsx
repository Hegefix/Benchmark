import React from 'react';
import { render, fireEvent } from '@test-utils';
import { WelcomeScreen } from '../WelcomeScreen';

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

describe('WelcomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render welcome title', () => {
    const { getByText } = render(<WelcomeScreen />);
    expect(getByText('Welcome to Benchmark')).toBeTruthy();
  });

  it('should render subtitle', () => {
    const { getByText } = render(<WelcomeScreen />);
    expect(getByText('Learning Reanimated & Turbo Modules')).toBeTruthy();
  });

  it('should render Get Started button', () => {
    const { getByText } = render(<WelcomeScreen />);
    expect(getByText('Get Started')).toBeTruthy();
  });

  it('should navigate to MainDrawer when Get Started is pressed', () => {
    const { ROUTES } = require('@constants');
    const { getByText } = render(<WelcomeScreen />);
    const button = getByText('Get Started');

    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.MAIN_DRAWER);
  });
});
