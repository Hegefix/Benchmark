import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Typography } from '@components';
import { useTheme } from '@hooks';

interface SettingRowProps {
  label: string;
  value: string;
}

export const SettingRow = ({ label, value }: SettingRowProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <Typography variant="body" style={{ color: colors.text }}>
        {label}
      </Typography>
      <Typography variant="bodyMedium" style={{ color: colors.textSecondary }}>
        {value}
      </Typography>
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
});
