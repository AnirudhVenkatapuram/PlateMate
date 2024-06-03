import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'


const LoginScreen = ({ navigation }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    if(email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/HomeScreen')
      }
  
      catch(err) {
        console.log('Error: ', err.message)
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <Button title="Log In" onPress={handleLogIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5' // Light grey background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333' // Dark grey color for text
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white', // White background for the text input
    borderColor: '#ccc', // Light grey border
    borderWidth: 1,
    borderRadius: 5
  }
});

export default LoginScreen;