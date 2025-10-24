/**
 * Benchmark - Learning Reanimated & Turbo Modules
 * @format
 */

import React from 'react';
import { Navigation } from '@navigation/RootNavigator';
import { ThemeProvider } from '@hooks';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
