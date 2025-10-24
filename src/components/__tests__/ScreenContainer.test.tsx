import React from 'react';
import { render } from '@test-utils';
import { Text } from 'react-native';
import { ScreenContainer } from '../ScreenContainer';
import { useTheme } from '@hooks';

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

  it('should render with dark mode preference', () => {
    const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
      const { setPreference } = useTheme();

      React.useEffect(() => {
        setPreference('dark');
      }, [setPreference]);

      return <>{children}</>;
    };

    const { getByText } = render(
      <DarkModeWrapper>
        <ScreenContainer>
          <Text>Dark Mode Content</Text>
        </ScreenContainer>
      </DarkModeWrapper>,
    );

    expect(getByText('Dark Mode Content')).toBeTruthy();
  });
});
