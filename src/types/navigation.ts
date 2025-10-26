/**
 * Navigation types for the app
 * Centralized type definitions for React Navigation
 */

import { ROUTES } from '@constants';

export type RootStackParamList = {
  [ROUTES.WELCOME]: undefined;
  [ROUTES.MAIN_DRAWER]: undefined;
};

export type DrawerParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.REANIMATED]: undefined;
  [ROUTES.TURBO_MODULES]: undefined;
  [ROUTES.SETTINGS]: undefined;
};
