import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
const withDrawerIcon = (name: string) => ({ color, size }: { color: string; size: number }) => (
  <MaterialCommunityIcons name={name} size={size} color={color} />
);

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
        drawerIcon: withDrawerIcon('home'),
      },
    },
    Reanimated: {
      screen: ReanimatedScreen,
      options: {
        title: 'Reanimated',
        drawerLabel: 'Reanimated',
        drawerIcon: withDrawerIcon('animation'),
      },
    },
    TurboModules: {
      screen: TurboModulesScreen,
      options: {
        title: 'Turbo Modules',
        drawerLabel: 'Turbo Modules',
        drawerIcon: withDrawerIcon('lightning-bolt'),
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        headerTitle: '',
        drawerLabel: 'Settings',
        drawerIcon: withDrawerIcon('cog'),
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
