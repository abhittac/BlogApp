import React, { useState } from 'react'
import { Button, ScrollView, Text } from 'react-native'
import { StyleSheet,  } from 'react-native';
import { useRoute } from '@react-navigation/native';
export default function Page2({navigation}) {
    const route =useRoute()
    const [show,setshow]=useState(true)
  return (
    <ScrollView
    className={styles.container}
    >
        {
            show &&

        <Text style={styles.text}
        className="font-mono"
        >
            Click below      {route.params.name}
        </Text>
        }
             <Text style={styles.text}
        className="font-mono"
        >
            {route.params.name}
        </Text>
        <Button
            style={styles.button}
        title='Play' color={'purple'} onPress={()=>{
            setshow(!show)
            navigation.setParams({
                name:'newname'
            })

        }} />
            
        
        </ScrollView> )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 42,
        marginTop:200
        

      
    },
    button:{
        marginTop:200
    }
});
