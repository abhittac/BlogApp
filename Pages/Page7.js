import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, useWindowDimensions, TextInput } from 'react-native';


export default function Page7() {
 


  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [name,setname]=useState('')
  console.log('checec',name)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30,marginTop:200,color:'black'}}>
        Hellodddddddd
      </Text>
      {/* <TextInput
      style={styles.input}
      placeholder='enter name'
      value={name}
      onChangeText={setname}
      /> */}
   {/* <Text style={styles.input_text} >
    My Name
       {
        name
      }
    </Text> */}
      {/* <CustomButton title={"Click"}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  input:{
    // flex:1,
    marginTop:200,
    height:30,
    borderColor:'black',
    borderWidth:2,

  },
  input_text:{
    // flex:1,
    marginTop:400,
    height:30,
    borderColor:'black',
    borderWidth:2,

  }
});
