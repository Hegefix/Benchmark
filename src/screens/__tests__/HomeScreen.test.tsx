import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../HomeScreen';

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

  it('should render Settings button', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Settings')).toBeTruthy();
  });

  it('should navigate to Reanimated when button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Reanimated Examples'));
    expect(mockNavigate).toHaveBeenCalledWith('Reanimated');
  });

  it('should navigate to TurboModules when button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Turbo Modules'));
    expect(mockNavigate).toHaveBeenCalledWith('TurboModules');
  });

  it('should navigate to Settings when button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Settings'));
    expect(mockNavigate).toHaveBeenCalledWith('Settings');
  });
});

