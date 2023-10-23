import { StyleSheet,Image,TextInput,Text,TouchableOpacity} from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';
import { SafeAreaView } from 'react-native-safe-area-context';



const Stack=createStackNavigator();
const MainHeaderComponent= () =>{
  return (
    <SafeAreaView style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:'2%'}}>
      <TouchableOpacity style={{marginHorizontal:'2%'}}>
       <Image style={{height:35,width:35,borderRadius:20}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ricardo_Quaresma_%28cropped%29_2.jpg/250px-Ricardo_Quaresma_%28cropped%29_2.jpg'}}></Image>
        </TouchableOpacity>
        <TextInput placeholder='Ara...' style={{backgroundColor:'#e5e5e5',flex:1,alignItems:'center',paddingLeft:2,borderRadius:8}}/>
        <Text style={{color:'#FF1840'}}>Filterele</Text>
   
  </SafeAreaView>
  )
     
}


export default function HomeNavigator() {
  return (
   <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        header:()=>(
          <MainHeaderComponent></MainHeaderComponent>
        )
      }}/>     
   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
      
})


