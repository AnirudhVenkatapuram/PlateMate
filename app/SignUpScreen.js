import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words" // Automatically capitalize the first letter of each word
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Hide password input
        autoCapitalize="none"
      />

      <Button title="Sign Up" onPress={() => navigation.replace('/HomeScreen')} />
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
