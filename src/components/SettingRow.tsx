import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SettingRowProps {
  label: string;
  value: string;
  isDarkMode: boolean;
}

export const SettingRow = ({ label, value, isDarkMode }: SettingRowProps) => {
  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const valueStyle = {
    color: isDarkMode ? '#a0a0a0' : '#666666',
  };

  return (
    <View style={styles.row}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
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
