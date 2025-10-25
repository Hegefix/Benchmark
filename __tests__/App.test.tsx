/**
 * @format
 */

import React from 'react';

import App from '../App';
import { render } from '../src/test-utils';

// Mock Navigation component
jest.mock('@navigation/RootNavigator', () => ({
  Navigation: () => {
    const { Text, View } = require('react-native');
    return (
      <View testID="navigation">
        <Text>Navigation</Text>
      </View>
    );
  },
}));

describe('App', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('navigation')).toBeTruthy();
  });

  it('should render Navigation component', () => {
    const { getByText } = render(<App />);
    expect(getByText('Navigation')).toBeTruthy();
  });
});
