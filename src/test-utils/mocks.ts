/* eslint-env jest */

/**
 * Reusable mock utilities for testing
 * Following best practices: centralized mocks, type-safe, reusable
 */

// Mock theme colors matching colors.json
export const mockThemeColors = {
  light: {
    background: '#ffffff',
    text: '#000000',
    textSecondary: '#666666',
    card: '#f5f5f5',
    primary: '#007AFF',
    primaryLight: '#007AFF20',
    onPrimary: '#ffffff',
    success: '#34C759',
    successLight: '#34C75920',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    card: '#2a2a2a',
    primary: '#007AFF',
    primaryLight: '#007AFF20',
    onPrimary: '#ffffff',
    success: '#34C759',
    successLight: '#34C75920',
  },
};

/**
 * Mock navigation object with all common methods
 * Use this in tests that need navigation functionality
 */
export const createMockNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  canGoBack: jest.fn(() => true),
  dispatch: jest.fn(),
  isFocused: jest.fn(() => true),
});

/**
 * Mock useTheme hook return value
 * @param isDark - Whether to return dark theme colors
 */
export const mockUseTheme = (isDark = false) => ({
  isDarkMode: isDark,
  colors: isDark ? mockThemeColors.dark : mockThemeColors.light,
});

/**
 * Mock useNavigation hook
 * Use this when you need to mock navigation in component tests
 */
export const mockUseNavigation = () => createMockNavigation();

/**
 * Helper to create mock props for components
 */
export const createMockProps = <T extends Record<string, unknown>>(
  overrides?: Partial<T>,
): T => {
  return {
    ...overrides,
  } as T;
};
