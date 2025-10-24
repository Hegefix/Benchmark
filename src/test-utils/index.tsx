import React, { ReactElement } from 'react';
import {
  render,
  renderHook as rtlRenderHook,
  RenderOptions,
  RenderHookOptions,
} from '@testing-library/react-native';
import { ThemeProvider } from '@hooks';

// Mock useColorScheme for consistent theme testing
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: jest.fn(() => 'light'),
}));

/**
 * Custom render function that wraps components with providers if needed
 * This follows React Testing Library best practices for custom renders
 *
 * @example
 * import { render, screen } from '@test-utils';
 *
 * test('renders correctly', () => {
 *   render(<MyComponent />);
 *   expect(screen.getByText('Hello')).toBeTruthy();
 * });
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

const customRenderHook = <Result, Props>(
  hook: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  return rtlRenderHook(hook, { wrapper: Wrapper, ...options });
};

// Re-export everything from React Native Testing Library
export * from '@testing-library/react-native';

// Override render method with custom render
export { customRender as render, customRenderHook as renderHook };
