import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'expo-router';
import { auth } from '../config/firebase'

const SignUpScreen = ({ navigation }) => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if(email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/HomeScreen')
      }

      catch(err) {
        console.log('Error: ', err.message)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={value => setFullName(value)}
        autoCapitalize="words" 
      />
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
        secureTextEntry={true} // Hide password input
        autoCapitalize="none"
      />

      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5' // Light grey background for better visibility
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333' // Dark grey color for the text
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white', // White background for the inputs
    borderColor: '#ccc', // Light grey border for aesthetics
    borderWidth: 1,
    borderRadius: 5 // Rounded corners for the text inputs
  }
});

export default SignUpScreen;
