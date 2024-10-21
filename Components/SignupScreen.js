import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
const SignupScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // const saveAPIData = async () => {
  //   const data = {
  //     name,   // Use the state variables
  //     email,
  //     password,
  //   };

  //   const url = "http://10.40.0.94:3000/register"; // Use your local IP address
  //   try {
  //     let result = await fetch(url, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     result = await result.json();

  //     if (result.message) {
  //       console.warn(result.message); // Show message returned from the server
  //     } else {
  //       console.warn("Data added successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  
  function saveAPIData(){
    const userData = {
      name , 
      email,
      password
    };
    axios.post('http://10.40.3.134:5002/register',userData)
    .then(res=>{
      console.log(res.data);
      Alert.alert('Registered successfully!!');
      if(res.data.status=="ok"){
          
        props.navigation.navigate("Login");
      }
    })
    .catch(e=>console.log(e));

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      
      <TouchableOpacity style={styles.button} onPress={()=>saveAPIData()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text style={styles.linkText} onPress={() => props.navigation.navigate("Login")}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfeff;',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fdfeff',
    color: '#888',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#057c8e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  linkText: {
    color: '#057c8e',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignupScreen;