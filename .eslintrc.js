module.exports = {
  root: true,
  plugins: ['import', 'react-hooks', 'react-native'],
  extends: ['@react-native', 'plugin:react-hooks/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // ============================================================================
    // IMPORT RULES
    // ============================================================================
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'internal',
          },
          {
            pattern: '@screens/**',
            group: 'internal',
          },
          {
            pattern: '@components/**',
            group: 'internal',
          },
          {
            pattern: '@navigation/**',
            group: 'internal',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
          },
          {
            pattern: '@types/**',
            group: 'internal',
          },
          {
            pattern: '@constants/**',
            group: 'internal',
          },
          {
            pattern: '@theme/**',
            group: 'internal',
          },
          {
            pattern: '@storage/**',
            group: 'internal',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'warn',

    // ============================================================================
    // REACT HOOKS RULES
    // ============================================================================
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ============================================================================
    // REACT NATIVE RULES
    // ============================================================================
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'warn',

    // ============================================================================
    // GENERAL RULES
    // ============================================================================
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
