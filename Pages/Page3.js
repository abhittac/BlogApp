import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { StyleSheet,  } from 'react-native';
export default function Page3() {
  return (
    <View >
        <Text className="py-4">Pressable</Text>
        <Pressable onPress={()=>{
            console.log("clicked")
        }}>

        <Image style={styles.background} source={{uri:'https://images.pexels.com/photos/8907218/pexels-photo-8907218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}} />
        </Pressable>
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
   height:100,
   width:100
        
    },
  });
  