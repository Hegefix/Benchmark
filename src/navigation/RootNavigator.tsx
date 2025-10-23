import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  HomeScreen,
  ReanimatedScreen,
  TurboModulesScreen,
  SettingsScreen,
} from '@screens';
import type { RootStackParamList } from '@types';

// Define the navigation configuration using Static API (React Navigation v7)
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
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Benchmark',
      },
    },
    Reanimated: {
      screen: ReanimatedScreen,
      options: {
        title: 'Reanimated',
      },
    },
    TurboModules: {
      screen: TurboModulesScreen,
      options: {
        title: 'Turbo Modules',
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        title: 'Settings',
      },
    },
  },
});

// Create the static navigation component
export const Navigation = createStaticNavigation(RootStack);
