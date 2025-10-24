import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useTheme } from '@hooks';
import { Icon } from '@components';

export const DrawerContent = (props: DrawerContentComponentProps) => {
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
        >
          <Icon name="account" size="xl" color={colors.background} />
        </View>
        <Text style={[styles.userName, { color: colors.text }]}>John Doe</Text>
        <Text style={[styles.userEmail, { color: colors.textSecondary }]}>
          [email protected]
        </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
  },
});
