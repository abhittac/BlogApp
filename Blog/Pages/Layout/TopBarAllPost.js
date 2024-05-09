//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TopBarAllPost = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >TopBarAllPost</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        backgroundColor: '#2c3e50',
        height:70,

    },
    text:{
        color:'white',
        fontSize:20,
        marginTop:20
       
    }
});

//make this component available to the app
export default TopBarAllPost;
