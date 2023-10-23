import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import categoriesData from '../../../assets/categories';




export default function index(){
   

  const [categories, setCateories] = useState([])

  useEffect(()=>{
    setCateories(categoriesData)
  },[]);

  return (
    <ScrollView horizontal={true} style={styles.categoryContainer}>
       
      {categories.map((item)=>{
        return(
          <TouchableOpacity >
            <View style={styles.categoryCenter}  key={item.id}> 
            <Image source={item.src} style={styles.categoryImage}/>
            <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
       
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
     
    categoryImage:{
        width:60,
        height:60,
        borderRadius:55,
        marginLeft:4,
       
    },
    categoryContainer:{
      width:'96%',
      marginHorizontal:'4%',
      marginBottom:'3%',
      marginTop:'2%',
      
    },
    categoryCenter:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      marginHorizontal:4,
    },
    categoryName:{
        fontSize:13,
    }
  
   

})