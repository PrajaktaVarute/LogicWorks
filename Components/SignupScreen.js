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
      
      <Text style={styles.linkText} onPress={()=>props.navigation.navigate("Login")} >Already have an account? Login</Text>

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
      color:'#ffffff',
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
);
export default SignupScreen;


