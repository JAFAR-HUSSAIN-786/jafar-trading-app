import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#121212' }}>
      <Text style={{ color:'white', fontSize:20 }}>Dashboard</Text>
      <Button title="Go to Logs" onPress={() => navigation.navigate('Logs')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Go to Copy Trading" onPress={() => navigation.navigate('CopyTrading')} />
    </View>
  );
}