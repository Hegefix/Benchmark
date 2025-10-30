import React from 'react';

import { render } from '@test-utils';

import { Typography } from '../Typography';

// Mock useTheme hook
jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
    },
  }),
}));

describe('Typography', () => {
  it('should render correctly with default variant', () => {
    const { getByText } = render(<Typography>Default Text</Typography>);

    expect(getByText('Default Text')).toBeTruthy();
  });

  it('should render with h1 variant', () => {
    const { getByText } = render(
      <Typography variant="h1">Heading 1</Typography>,
    );

    expect(getByText('Heading 1')).toBeTruthy();
  });

  it('should render with h2 variant', () => {
    const { getByText } = render(
      <Typography variant="h2">Heading 2</Typography>,
    );

    expect(getByText('Heading 2')).toBeTruthy();
  });

  it('should render with h3 variant', () => {
    const { getByText } = render(
      <Typography variant="h3">Heading 3</Typography>,
    );

    expect(getByText('Heading 3')).toBeTruthy();
  });

  it('should render with body variant', () => {
    const { getByText } = render(
      <Typography variant="body">Body Text</Typography>,
    );

    expect(getByText('Body Text')).toBeTruthy();
  });

  it('should render with bodyLarge variant', () => {
    const { getByText } = render(
      <Typography variant="bodyLarge">Large Body Text</Typography>,
    );

    expect(getByText('Large Body Text')).toBeTruthy();
  });

  it('should render with bodyMedium variant', () => {
    const { getByText } = render(
      <Typography variant="bodyMedium">Medium Body Text</Typography>,
    );

    expect(getByText('Medium Body Text')).toBeTruthy();
  });

  it('should render with bodySmall variant', () => {
    const { getByText } = render(
      <Typography variant="bodySmall">Small Body Text</Typography>,
    );

    expect(getByText('Small Body Text')).toBeTruthy();
  });

  it('should render with caption variant', () => {
    const { getByText } = render(
      <Typography variant="caption">Caption</Typography>,
    );

    expect(getByText('Caption')).toBeTruthy();
  });

  it('should render with button variant', () => {
    const { getByText } = render(
      <Typography variant="button">Button Text</Typography>,
    );

    expect(getByText('Button Text')).toBeTruthy();
  });

  it('should render with buttonSmall variant', () => {
    const { getByText } = render(
      <Typography variant="buttonSmall">Small Button</Typography>,
    );

    expect(getByText('Small Button')).toBeTruthy();
  });

  it('should apply custom style when provided', () => {
    const customStyle = { fontSize: 20 };
    const { getByText } = render(
      <Typography style={customStyle}>Styled Text</Typography>,
    );

    expect(getByText('Styled Text')).toBeTruthy();
  });

  it('should accept TextProps', () => {
    const { getByText } = render(
      <Typography accessibilityLabel="Test Label">Accessible Text</Typography>,
    );

    expect(getByText('Accessible Text')).toBeTruthy();
  });

  it('should render with number as children', () => {
    const { getByText } = render(<Typography>123</Typography>);

    expect(getByText('123')).toBeTruthy();
  });
});
