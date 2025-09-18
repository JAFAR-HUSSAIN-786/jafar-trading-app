import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import Logs from './screens/Logs';
import Settings from './screens/Settings';
import Chat from './screens/Chat';
import CopyTrading from './screens/CopyTrading';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Logs" component={Logs} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="CopyTrading" component={CopyTrading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}