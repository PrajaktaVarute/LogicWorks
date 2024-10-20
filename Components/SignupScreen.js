import React, { useState } from 'react';
import {Text,View,StyleSheet, TextInput,TouchableOpacity} from 'react-native';

 const  SignupScreen=(props)=>{

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");



const saveAPIData=async()=>{
  const data={
    name:"rohit",
    
    email:"rohit@gmail.com",
    password:"1234"
  }

  const url="http://10.40.16.106:3000/users";
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
        <Text style={styles.title}>Sign Up</Text>
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
      
      <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      
    </View>
    
);
};


const styles=StyleSheet.create({
    container:
    {
      flex:1,
      backgroundColor:'#000',
      padding:20,
      justifyContent:'center',
    },
    input:{
      height:50,
      backgroundColor:'#1e1e1e',
      color:'#ffffff',
      marginBottom:20,
      paddingHorizontal:10,
      borderRadius:8,
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
    
  }
);
export default SignupScreen;


