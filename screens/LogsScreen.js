import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LogsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Logs</Text>
      <Text style={styles.note}>Daily trades and export options will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, color: '#fff', marginBottom: 8 },
  note: { color: '#bbb', textAlign: 'center' },
});
