import React, { useState } from 'react';
import {Text,View,StyleSheet, TextInput,TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen=(props)=>{

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const userData={
  email : email,
  password
}
function handleSubmit(){
  console.log(email,password);
  axios.post("http://10.40.3.134:5002/login-user",userData)
  .then(res=>{
    console.log(res.data);
    if(res.data.status=="ok")
    {
      Alert.alert('Logged in successful');
      AsyncStorage.setItem("token",res.data.data);
      props.navigation.navigate("DrawerScreen");
       
    }
      
  });  
  
}

const saveAPIData=async()=>{
  const data={
    name:"rohit",

    email:"rohit@gmail.com",
    password:"1234"
  }

  const url="http://10.40.4.57:3000/login";
  let result=await fetch(url,
    {
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({name,email,password})

    }
  )
  result=await result.json();
  {
    result ?
    console.warn("data added")
    :
    null
  }
}


return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888" // Placeholder text color
        onChangeText={(text)=>setName(text)}
        value={name}
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888" // Placeholder text color
        onChangeText={(text)=>setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888" // Placeholder text color
        secureTextEntry
        onChangeText={(text)=>setPassword(text)}
        value={password}
      />

       {/* <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("DrawerScreen")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>   */}
      <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
      <Text style={styles.linkText} onPress={()=>props.navigation.navigate("Signup")} >Don't have an account? Sign Up</Text>

    </View>

);
};


const styles=StyleSheet.create({
    container:
    {
      flex:1,
      backgroundColor:'#fdfeff;',
      padding:20,
      justifyContent:'center',
    },
    input:{
      height:50,
      backgroundColor:'#fdfeff',
      color:'#888',
      marginBottom:20,
      paddingHorizontal:10,
      borderRadius:8,
    },
    button: {
      height: 50,
      backgroundColor: '#057c8e', // Dark theme button color
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#ffffff', // Button text color
      fontSize: 18,
    },
    title: {
      color: '#000', // Title text color
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
    },
    linkText: {
      color: '#057c8e', // Link text color
      textAlign: 'center',
      marginTop: 20,
    },
  }
)

export default LoginScreen;