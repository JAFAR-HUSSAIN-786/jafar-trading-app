import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Placeholder login - connect your backend
    if(!email || !password){ Alert.alert('Error','Enter email and password'); return; }
    // Example: await axios.post(CONFIG.BACKEND_URL + '/auth/login', {email,password})
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jafar GPT Trading</Text>
      <TextInput placeholder="Email" placeholderTextColor="#aaa" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}><Text style={styles.btnText}>Login</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#000',alignItems:'center',justifyContent:'center',padding:20},
  title:{color:'#fff',fontSize:28,marginBottom:20},
  input:{width:'100%',borderWidth:1,borderColor:'#222',padding:12,color:'#fff',borderRadius:8,marginBottom:12},
  btn:{backgroundColor:'#0a84ff',padding:14,width:'100%',borderRadius:8,alignItems:'center'},
  btnText:{color:'#fff',fontWeight:'bold'}
});
