import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogsScreen from './screens/LogsScreen';
import ChatScreen from './screens/ChatScreen';
import CopyTradingScreen from './screens/CopyTradingScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="Logs" component={LogsScreen} options={{ title: 'Logs' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'AI Chat' }} />
        <Stack.Screen name="CopyTrading" component={CopyTradingScreen} options={{ title: 'Copy Trading' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
