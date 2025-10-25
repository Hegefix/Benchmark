import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '@hooks';

interface SettingRowProps {
  label: string;
  value: string;
}

export const SettingRow = ({ label, value }: SettingRowProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <Text style={[styles.value, { color: colors.textSecondary }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});
