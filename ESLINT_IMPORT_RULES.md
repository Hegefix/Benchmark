# ESLint Import Rules

This document describes the ESLint import rules configured for this project.

## 📦 Installed Packages

```bash
yarn add -D eslint-plugin-import eslint-import-resolver-typescript eslint-config-prettier
```

## 🎯 Import Order Rules

The project enforces a strict import order with the following groups:

### 1. **React & React Native** (External - First)
```typescript
import React from 'react';

import { View, StyleSheet } from 'react-native';
```

### 2. **External Libraries** (Third-party packages)
```typescript
import { useNavigation } from '@react-navigation/native';
```

### 3. **Internal Modules** (Project aliases)
Alphabetically ordered:
- `@app/**`
- `@screens/**`
- `@components/**`
- `@navigation/**`
- `@hooks/**`
- `@utils/**`
- `@types/**`
- `@constants/**`
- `@theme/**`
- `@storage/**`
- `@assets/**`

```typescript
import { Button, FeatureScreenLayout } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';
```

### 4. **Type Imports** (Last)
```typescript
import type { NavigationProp } from '@react-navigation/native';
import type { DrawerParamList } from '@types';
```

## 📋 Enforced Rules

### `import/order` (error)
- Groups imports into categories
- Requires blank lines between groups
- Alphabetically sorts imports within groups
- Case-insensitive sorting

### `import/no-cycle` (warn)
- Detects circular dependencies
- Helps maintain clean architecture

### `import/no-duplicates` (error)
- Prevents duplicate imports from same module
- Auto-merges imports when possible

### `import/no-unused-modules` (warn)
- Detects unused exports
- Helps identify dead code

### `import/first` (error)
- Ensures all imports are at the top of the file
- Before any other statements

### `import/newline-after-import` (error)
- Requires blank line after import block
- Improves readability

### `import/no-anonymous-default-export` (warn)
- Warns against anonymous default exports
- Encourages named exports for better debugging

## 🔧 Auto-Fix

Most import order issues can be auto-fixed:

```bash
yarn lint --fix
```

## 🎨 Example: Properly Ordered Imports

```typescript
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Icon } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';

import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '@types';

export const MyScreen = () => {
  // Component code...
};
```

## 🚫 What NOT to Do

```typescript
// ❌ Bad: No blank lines, wrong order
import React from 'react';
import { View } from 'react-native';
import { Button } from '@components';
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants';

// ❌ Bad: Type imports before regular imports
import type { RootStackParamList } from '@types';
import { Button } from '@components';

// ❌ Bad: Internal imports before external
import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
```

## 🔍 TypeScript Configuration

The ESLint parser is configured to:
- Only parse `.ts` and `.tsx` files with TypeScript parser
- Use `tsconfig.json` for type-aware linting
- Resolve imports using TypeScript's module resolution

## 📝 Special Cases

### Scripts Directory
Console statements are allowed in `scripts/**/*.js` files:

```javascript
// ✅ Allowed in scripts/
console.log('✅ Validation passed');
console.error('❌ Validation failed');
```

### Mock Files
Mock files in `__mocks__/` don't require TypeScript parser and can use plain JavaScript.

## 🎯 Benefits

1. **Consistency**: All files follow the same import structure
2. **Readability**: Clear separation between different import types
3. **Maintainability**: Easy to find imports
4. **Auto-fix**: Most issues can be fixed automatically
5. **Type Safety**: Type imports are clearly separated
6. **Performance**: Detects circular dependencies early

## 🔗 Related Rules

- `react-hooks/rules-of-hooks`: Enforces Hooks rules
- `react-hooks/exhaustive-deps`: Warns about missing dependencies
- `react-native/no-unused-styles`: Detects unused StyleSheet definitions
- `react-native/no-inline-styles`: Warns about inline styles
- `no-console`: Warns about console statements (except in scripts)

## 📚 Resources

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [ESLint Rules Documentation](https://eslint.org/docs/rules/)

