import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; 
import LoginScreen from './Components/LoginScreen';
import InfoScreen from './Components/InfoScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import HomeScreen from './Components/HomeScreen';
import SignupScreen from './Components/SignupScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerScreen(){
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fdfeff',
        },
        drawerLabelStyle:{
          color: '#057c8e',
        }
      }}
    initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} 
       options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#fdfeff',

        },
        headerTintColor: '#057c8e',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
       }}
      />
      <Drawer.Screen name="About" component={InfoScreen} options={{
        headerShown: false,
        drawerIcon: ({ color, size }) => (
          <Icon name="Home" size={30} color={'#057c8e'} />
        ),
        }} />
      <Drawer.Screen name="Logout" component={LoginScreen} options={{
        headerShown: false,
        drawerIcon: ({ color, size }) => (
          <Icon name="logout" size={size} color={'#057c8e'} />
        ),
        }}/>
    </Drawer.Navigator>
  );
}


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
  <GestureHandlerRootView style={{ flex: 1 }}>
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
              
              headerStyle: {
                backgroundColor: '#fdfeff',
              },
              headerTintColor: '#057c8e',
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
              
              headerStyle: {
                backgroundColor: '#fdfeff',
              },
              headerTintColor: '#057c8e',
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
              
              headerStyle: {
                backgroundColor: '#fdfeff',
              },
              headerTintColor: '#057c8e',
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
                  color="#057c8e"
                  onPress={()=>alert('drawer opened')} // Placeholder drawer logic
                  style={{ marginRight: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: '#fdfeff',
              },
              headerTintColor: '#057c8e',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="DrawerScreen" component={DrawerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  </GestureHandlerRootView>
  );
};

export default App;