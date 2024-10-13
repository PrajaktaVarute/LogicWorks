import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon
import LoginScreen from './Components/LoginScreen';
import InfoScreen from './Components/InfoScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import HomeScreen from './Components/HomeScreen';
import SignupScreen from './Components/SignupScreen';

const Stack = createNativeStackNavigator();


// DrawerNavigator function


const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  // Automatically navigate to InfoScreen after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Switch to the InfoScreen after the welcome screen
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <NavigationContainer>
      {showWelcome ? (
        <WelcomeScreen /> // Directly render WelcomeScreen if showWelcome is true
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SnapStory"
            component={InfoScreen}
            options={{
              title: 'SnapStory',
              headerRight: () => (
                <Icon
                  name="menu"
                  size={30}
                  color="#fff"
                  onPress={() => alert('Drawer opened')} // Placeholder drawer opening logic
                  style={{ marginRight: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerShown: true, // Ensure this is true
              headerRight: () => (
                <Icon
                  name="menu"
                  size={30}
                  color="#fff"
                  onPress={() => alert('Drawer opened')}
                  style={{ marginRight: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: 'Signup',
              headerRight: () => (
                <Icon
                  name="menu"
                  size={30}
                  color="#fff"
                  onPress={() => alert('Drawer opened')}
                  style={{ marginRight: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen} // Use DrawerNavigator instead of HomeScreen
            options={{
              title: 'Home',
              headerShown: false,
              headerLeft: () => (
                <Icon
                  name="menu"
                  size={30}
                  color="#fff"
                  onPress={()=>alert('drawer opened')} // Placeholder drawer logic
                  style={{ marginRight: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;