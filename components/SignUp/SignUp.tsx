import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Illustration Image */}
      {/* <Image
        source={require('../../assets/images/signup-illustration.png')} // Replace with your local image path
        style={styles.illustration}
      /> */}

      {/* Sign Up Page Title */}
      <Text style={styles.title}>Sign Up Page</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Number"
        value={number}
        onChangeText={(text) => setNumber(text)}
        keyboardType="phone-pad"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  illustration: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
  },
  createAccountButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
