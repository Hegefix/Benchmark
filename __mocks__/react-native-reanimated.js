/* eslint-env jest */

// Mock for react-native-reanimated
const { View } = require('react-native');

const Reanimated = {
  default: {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View: View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
    createAnimatedComponent: component => component,
  },
  useSharedValue: jest.fn(() => ({ value: 0 })),
  useAnimatedStyle: jest.fn(cb => cb()),
  useAnimatedGestureHandler: jest.fn(),
  useAnimatedScrollHandler: jest.fn(),
  useAnimatedRef: jest.fn(),
  useDerivedValue: jest.fn(),
  useAnimatedProps: jest.fn(),
  withTiming: jest.fn(value => value),
  withSpring: jest.fn(value => value),
  withDecay: jest.fn(value => value),
  withDelay: jest.fn((_, value) => value),
  withRepeat: jest.fn(value => value),
  withSequence: jest.fn((...values) => values[0]),
  cancelAnimation: jest.fn(),
  runOnJS: jest.fn(fn => fn),
  runOnUI: jest.fn(fn => fn),
};

module.exports = {
  __esModule: true,
  ...Reanimated,
  default: Reanimated.default,
};
