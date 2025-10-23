import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';

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
  // You can add providers here in the future if needed:
  // const Wrapper = ({ children }: { children: React.ReactNode }) => (
  //   <ThemeProvider>
  //     <NavigationContainer>
  //       {children}
  //     </NavigationContainer>
  //   </ThemeProvider>
  // );

  return render(ui, { ...options });
};

// Re-export everything from React Native Testing Library
export * from '@testing-library/react-native';

// Override render method with custom render
export { customRender as render };
