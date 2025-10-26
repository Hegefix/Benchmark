/* eslint-env jest */

// Mock for @react-navigation/drawer
const React = require('react');

const { View } = require('react-native');

module.exports = {
  createDrawerNavigator: jest.fn(config => config),
  DrawerContentScrollView: ({ children }) => {
    return React.createElement(View, {}, children);
  },
  DrawerItemList: () => null,
  useDrawerProgress: jest.fn(() => ({ value: 0 })),
  useDrawerStatus: jest.fn(() => 'closed'),
};
