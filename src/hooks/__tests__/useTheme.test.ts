import { useColorScheme } from 'react-native';

import { colors } from '@constants';
import { renderHook } from '@test-utils';

import { useTheme } from '../useTheme';

jest.mock('react-native/Libraries/Utilities/useColorScheme');

describe('useTheme', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return light theme colors when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { result } = renderHook(() => useTheme());

    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.colors).toEqual(colors.light);
  });

  it('should return dark theme colors when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.colors).toEqual(colors.dark);
  });

  it('should return light theme colors when color scheme is null', () => {
    (useColorScheme as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useTheme());

    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.colors).toEqual(colors.light);
  });

  it('should have all required color properties', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { result } = renderHook(() => useTheme());

    expect(result.current.colors).toHaveProperty('background');
    expect(result.current.colors).toHaveProperty('text');
    expect(result.current.colors).toHaveProperty('textSecondary');
    expect(result.current.colors).toHaveProperty('card');
    expect(result.current.colors).toHaveProperty('primary');
    expect(result.current.colors).toHaveProperty('primaryLight');
    expect(result.current.colors).toHaveProperty('success');
    expect(result.current.colors).toHaveProperty('successLight');
  });
});
