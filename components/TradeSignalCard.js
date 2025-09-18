import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TradeSignalCard({ pair, signal, price }) {
  const color = signal === 'BUY' ? '#00ff00' : '#ff4444';
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.pair}>{pair}</Text>
      <Text style={[styles.signal, { color }]}>{signal}</Text>
      <Text style={styles.price}>Price: {price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#1e1e1e',
  },
  pair: { fontSize: 18, color: '#fff', marginBottom: 6 },
  signal: { fontSize: 18, fontWeight: '700' },
  price: { color: '#ddd', marginTop: 6 },
});
