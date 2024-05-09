import React, { useState } from 'react'
import { Button, Modal, StatusBar, Text, View } from 'react-native'

export default function Page4({heading}) {
    const [open,setopen]=useState(false)
  return (
   <View className={' bg-slate-50'} style={{height:100,flex:1,alignItems:'center',borderWidth:1,borderColor:'blue',flexBasis:160}}>
    {/* <StatusBar backgroundColor={'lightgreen'} barStyle={'dark-content'}/>
    <Button title='Open' onPress={()=>{setopen(true)}} />
    <Modal visible={open}
    onRequestClose={()=>{
        setopen(false)
    }}
    animationType="slide"
    presentationStyle='pageSheet'
    >
        <View className={'bg-slate-800 w-12 h-5/6'}>
            <Text>
                Modal Data
            </Text>
        </View>
        <Button title='Close' onPress={()=>{setopen(false)}} />
    </Modal> */}
    <Text className={'text-blue-900'}>
        {heading}
    </Text>
   </View>
  )
}
