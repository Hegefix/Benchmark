import React from 'react';
import { render } from '@test-utils';
import { TurboModulesScreen } from '../TurboModulesScreen';

describe('TurboModulesScreen', () => {
  it('should render screen title', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(getByText('Turbo Modules')).toBeTruthy();
  });

  it('should render description', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(
      getByText("Learn about React Native's new architecture"),
    ).toBeTruthy();
  });

  it('should render placeholder text', () => {
    const { getByText } = render(<TurboModulesScreen />);
    expect(getByText('⚡ Turbo Module examples coming soon...')).toBeTruthy();
  });
});
