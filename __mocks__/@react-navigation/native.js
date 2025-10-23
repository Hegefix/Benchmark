/* eslint-env jest */

const actualNav = jest.requireActual('@react-navigation/native');

module.exports = {
  ...actualNav,
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: jest.fn(() => true),
  }),
  useRoute: () => ({
    key: 'test-route',
    name: 'TestScreen',
    params: {},
  }),
  useIsFocused: () => true,
  useFocusEffect: jest.fn(),
  createStaticNavigation: jest.fn(() => () => null),
  NavigationContainer: ({ children }) => children,
};
