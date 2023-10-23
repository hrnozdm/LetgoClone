import { StyleSheet,TouchableOpacity,Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';




const Tab=createBottomTabNavigator();

export default function RootNavigation() {

  const CustomTopBarButton=({children})=>{

    return (
      <TouchableOpacity style={{
       width:70,
        height:70,
        backgroundColor:'#F23F5A',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:-21
      }}>
          <Ionicons name="camera-outline" size={24} color="white" />
          <Text style={{color:'white'}}>Sat</Text>
    </TouchableOpacity>
    )
    
  }
  return (
    
    <Tab.Navigator
     initialRouteName='Anasayfa'
     screenOptions={{
      tabBarHideOnKeyboard:true,
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#f24E61',
      tabBarInactiveTintColor:'#959595',
      headerShown:false,
      tabBarStyle:{
          height:50
      }
     }}
    >

<Tab.Screen name='Anasayfa' component={HomeNavigator} options={
        {tabBarIcon:()=>(
          <Entypo name="home" size={24} color="#f24E61" />
        )}
      }/>

<Tab.Screen name='Bildirimler ' component={HomeNavigator} options={
        {tabBarIcon:()=>(
          <Ionicons name="notifications-sharp" size={24} color="#f24E61" />
        )}
      }/>

<Tab.Screen name='Sat ' component={HomeNavigator} options={{
  tabBarButton:(props)=><CustomTopBarButton {...props} />
}}/>

<Tab.Screen name='Sohbet ' component={HomeNavigator} options={
        {tabBarIcon:()=>(
          <MaterialCommunityIcons name="message-text" size={24} color="#f24E61" />
        )}
      }/>

<Tab.Screen name='İlanlarım ' component={HomeNavigator} options={
        {tabBarIcon:()=>(
          <Entypo name="document" size={24} color="#f24E61" />
        )}
      }/>

       

    </Tab.Navigator>
  
  )
}

const styles = StyleSheet.create({})