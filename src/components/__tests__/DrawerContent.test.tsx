import React from 'react';

import { render } from '@test-utils';

import { DrawerContent } from '../DrawerContent';

// Mock useTheme hook
jest.mock('@hooks', () => ({
  useTheme: () => ({
    colors: {
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      card: '#f5f5f5',
      primary: '#007AFF',
    },
  }),
}));

// Mock Icon component
jest.mock('../Icon', () => ({
  Icon: ({ name, testID }: any) => {
    const { Text } = require('react-native');
    return <Text testID={testID || `icon-${name}`}>{name}</Text>;
  },
}));

// Mock drawer components
jest.mock('@react-navigation/drawer', () => ({
  DrawerContentScrollView: ({ children }: any) => {
    const { View } = require('react-native');
    return <View testID="drawer-scroll-view">{children}</View>;
  },
  DrawerItemList: () => {
    const { Text } = require('react-native');
    return <Text testID="drawer-item-list">Drawer Items</Text>;
  },
}));

const mockProps: any = {
  state: {
    routes: [],
    index: 0,
    key: 'drawer',
    routeNames: [],
    history: [],
    type: 'drawer',
    stale: false,
    preloadedRouteKeys: [],
  },
  navigation: {},
  descriptors: {},
};

describe('DrawerContent', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<DrawerContent {...mockProps} />);
    expect(getByTestId('drawer-scroll-view')).toBeTruthy();
  });

  it('should render user info section', () => {
    const { getByText } = render(<DrawerContent {...mockProps} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('[email protected]')).toBeTruthy();
  });

  it('should render account icon', () => {
    const { getByTestId } = render(<DrawerContent {...mockProps} />);
    expect(getByTestId('icon-account')).toBeTruthy();
  });

  it('should render drawer items list', () => {
    const { getByTestId } = render(<DrawerContent {...mockProps} />);
    expect(getByTestId('drawer-item-list')).toBeTruthy();
  });

  it('should apply theme colors to user name', () => {
    const { getByText } = render(<DrawerContent {...mockProps} />);
    const userName = getByText('John Doe');
    expect(userName.props.style).toContainEqual({ color: '#000000' });
  });

  it('should apply theme colors to user email', () => {
    const { getByText } = render(<DrawerContent {...mockProps} />);
    const userEmail = getByText('[email protected]');
    expect(userEmail.props.style).toContainEqual({ color: '#666666' });
  });
});
