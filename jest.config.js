module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Transform node_modules that use ESM or need transformation
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-screens|react-native-safe-area-context|react-native-gesture-handler|react-native-reanimated|react-native-vector-icons|react-native-worklets)/)',
  ],

  // Coverage collection
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/types/**',
    '!src/test-utils/**',
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Module name mapping for path aliases
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@app$': '<rootDir>/src',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@screens$': '<rootDir>/src/screens',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@components$': '<rootDir>/src/components',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@navigation$': '<rootDir>/src/navigation',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@utils$': '<rootDir>/src/utils',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@types$': '<rootDir>/src/types',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@constants$': '<rootDir>/src/constants',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@theme$': '<rootDir>/src/theme',
    '^@storage/(.*)$': '<rootDir>/src/storage/$1',
    '^@storage$': '<rootDir>/src/storage',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@assets$': '<rootDir>/src/assets',
    '^@test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
    '^@test-utils$': '<rootDir>/src/test-utils',
  },

  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  // Setup files
  setupFiles: ['<rootDir>/jest-setup.js'],
};
