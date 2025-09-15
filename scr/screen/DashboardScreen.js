import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Chart')}>
        <Text style={styles.cardTitle}>Open BTCUSD Chart</Text>
      </TouchableOpacity>
      <View style={{height:20}}/>
      <TouchableOpacity style={styles.card} onPress={()=>alert('Alerts / Telegram / Email hooks will be here')}>
        <Text style={styles.cardTitle}>Alerts & Integrations</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#000',padding:20},
  title:{color:'#fff',fontSize:26,marginBottom:12},
  card:{backgroundColor:'#111',padding:16,borderRadius:10},
  cardTitle:{color:'#fff',fontSize:16}
});
