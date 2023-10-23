import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function index() {
  return (
    <View style={styles.messageNoContainer}>
     <View style={styles.messageNoLogo}>
        <MaterialCommunityIcons name="message-processing" size={20} color="white" />
        <Text style={{marginLeft:4,color:'white'}}>Mesaj Bildirimlerini Aç</Text>
     </View>
     <View><Feather name="chevron-right" size={24} color="white" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
    messageNoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#323232',
        alignItems:'center',
        height:40,
    },
    messageNoLogo:{
       flexDirection:'row',
       marginHorizontal:5,
    },
    
})