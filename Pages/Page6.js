import React from 'react'
import { View } from 'react-native'
import Page4 from './Page4'
import { StyleSheet,  } from 'react-native';
export default function Page6() {
    
  return (
   <View style={styles.container}>
     {[1, 2, 3, 4, 5, 6].map((i) => (
        <Page4 key={i} heading={`Card${i}`} />
      ))}

   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      gap:10,
      
 
    },
   
  });
  