//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';

// create a component
const Page8 = () => {
    const [name,setname]=useState(false)
    return (
        <View >
            <Text style={styles.text} >Dark Mode</Text>
            {/* <TextInput 
            value={name}
            onChange={(e)=>{
                setname(e.target.value)
            }}
            style={{height:40,borderColor:'white',borderWidth:2,marginTop:20,}}
            secureTextEntry
            keyboardType='web-search'
            /> */}
            <Switch
            value={name}
            onValueChange={()=>setname((prev)=>!prev)}
            trackColor={{false:'red',true:'blue'}}
            thumbColor={'yellow'}
            
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    text:{
        fontSize:20,
        color:'white'
    }
});

//make this component available to the app
export default Page8;
