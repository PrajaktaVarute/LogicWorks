import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens here
import LoginScreen from './Components/LoginScreen'; // Example other screen

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Prompt"
        placeholderTextColor="#888" // Placeholder text color
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Generate Video</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Other" component={LoginScreen} /> {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 150,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignContent: 'space-evenly',
  },
  button: {
    height: 50,
    backgroundColor: '#bb86fc', // Dark theme button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 18,
  },
  title: {
    color: '#ffffff', // Title text color
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  linkText: {
    color: '#bb86fc', // Link text color
    textAlign: 'center',
    marginTop: 20,
  },
});
