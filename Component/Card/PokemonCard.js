//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const getTypeDetail=(type)=>{
    switch (type.toLowerCase()) {
        case 'fire':
            return {borderColor:'#FFD700',emoji:"🔥"}
            
         
    
        default:
            break;
    }
}
const PokemonCard = ({
    name,
    image,
    type,
    hp,
    moves,
    weakness
}) => {
    const {borderColor,emoji} =getTypeDetail(type)
    return (
        <View style={styles.card}>
           <View style={styles.nameContainer} >
            <Text style={[styles.name,styles.text]}>{name}</Text>
            <Text style={[styles.hp,styles.text]}> ❤️{hp}</Text>
           </View>
           <Image style={styles.image} source={image} resizeMode='contain' accessibilityLabel={`${name} Pokemon`} />
           <View style={styles.typeContainer}>
            <View style={[styles.badge,{borderColor:borderColor}]}>
            <Text style={styles.emojis}>
                {emoji}
            </Text>
            <Text style={styles.typetext}>
                {type}
            </Text>
            </View>
           </View>
           <View>
            <Text style={styles.text}>
                Moves : {moves.join(',')}
            </Text>
           </View>
           <View>
            <Text style={styles.text}>
                Weakness : {weakness.join(',')}
            </Text>
           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {

        borderRadius:10,
        borderWidth:2,
        margin:10,
        padding:10,
        elevation:20,
        backgroundColor: '#2c3e50',
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom:32
    },
    name:{
        fontSize:30,
        fontWeight:'bold'
    },
    hp:{
        fontSize:22
    },
    image:{
        width:'100%',
        height:100,
        marginBottom:20
    },
    typeContainer:{
marginBottom:40
    },
    badge:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4
    },
    
    emojis:{
        fontSize:30,
        marginRight:12,
        color:'white'
    },
    typetext:{
        fontSize:22,
        fontWeight:'bold',
        color:'white'
    },
    text:{
        color:'white'
    }
});

//make this component available to the app
export default PokemonCard;
