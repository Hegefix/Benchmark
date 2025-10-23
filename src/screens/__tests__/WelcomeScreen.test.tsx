import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { WelcomeScreen } from '../WelcomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
    },
  }),
}));

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

  it('should navigate to Home when Get Started is pressed', () => {
    const { getByText } = render(<WelcomeScreen />);
    const button = getByText('Get Started');

    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });
});

