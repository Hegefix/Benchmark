module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
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
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@constants': './src/constants',
          '@test-utils': './src/test-utils',
        },
      },
    ],
  ],
};
