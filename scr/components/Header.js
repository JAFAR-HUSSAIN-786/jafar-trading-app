import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Header({title}){
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header:{height:60,justifyContent:'center',paddingHorizontal:12,backgroundColor:'#000'},
  title:{color:'#fff',fontSize:18}
});
