import React from 'react';
import { render } from '@testing-library/react-native';
import { SettingRow } from '../SettingRow';

// Mock useTheme hook
jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      textSecondary: '#666666',
    },
  }),
}));

describe('SettingRow', () => {
  it('should render label and value correctly', () => {
    const { getByText } = render(
      <SettingRow label="Version" value="1.0.0" />
    );

    expect(getByText('Version')).toBeTruthy();
    expect(getByText('1.0.0')).toBeTruthy();
  });

  it('should render with different label and value', () => {
    const { getByText } = render(
      <SettingRow label="React Native" value="0.82.1" />
    );

    expect(getByText('React Native')).toBeTruthy();
    expect(getByText('0.82.1')).toBeTruthy();
  });

  it('should render with long text', () => {
    const { getByText } = render(
      <SettingRow
        label="Long Label Text Here"
        value="Long Value Text Here"
      />
    );

    expect(getByText('Long Label Text Here')).toBeTruthy();
    expect(getByText('Long Value Text Here')).toBeTruthy();
  });

  it('should render with special characters', () => {
    const { getByText } = render(
      <SettingRow label="Node.js" value="20.19.5" />
    );

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByText('20.19.5')).toBeTruthy();
  });

  it('should render with dark mode colors', () => {
    jest.resetModules();
    jest.doMock('@hooks', () => ({
      useTheme: () => ({
        colors: {
          text: '#ffffff',
          textSecondary: '#a0a0a0',
        },
      }),
    }));

    const { getByText } = render(
      <SettingRow label="Dark Mode" value="Enabled" />
    );

    expect(getByText('Dark Mode')).toBeTruthy();
    expect(getByText('Enabled')).toBeTruthy();
  });
});

