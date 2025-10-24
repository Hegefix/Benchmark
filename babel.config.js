module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ============================================================================
    // MODULE RESOLVER - Must come BEFORE Reanimated/Worklets plugin
    // ============================================================================
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@constants': './src/constants',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@test-utils': './src/test-utils',
        },
      },
    ],
    // ============================================================================
    // WORKLETS PLUGIN - Must be LAST
    // ============================================================================
    // This plugin transforms worklets for Reanimated 4
    // It MUST be the last plugin in the array
    'react-native-worklets/plugin',
  ],
};
