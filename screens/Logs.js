import React from 'react';
import { View, Text } from 'react-native';

export default function Logs() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#121212' }}>
      <Text style={{ color:'white', fontSize:20 }}>Logs Screen</Text>
    </View>
  );
}