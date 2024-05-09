import React, { useState } from 'react'
import { StyleSheet,  } from 'react-native';
import { ActivityIndicator, Alert, Button, Modal, StatusBar, Text, View } from 'react-native'

export default function Page5() {
    const [open,setopen]=useState(false)
  return (
   <View style={styles.box}>
    {/* <StatusBar backgroundColor={'black'} barStyle={'light-content'}/> */}
    {/* <ActivityIndicator size={'large'} color={'green'} animating={open}/> */}
    <Button title='Open' onPress={()=>{Alert.alert('Show Alert',"Sub heading",[{
        text:'SUBMIT',
        onPress:()=>{
            console.log('SUBMIT')
        }
    },
    {text:'CLOSE',
    onPress:()=>{
        console.log('CLOSE')
    }

    }
    ])}} />
    <View style={styles.box}>
        <Text className="text-lime-50">
            NEW BOX
        </Text>
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
   
    },
    box:{
        // flex: 1,
        backgroundColor: 'white',
        
        // shadowColor:'white',
        elevation: 15, // Add elevation for shadow effect
        borderRadius: 10, // Optional: add border radius to give rounded corners
    }
  });
  