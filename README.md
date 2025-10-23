# Benchmark

A React Native learning project focused on **React Native Reanimated** and **Turbo Modules**.

## 🎯 Project Goals

- Learn and master React Native Reanimated 3.x animations
- Explore Turbo Modules and the new React Native architecture
- Follow best practices for React Native development
- Build a clean, maintainable codebase

## 📱 Tech Stack

- **React Native**: 0.82.1
- **React**: 19.1.1
- **React Navigation**: v7 (Static API)
- **React Native Reanimated**: 3.19.3
- **TypeScript**: 5.x
- **Node.js**: 20.19.5 (managed via nvm)

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   ├── ScreenContainer.tsx
│   ├── SettingRow.tsx
│   └── index.ts
├── screens/          # Full screen components
│   ├── WelcomeScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ReanimatedScreen.tsx
│   ├── TurboModulesScreen.tsx
│   ├── SettingsScreen.tsx
│   └── index.ts
├── navigation/       # Navigation configuration
│   └── RootNavigator.tsx
├── hooks/           # Custom React hooks
│   ├── useTheme.ts
│   └── index.ts
├── constants/       # App-wide constants
│   ├── colors.json
│   └── index.ts
├── utils/           # Utility functions
└── types/           # TypeScript type definitions
```

## 🎨 Features

- ✅ **Navigation**: React Navigation v7 with Native Stack Navigator
- ✅ **Theme Support**: Light/Dark mode with centralized color management
- ✅ **Import Aliases**: Clean imports using Babel module resolver (`@screens`, `@components`, etc.)
- ✅ **Reusable Components**: Button, ScreenContainer, SettingRow
- ✅ **Type Safety**: Full TypeScript support
- 🚧 **Reanimated Examples**: Coming soon
- 🚧 **Turbo Modules**: Coming soon

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19.5 (use nvm: `nvm use`)
- Yarn package manager
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hegefix/Benchmark.git
   cd Benchmark
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Install iOS dependencies**
   ```bash
   yarn pods
   # or manually: cd ios && pod install
   ```

### Running the App

#### iOS

```bash
yarn ios
```

#### Android

```bash
yarn android
```

#### Start Metro Bundler

```bash
yarn start
# or with cache reset
yarn start --reset-cache
```

## 📝 Code Style & Best Practices

This project follows strict coding guidelines (see `.cursorrules`):

- ❌ **NO** `React.FC` or `React.FunctionComponent`
- ❌ **NO** passing navigation as props (use `useNavigation()` hook)
- ❌ **NO** code duplication (create reusable components)
- ❌ **NO** unused styles in StyleSheet
- ❌ **NO** `SafeAreaView` from `react-native` (deprecated)
- ✅ Use Babel import aliases (`@screens`, `@components`, etc.)
- ✅ One file = one component
- ✅ TypeScript for type safety
- ✅ React Navigation handles safe areas automatically

## 🎨 Theme System

Colors are centralized in `src/constants/colors.json`:

```json
{
  "light": { "background": "#ffffff", "text": "#000000", ... },
  "dark": { "background": "#1a1a1a", "text": "#ffffff", ... }
}
```

Use the `useTheme` hook to access colors:

```tsx
import { useTheme } from '@hooks';

const MyComponent = () => {
  const { colors, isDarkMode } = useTheme();
  return <View style={{ backgroundColor: colors.background }} />;
};
```

## 🔧 Available Scripts

- `yarn start` - Start Metro bundler
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn pods` - Install iOS CocoaPods dependencies

## 🧪 Testing

This project has comprehensive test coverage using Jest and React Native Testing Library.

### Test Coverage

- **Overall Coverage**: 100% statements, 88.88% branches, 100% functions, 100% lines
- **Threshold**: 80% minimum for all metrics

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage report
yarn test:coverage
```

### Test Structure

```
__tests__/
  └── App.test.tsx
src/
  ├── components/__tests__/
  │   ├── Button.test.tsx
  │   ├── ScreenContainer.test.tsx
  │   └── SettingRow.test.tsx
  ├── screens/__tests__/
  │   ├── WelcomeScreen.test.tsx
  │   ├── HomeScreen.test.tsx
  │   ├── ReanimatedScreen.test.tsx
  │   ├── TurboModulesScreen.test.tsx
  │   └── SettingsScreen.test.tsx
  ├── hooks/__tests__/
  │   └── useTheme.test.ts
  └── navigation/__tests__/
      └── RootNavigator.test.tsx
```

### What's Tested

- ✅ All components render correctly
- ✅ Button interactions and variants
- ✅ Navigation flows
- ✅ Theme switching (light/dark mode)
- ✅ Screen content and layout
- ✅ Custom hooks behavior

## 📚 Learning Resources

- [React Native Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [React Navigation v7 Docs](https://reactnavigation.org/docs/getting-started)
- [Turbo Modules Guide](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules)

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

## 📄 License

This project is for educational purposes.

## 🙏 Acknowledgments

- React Native community
- React Navigation team
- Software Mansion (Reanimated)
