# Testing Guide

## Test Structure

```
__tests__/                          # Root level tests
  └── App.test.tsx

src/
  ├── components/__tests__/         # Component unit tests
  ├── screens/__tests__/            # Screen integration tests
  ├── hooks/__tests__/              # Hook tests
  ├── navigation/__tests__/         # Navigation tests
  └── test-utils/                   # Testing utilities
      ├── index.tsx                 # Custom render
      └── mocks.ts                  # Mock helpers
```

## Mock Strategy

### Global Mocks (`__mocks__/`)

Located at project root, auto-discovered by Jest for external packages:

```
__mocks__/
  ├── react-native-safe-area-context.js
  └── @react-navigation/native.js
```

**Purpose:** Provide base mocks for external npm packages across ALL tests.

**When to use:** For third-party libraries that need consistent mocking.

### Test-Specific Mocks

Override global mocks when you need specific behavior:

```typescript
// Override navigation to spy on calls
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));
```

**When to use:** When you need to assert on specific function calls.

### Component Mocks

Mock child components to isolate unit tests:

```typescript
jest.mock('@components', () => ({
  Button: ({ title, onPress }: any) => {
    const { Text, TouchableOpacity } = require('react-native');
    return (
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  },
}));
```

**When to use:** In unit tests to avoid rendering complexity.

## Test Utilities

### Custom Render

All tests should import from `@test-utils`:

```typescript
import { render, fireEvent } from '@test-utils';
```

**Benefits:**

- Consistent test setup
- Easy to add global providers
- Centralized configuration

### Mock Helpers

Use mock utilities from `@test-utils/mocks`:

```typescript
import { mockUseTheme, createMockNavigation } from '@test-utils/mocks';

const theme = mockUseTheme(true); // dark mode
const navigation = createMockNavigation();
```

## Best Practices

### ✅ DO

- Import render from `@test-utils`
- Use global mocks from `__mocks__/` when possible
- Mock child components in unit tests
- Test behavior, not implementation
- Keep tests fast and isolated

### ❌ DON'T

- Import directly from `@testing-library/react-native`
- Duplicate mocks across test files
- Test implementation details
- Create unnecessary mocks

## Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage

# Run specific test file
yarn test path/to/test.test.tsx

# Run all checks (lint + types + tests)
yarn validate
```

## Coverage Requirements

- **Statements:** 80% minimum
- **Branches:** 80% minimum
- **Functions:** 80% minimum
- **Lines:** 80% minimum

Current coverage: **100% statements, 88.88% branches, 100% functions, 100% lines** ✅

## Pre-commit Hooks

Tests run automatically before each commit via Husky:

1. Linter (ESLint) on staged files
2. TypeScript type checking
3. All tests

Commit is blocked if any check fails.

## Examples

### Component Test

```typescript
import { render, fireEvent } from '@test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Click me" onPress={onPress} />);

    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
```

### Screen Test with Navigation

```typescript
import { render, fireEvent } from '@test-utils';
import { HomeScreen } from '../HomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('HomeScreen', () => {
  it('should navigate to Settings', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Settings'));
    expect(mockNavigate).toHaveBeenCalledWith('Settings');
  });
});
```

### Hook Test

```typescript
import { renderHook } from '@test-utils';
import { useTheme } from '../useTheme';

describe('useTheme', () => {
  it('should return light theme by default', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDarkMode).toBe(false);
  });
});
```
