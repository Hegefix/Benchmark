module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-screens|react-native-safe-area-context)/)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/types/**',
    '!src/test-utils/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@test-utils(.*)$': '<rootDir>/src/test-utils$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
