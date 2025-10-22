import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  HomeScreen,
  ReanimatedScreen,
  TurboModulesScreen,
  SettingsScreen,
} from '../screens';

// Define the navigation configuration using Static API (React Navigation v7)
const RootStack = createNativeStackNavigator({
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
        headerLargeTitle: true,
      },
    },
    Reanimated: {
      screen: ReanimatedScreen,
      options: {
        title: 'Reanimated',
        headerBackTitle: 'Back',
      },
    },
    TurboModules: {
      screen: TurboModulesScreen,
      options: {
        title: 'Turbo Modules',
        headerBackTitle: 'Back',
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        title: 'Settings',
        headerBackTitle: 'Back',
      },
    },
  },
});

// Create the static navigation component
export const Navigation = createStaticNavigation(RootStack);

