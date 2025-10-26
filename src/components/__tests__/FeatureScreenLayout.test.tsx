import React from 'react';

import { render } from '@test-utils';

import { FeatureScreenLayout } from '../FeatureScreenLayout';

// Mock the Icon component
jest.mock('@components', () => ({
  Icon: ({ name, size, color }: any) => {
    const { Text } = require('react-native');
    return (
      <Text testID={`icon-${name}`}>
        {name}-{size}-{color}
      </Text>
    );
  },
  ScreenContainer: ({ children }: any) => {
    const { View } = require('react-native');
    return <View testID="screen-container">{children}</View>;
  },
}));

describe('FeatureScreenLayout', () => {
  it('should render title and description', () => {
    const { getByText } = render(
      <FeatureScreenLayout title="Test Title" description="Test Description" />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });

  it('should render icon when iconName is provided', () => {
    const { getByTestId } = render(
      <FeatureScreenLayout
        title="Test Title"
        description="Test Description"
        iconName="home"
      />,
    );

    expect(getByTestId('icon-home')).toBeTruthy();
  });

  it('should not render icon when iconName is not provided', () => {
    const { queryByTestId } = render(
      <FeatureScreenLayout title="Test Title" description="Test Description" />,
    );

    expect(queryByTestId('icon-home')).toBeNull();
  });

  it('should render children when provided', () => {
    const { Text } = require('react-native');
    const { getByText } = render(
      <FeatureScreenLayout title="Test Title" description="Test Description">
        <Text>Child Content</Text>
      </FeatureScreenLayout>,
    );

    expect(getByText('Child Content')).toBeTruthy();
  });

  it('should apply theme colors to text', () => {
    const { getByText } = render(
      <FeatureScreenLayout title="Test Title" description="Test Description" />,
    );

    const title = getByText('Test Title');
    const description = getByText('Test Description');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
