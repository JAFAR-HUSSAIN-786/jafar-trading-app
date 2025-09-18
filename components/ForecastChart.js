import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ForecastChart({ upper, lower }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Forecast</Text>
      <Text style={styles.value}>Upper: {upper}</Text>
      <Text style={styles.value}>Lower: {lower}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: '100%', padding: 12, backgroundColor: '#1a1a1a', borderRadius: 10, marginBottom: 12 },
  title: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  value: { color: '#ddd' },
});
