import React, { useState, useEffect } from 'react';
import { View, Text, Button,SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Components/LoginScreen';
import InfoScreen from './Components/InfoScreen';
import WelcomeScreen from './Components/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = ()=> {
  const [showWelcome, setShowWelcome] = useState(true);

  // Automatically navigate to InfoScreen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Switch to the InfoScreen after the welcome screen
    }, 1500); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <NavigationContainer>
      {showWelcome ? (
        <WelcomeScreen /> // Directly render WelcomeScreen if showWelcome is true
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}

    </NavigationContainer>
  )
};

export default App;