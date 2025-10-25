import React from 'react';

import { Text } from 'react-native';

import { render } from '@test-utils';

import { ScreenContainer } from '../ScreenContainer';

// Mock useTheme hook
jest.mock('@hooks', () => ({
  useTheme: () => ({
    isDarkMode: false,
    colors: {
      background: '#ffffff',
    },
  }),
}));

describe('ScreenContainer', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <ScreenContainer>
        <Text>Test Content</Text>
      </ScreenContainer>,
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should render multiple children', () => {
    const { getByText } = render(
      <ScreenContainer>
        <Text>First Child</Text>
        <Text>Second Child</Text>
      </ScreenContainer>,
    );

    expect(getByText('First Child')).toBeTruthy();
    expect(getByText('Second Child')).toBeTruthy();
  });

  it('should apply custom style when provided', () => {
    const customStyle = { padding: 20 };
    const { getByText } = render(
      <ScreenContainer style={customStyle}>
        <Text>Styled Content</Text>
      </ScreenContainer>,
    );

    expect(getByText('Styled Content')).toBeTruthy();
  });

  it('should render with dark mode', () => {
    jest.resetModules();
    jest.doMock('@hooks', () => ({
      useTheme: () => ({
        isDarkMode: true,
        colors: {
          background: '#1a1a1a',
        },
      }),
    }));

    const { getByText } = render(
      <ScreenContainer>
        <Text>Dark Mode Content</Text>
      </ScreenContainer>,
    );

    expect(getByText('Dark Mode Content')).toBeTruthy();
  });
});
