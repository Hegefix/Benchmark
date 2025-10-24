# 🎭 Icons Guide

This project uses **MaterialCommunityIcons** from `react-native-vector-icons` for a beautiful, consistent icon system.

## 📦 What's Included

- **6,000+ icons** from MaterialCommunityIcons
- Custom `Icon` component with theme integration
- Preset sizes for consistency
- Full TypeScript support
- Automatic theme color support

## 🚀 Quick Start

### Basic Usage

```tsx
import { Icon } from '@components';

function MyScreen() {
  return (
    <View>
      <Icon name="home" size="md" />
      <Icon name="account" size="lg" />
      <Icon name="cog" size={32} color="#007AFF" />
    </View>
  );
}
```

### With Theme Colors

```tsx
import { Icon } from '@components';
import { useTheme } from '@hooks';

function MyScreen() {
  const { colors } = useTheme();

  return (
    <View>
      {/* Uses theme text color by default */}
      <Icon name="home" size="md" />

      {/* Custom color */}
      <Icon name="heart" size="lg" color={colors.primary} />
    </View>
  );
}
```

## 📏 Icon Sizes

The `Icon` component supports both preset sizes and custom numeric values:

### Preset Sizes

```tsx
<Icon name="home" size="xs" />  // 16px
<Icon name="home" size="sm" />  // 20px
<Icon name="home" size="md" />  // 24px (default)
<Icon name="home" size="lg" />  // 32px
<Icon name="home" size="xl" />  // 48px
```

### Custom Sizes

```tsx
<Icon name="home" size={40} />
<Icon name="home" size={64} />
```

## 🎨 Finding Icons

Browse all available icons at:
**[materialdesignicons.com](https://materialdesignicons.com)**

### Popular Icons

- **Navigation**: `home`, `menu`, `arrow-left`, `arrow-right`, `close`
- **Actions**: `plus`, `minus`, `check`, `delete`, `edit`, `refresh`
- **Media**: `play`, `pause`, `stop`, `volume-high`, `camera`
- **Social**: `heart`, `star`, `share`, `comment`, `thumb-up`
- **UI**: `cog`, `information`, `alert`, `bell`, `search`
- **User**: `account`, `account-circle`, `account-group`, `login`, `logout`
- **Files**: `file`, `folder`, `download`, `upload`, `cloud`
- **Communication**: `email`, `phone`, `message`, `chat`

## 🔧 Icon Component Props

```typescript
interface IconProps {
  name: string; // Icon name from MaterialCommunityIcons
  size?: IconSize | number; // 'xs' | 'sm' | 'md' | 'lg' | 'xl' or custom number
  color?: string; // Hex color (defaults to theme text color)
  style?: object; // Additional styles
}
```

## 📝 Examples

### In Buttons

```tsx
<View style={styles.buttonRow}>
  <Icon name="animation" size="md" color={colors.primary} />
  <Button title="Reanimated" onPress={handlePress} />
</View>
```

### In Lists

```tsx
<View style={styles.listItem}>
  <Icon name="check-circle" size="sm" color={colors.success} />
  <Text>Task completed</Text>
</View>
```

### With Touch Feedback

```tsx
<TouchableOpacity onPress={handlePress}>
  <Icon
    name="heart"
    size="lg"
    color={isLiked ? colors.primary : colors.textSecondary}
  />
</TouchableOpacity>
```

## 🧪 Testing

Icons are automatically mocked in tests. The mock renders the icon name as text:

```tsx
import { render } from '@test-utils';
import { Icon } from '@components';

test('renders icon', () => {
  const { getByTestId } = render(<Icon name="home" />);
  expect(getByTestId('icon-home')).toBeTruthy();
});
```

## 🎯 Best Practices

### ✅ DO

- Use the `Icon` component from `@components`
- Use preset sizes for consistency (`md`, `lg`, etc.)
- Use theme colors when possible
- Browse materialdesignicons.com to find the right icon
- Use semantic icon names (e.g., `home` not `house-outline`)

### ❌ DON'T

- Import `react-native-vector-icons` directly
- Use hardcoded pixel sizes everywhere (use presets)
- Use hardcoded colors (use theme colors)
- Mix different icon sets (stick to MaterialCommunityIcons)

## 📚 Additional Resources

- [MaterialCommunityIcons Icon Library](https://materialdesignicons.com)
- [react-native-vector-icons Documentation](https://github.com/oblador/react-native-vector-icons)
- [Material Design Icon Guidelines](https://material.io/design/iconography)

## 🔄 Migration from Other Icon Sets

If you need to use a different icon set in the future:

1. Update the import in `src/components/Icon.tsx`
2. Update the mock in `__mocks__/react-native-vector-icons/`
3. Update this documentation

Current setup uses MaterialCommunityIcons for its extensive collection and beautiful design.
