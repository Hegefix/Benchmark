import React from 'react';
import { View } from 'react-native';
import { render } from '@test-utils';
import { SettingRow } from '../SettingRow';
import { useTheme } from '@hooks';

describe('SettingRow', () => {
  it('should render label and value correctly', () => {
    const { getByText } = render(<SettingRow label="Version" value="1.0.0" />);

    expect(getByText('Version')).toBeTruthy();
    expect(getByText('1.0.0')).toBeTruthy();
  });

  it('should render with different label and value', () => {
    const { getByText } = render(
      <SettingRow label="React Native" value="0.82.1" />,
    );

    expect(getByText('React Native')).toBeTruthy();
    expect(getByText('0.82.1')).toBeTruthy();
  });

  it('should render accessory content when provided', () => {
    const { getByTestId, queryByText } = render(
      <SettingRow
        label="Appearance"
        accessory={<View testID="accessory" />}
        value="Should not render"
      />,
    );

    expect(getByTestId('accessory')).toBeTruthy();
    expect(queryByText('Should not render')).toBeNull();
  });

  it('should support dark mode colors', () => {
    const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
      const { setPreference } = useTheme();

      React.useEffect(() => {
        setPreference('dark');
      }, [setPreference]);

      return <>{children}</>;
    };

    const { getByText } = render(
      <DarkModeWrapper>
        <SettingRow label="Dark Mode" value="Enabled" />
      </DarkModeWrapper>,
    );

    expect(getByText('Dark Mode')).toBeTruthy();
    expect(getByText('Enabled')).toBeTruthy();
  });
});
