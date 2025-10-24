import React from 'react';
import { render } from '@test-utils';
import { ReanimatedScreen } from '../ReanimatedScreen';

describe('ReanimatedScreen', () => {
  it('should render screen title', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(getByText('Reanimated Examples')).toBeTruthy();
  });

  it('should render description', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(
      getByText('Learn React Native Reanimated animations here'),
    ).toBeTruthy();
  });

  it('should render placeholder text', () => {
    const { getByText } = render(<ReanimatedScreen />);
    expect(getByText('🎨 Animated components coming soon...')).toBeTruthy();
  });
});
