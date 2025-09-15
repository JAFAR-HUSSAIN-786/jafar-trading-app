import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function ChartScreen(){
  // Sample data - replace with live candles from backend
  const data = {
    labels: ['09:00','10:00','11:00','12:00','13:00','14:00'],
    datasets: [{ data: [48000,48500,48200,48800,49000,48700] }]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BTCUSD - Sample Chart</Text>
      <LineChart
        data={data}
        width={screenWidth-24}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom:'#000',
          backgroundGradientTo:'#000',
          decimalPlaces:0,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`
        }}
        style={{borderRadius:8}}
      />
      <Text style={{color:'#888',marginTop:12}}>Buy/Sell markers and indicators will be overlayed here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#000',padding:12},
  title:{color:'#fff',fontSize:18,marginBottom:8}
});
