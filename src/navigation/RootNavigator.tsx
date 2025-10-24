import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  WelcomeScreen,
  HomeScreen,
  ReanimatedScreen,
  TurboModulesScreen,
  SettingsScreen,
} from '@screens';
import { DrawerContent } from '@components';
import type { RootStackParamList, DrawerParamList } from '@types';

// Define the Drawer Navigator (Main screens with drawer access to Settings)
const MainDrawer = createDrawerNavigator<DrawerParamList>({
  initialRouteName: 'Home',
  screenOptions: {
    drawerPosition: 'right',
    drawerType: 'front',
    headerShown: true,
  },
  drawerContent: props => <DrawerContent {...props} />,
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Benchmark',
        drawerLabel: 'Home',
        drawerIcon: ({ color, size }) => {
          const Icon =
            require('react-native-vector-icons/MaterialCommunityIcons').default;
          return <Icon name="home" size={size} color={color} />;
        },
      },
    },
    Reanimated: {
      screen: ReanimatedScreen,
      options: {
        title: 'Reanimated',
        drawerLabel: 'Reanimated',
        drawerIcon: ({ color, size }) => {
          const Icon =
            require('react-native-vector-icons/MaterialCommunityIcons').default;
          return <Icon name="animation" size={size} color={color} />;
        },
      },
    },
    TurboModules: {
      screen: TurboModulesScreen,
      options: {
        title: 'Turbo Modules',
        drawerLabel: 'Turbo Modules',
        drawerIcon: ({ color, size }) => {
          const Icon =
            require('react-native-vector-icons/MaterialCommunityIcons').default;
          return <Icon name="lightning-bolt" size={size} color={color} />;
        },
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        headerTitle: '',
        drawerLabel: 'Settings',
        drawerIcon: ({ color, size }) => {
          const Icon =
            require('react-native-vector-icons/MaterialCommunityIcons').default;
          return <Icon name="cog" size={size} color={color} />;
        },
      },
    },
  },
});

// Define the Root Stack Navigator (Welcome -> Drawer)
const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Welcome',
  screenOptions: {
    headerBackButtonDisplayMode: 'minimal',
  },
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {
        title: 'Welcome',
        headerShown: false,
      },
    },
    MainDrawer: {
      screen: MainDrawer,
      options: {
        headerShown: false,
      },
    },
  },
});

// Create the static navigation component
export const Navigation = createStaticNavigation(RootStack);
