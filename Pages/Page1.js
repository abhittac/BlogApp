import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [name,setname]=useState('')
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#fff"
            onChangeText={setname}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigation.navigate('Page2',{name:name})
          }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:'100%'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    height: 50,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#1E90FF', // Button color
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
