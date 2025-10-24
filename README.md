# Benchmark

A modern React Native application built to learn and demonstrate Reanimated 4, Turbo Modules, and best practices for React Native development.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture Decisions](#architecture-decisions)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [CI/CD](#cicd)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## 🚀 Tech Stack

- **React Native** 0.82.1
- **React** 19.1.1
- **TypeScript** 5.8.3 (strict mode)
- **React Navigation** v7 (Static API)
- **Reanimated** 4.1.3
- **React Native Worklets** 0.6.1
- **React Native Gesture Handler** 2.29.0
- **MMKV** 4.0.0 (high-performance storage)
- **React Native Vector Icons** 9.2.0

### Dev Tools

- **ESLint** 8.57.1 with strict rules
- **Prettier** 2.8.8
- **Jest** 29.6.3 with React Native Testing Library
- **Husky** 9.1.7 for pre-commit hooks
- **lint-staged** 16.2.6

## 🏗️ Architecture Decisions

### 1. New Architecture (Fabric + TurboModules)

**Why:** The New Architecture provides significant performance improvements and enables modern React Native features.

**Implementation:**

- Android: `newArchEnabled=true` in `android/gradle.properties`
- iOS: `ENV['RCT_NEW_ARCH_ENABLED'] = '1'` in `ios/Podfile`

**Benefits:**

- Improved rendering performance with Fabric
- Synchronous native module calls with TurboModules
- Better support for concurrent React features
- Required for Reanimated 4

### 2. Hermes JavaScript Engine

**Why:** Hermes is optimized for React Native and provides better performance on Android.

**Implementation:**

- `hermesEnabled=true` in `android/gradle.properties`

**Benefits:**

- Faster app startup time
- Reduced memory usage
- Smaller APK size
- Better overall performance

### 3. Babel Plugin Order

**Why:** Babel plugins must be ordered correctly for proper transformation.

**Implementation:**

- Module resolver plugins come first
- `react-native-worklets/plugin` must be last
- Documented with comments in `babel.config.js`

**Critical:** Reanimated/Worklets plugin MUST be the last plugin in the array.

### 4. Strict TypeScript Configuration

**Why:** Catch more bugs at compile time and improve code quality.

**Implementation:**

```json
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "exactOptionalPropertyTypes": true,
  "noImplicitOverride": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

**Benefits:**

- Safer array/object access
- Stricter optional property handling
- Catch more potential runtime errors

### 5. ESLint with Import Ordering

**Why:** Consistent code style and organized imports improve maintainability.

**Implementation:**

- `eslint-plugin-import` for import ordering
- Alphabetical sorting within groups
- Newlines between import groups
- Path groups for all aliases

**Benefits:**

- Easier to find imports
- Consistent code style across team
- Automatic import organization

### 6. Jest with Path Aliases

**Why:** Consistent import paths between source and test files.

**Implementation:**

- Module name mapper for all aliases
- Transform patterns for React Native packages
- Setup file with mocks
- Coverage thresholds (80%)

**Benefits:**

- Same import paths in tests as in source
- Proper transformation of node_modules
- Consistent test environment

### 7. Unified Theme Tokens

**Why:** Centralized design system ensures consistency and makes theming easier.

**Implementation:**

- `src/theme/tokens.ts` with colors, spacing, typography, etc.
- `useAppTheme()` hook for accessing theme
- Automatic dark mode support

**Benefits:**

- Consistent design across app
- Easy theme switching
- Type-safe theme access
- Automatic dark mode

### 8. MMKV Storage

**Why:** AsyncStorage is slow and asynchronous. MMKV is 30x faster with a synchronous API.

**Implementation:**

- `src/storage/mmkv.ts` with type-safe wrapper
- `kv` utility for common operations
- `StorageKeys` enum for type safety

**Benefits:**

- 30x faster than AsyncStorage
- Synchronous API (no async/await)
- Encryption support
- Smaller bundle size

### 9. GitHub Actions CI

**Why:** Automated testing and building ensures code quality.

**Implementation:**

- Lint and typecheck job
- Test job with coverage
- Android and iOS build jobs
- Runs on PR and push to main/develop

**Benefits:**

- Catch issues before merge
- Automated testing
- Build verification
- Coverage tracking

## 🚦 Getting Started

### Prerequisites

- Node.js 20.19.5 (use `nvm use` to switch)
- Yarn package manager
- Xcode 15+ (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS dependencies)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hegefix/Benchmark.git
cd Benchmark
```

2. Install dependencies:

```bash
yarn setup
```

This will:

- Install npm dependencies
- Install iOS pods

3. Start Metro bundler:

```bash
yarn start
```

4. Run on iOS:

```bash
yarn ios
```

5. Run on Android:

```bash
yarn android
```

## 📜 Available Scripts

### Development

- `yarn start` - Start Metro bundler
- `yarn start:reset` - Start Metro with cache reset
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator

### Code Quality

- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint with auto-fix
- `yarn typecheck` - Run TypeScript type checking
- `yarn validate` - Run lint + typecheck + tests
- `yarn verify` - Alias for validate

### Testing

- `yarn test` - Run Jest tests
- `yarn test:watch` - Run Jest in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn test:ci` - Run tests in CI mode

### iOS

- `yarn pods` - Install CocoaPods dependencies
- `yarn pods:clean` - Clean and reinstall pods
- `yarn pods:update` - Update and install pods
- `yarn ios:clean` - Clean Xcode build

### Android

- `yarn android:clean` - Clean Gradle build
- `yarn android:build` - Build release APK

### Cleanup

- `yarn clean` - Clean build artifacts (keeps node_modules)
- `yarn clean:all` - Clean everything except .env
- `yarn clean:modules` - Reinstall node_modules

## 📁 Project Structure

```
Benchmark/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI
├── __mocks__/                  # Global mocks for testing
│   ├── @react-navigation/
│   ├── react-native-gesture-handler.js
│   ├── react-native-reanimated.js
│   └── react-native-vector-icons.js
├── android/                    # Android native code
├── ios/                        # iOS native code
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   ├── ScreenContainer.tsx
│   │   ├── SettingRow.tsx
│   │   ├── DrawerContent.tsx
│   │   └── __tests__/
│   ├── constants/              # App-wide constants
│   │   ├── colors.json
│   │   └── sizes.ts
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── __tests__/
│   ├── navigation/             # Navigation configuration
│   │   ├── RootNavigator.tsx
│   │   └── __tests__/
│   ├── screens/                # Screen components
│   │   ├── WelcomeScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ReanimatedScreen.tsx
│   │   ├── TurboModulesScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── __tests__/
│   ├── storage/                # MMKV storage utilities
│   │   ├── mmkv.ts
│   │   └── index.ts
│   ├── test-utils/             # Testing utilities
│   │   └── render.tsx
│   ├── theme/                  # Theme tokens and utilities
│   │   ├── tokens.ts
│   │   ├── useAppTheme.ts
│   │   └── index.ts
│   └── types/                  # TypeScript type definitions
│       ├── navigation.ts
│       └── index.ts
├── .eslintrc.json              # ESLint configuration
├── .eslintignore               # ESLint ignore patterns
├── babel.config.js             # Babel configuration
├── jest.config.js              # Jest configuration
├── jest-setup.js               # Jest setup file
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Development Guidelines

### Import Aliases

Use the following aliases for cleaner imports:

- `@app` - `./src`
- `@screens` - `./src/screens`
- `@components` - `./src/components`
- `@navigation` - `./src/navigation`
- `@hooks` - `./src/hooks`
- `@utils` - `./src/utils`
- `@types` - `./src/types`
- `@constants` - `./src/constants`
- `@theme` - `./src/theme`
- `@storage` - `./src/storage`
- `@assets` - `./src/assets`
- `@test-utils` - `./src/test-utils`

Example:

```typescript
// ❌ Bad
import { Button } from '../../../components/Button';

// ✅ Good
import { Button } from '@components';
```

### Component Guidelines

- ❌ NEVER use `React.FC` or `React.FunctionComponent`
- ✅ Use regular function declarations
- ✅ One file = one component
- ❌ NEVER duplicate code (create reusable components)
- ❌ NEVER leave unused styles in StyleSheet

### Navigation

- ❌ NEVER pass navigation as a prop
- ✅ ALWAYS use `useNavigation()` hook
- ✅ Properly type navigation with `NavigationProp<ParamList>`

### Icons

- ✅ Use the `Icon` component from `@components`
- ✅ Use MaterialCommunityIcons (6,000+ icons)
- ✅ Use preset sizes: `xs`, `sm`, `md`, `lg`, `xl`
- ❌ NEVER import icon libraries directly

### Theme

- ✅ Use `useAppTheme()` hook for theme access
- ✅ Use theme tokens for colors, spacing, typography
- ❌ NEVER hardcode colors or spacing values

### Storage

- ✅ Use `kv` utility from `@storage` for data persistence
- ✅ Use `StorageKeys` enum for type-safe keys
- ❌ NEVER use AsyncStorage directly

## 🧪 Testing

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage

# Run tests in CI mode
yarn test:ci
```

### Coverage Requirements

- 80% minimum for all metrics (statements, branches, functions, lines)

### Writing Tests

```typescript
import { render, fireEvent } from '@test-utils';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello')).toBeTruthy();
  });
});
```

### Mocking

- Global mocks in `__mocks__/` directory
- Test-specific mocks override globals when needed
- Use `@test-utils` for custom render function

## 🔄 CI/CD

### GitHub Actions

The project uses GitHub Actions for continuous integration:

**Lint & Type Check:**

- Runs ESLint
- Runs TypeScript type checking

**Test:**

- Runs Jest tests with coverage
- Uploads coverage to Codecov
- Uploads coverage artifacts

**Build Android:**

- Builds debug APK
- Caches Gradle dependencies

**Build iOS:**

- Builds for iOS simulator
- Installs CocoaPods dependencies

### Pre-commit Hooks

Husky runs the following checks before each commit:

- Linter (ESLint)
- Type checking (TypeScript)
- Tests (Jest)

If any check fails, the commit is blocked.

## ⚡ Performance

### Hermes

Hermes is enabled by default for better performance:

- Faster app startup
- Reduced memory usage
- Smaller bundle size

### MMKV

MMKV is used instead of AsyncStorage:

- 30x faster read/write operations
- Synchronous API
- Encryption support

### Flipper

Flipper is enabled in debug mode only. It's automatically disabled in release builds.

### Reanimated 4

Reanimated 4 with Worklets provides:

- 60 FPS animations
- Runs on UI thread
- Better performance than Animated API

## 🔧 Troubleshooting

### Metro Bundler Issues

```bash
# Reset Metro cache
yarn start:reset

# Or manually
yarn start -- --reset-cache
```

### iOS Build Issues

```bash
# Clean and reinstall pods
yarn pods:clean

# Clean Xcode build
yarn ios:clean

# Then rebuild
yarn ios
```

### Android Build Issues

```bash
# Clean Gradle
yarn android:clean

# Then rebuild
yarn android
```

### TypeScript Errors

```bash
# Run type check to see all errors
yarn typecheck

# Check specific file
yarn typecheck src/path/to/file.ts
```

### Linter Errors

```bash
# Auto-fix linter errors
yarn lint:fix

# Check specific file
yarn lint src/path/to/file.ts
```

### Test Failures

```bash
# Run tests in watch mode to debug
yarn test:watch

# Run specific test file
yarn test src/path/to/__tests__/file.test.ts

# Update snapshots
yarn test -u
```

### Node Version Issues

```bash
# Use the correct Node version
nvm use

# Or install the required version
nvm install 20.19.5
nvm use 20.19.5
```

### Module Not Found

```bash
# Reinstall dependencies
yarn clean:modules

# Or full clean
yarn clean:all
yarn setup
```

## 📝 License

This project is private and not licensed for public use.

## 👥 Contributing

This is a learning project. Contributions are welcome! Please follow the development guidelines and ensure all tests pass before submitting a PR.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React Native
