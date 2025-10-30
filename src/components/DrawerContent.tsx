import React from 'react';

import { View, StyleSheet } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { Icon, Typography } from '@components';
import { useTheme } from '@hooks';

interface DrawerContentProps extends DrawerContentComponentProps {
  /**
   * User name to display in drawer header
   * @default "John Doe"
   */
  userName?: string;
  /**
   * User email to display in drawer header
   * @default "[email protected]"
   */
  userEmail?: string;
}

export const DrawerContent = ({
  userName = 'John Doe',
  userEmail = '[email protected]',
  ...props
}: DrawerContentProps) => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {/* User Info Section */}
      <View style={[styles.userSection, { borderBottomColor: colors.card }]}>
        <View
          style={[styles.avatarContainer, { backgroundColor: colors.primary }]}
          accessibilityRole="image"
          accessibilityLabel={`Avatar for ${userName}`}
        >
          <Icon name="account" size="xl" color={colors.background} />
        </View>
        <Typography variant="h3" style={styles.userName}>
          {userName}
        </Typography>
        <Typography variant="bodySmall" style={{ color: colors.textSecondary }}>
          {userEmail}
        </Typography>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userSection: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  userName: {
    marginBottom: 4,
  },
});
