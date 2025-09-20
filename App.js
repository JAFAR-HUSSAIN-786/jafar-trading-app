
import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [compounding, setCompounding] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const checkUpdate = () => {
    setUpdateAvailable(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Jafar Billionaire GPT Trading Software</Text>

      <Text style={styles.section}>📊 Trading & Performance</Text>
      <Text>Daily profit: 60–80%, Per trade: 5–10%</Text>
      <Text>800–1000 trades/day</Text>
      <Text>Spot + Futures, Automatic compounding</Text>
      <Text>Offline trading (auto-sync when online)</Text>
      <Text>Multi-pair & multi-exchange</Text>
      <Text>Auto + Manual trading</Text>

      <Text style={styles.section}>⚡ Trading Modes</Text>
      <Text>Safe / Medium / Aggressive</Text>

      <Text style={styles.section}>📈 Indicators & Market Analysis</Text>
      <Text>Alligator, MACD, RSI, SMA, Volume + GPT filter</Text>
      <Text>Auto trend lines, Supply & demand zones</Text>

      <Text style={styles.section}>🤖 Automation & AI</Text>
      <Text>AI Analyst & Advisor (automatic)</Text>
      <Text>Copy Trading with templates & filters</Text>
      <Text>Backtesting included</Text>

      <Text style={styles.section}>🏦 Platform & Infrastructure</Text>
      <Text>Crypto + Forex (Binance Testnet + Exness Demo)</Text>
      <Text>MT5 timeframes M1 → Monthly</Text>
      <Text>Mobile + Tablet + PC support, Dark mode UI</Text>

      <Text style={styles.section}>🔔 Alerts & Logs</Text>
      <Text>Gmail alerts only</Text>
      <Text>Daily logs in-app + emailed</Text>
      <Text>Profit/Loss in PKR + conversion</Text>

      <Text style={styles.section}>🔐 Account & Security</Text>
      <Text>Secure activation (Trial + Full, tied to email)</Text>
      <Text>Funds transfer to broker/Binance</Text>

      <Text style={styles.section}>🔄 Software Update System</Text>
      <Button title="Check for Updates" onPress={checkUpdate} />
      {updateAvailable && <Text>Update Available! (Simulated)</Text>}

      <Text style={styles.section}>⚙️ Compounding</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Enable Compounding</Text>
        <Switch value={compounding} onValueChange={setCompounding} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  section: { fontSize: 18, fontWeight: '600', color: '#ffcc00', marginTop: 20 }
});
