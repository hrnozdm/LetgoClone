import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Product } from '../../models';
import { AntDesign } from '@expo/vector-icons';
import FavoriteProductItem from '../FavoriteProductItem'

type mainProduct={
    mainProduct:Product[];
}

export default function index({mainProduct}:mainProduct) {
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        <View>
         <Text style={styles.topicTitle}>Pendik</Text>
        </View>
         <View style={styles.detailTitle}>
            <Text style={styles.detailTitle}>Düzelt</Text>
            <AntDesign name="right" size={20} color="#f24E61" />
         </View>
      </View>

      <TouchableOpacity style={styles.mainProduct}>
           {mainProduct.map((item)=>{
             return(
                <FavoriteProductItem key={item.id} product={item} prodType='main'/>
             )
           })}
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
    titleProducts:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    productsContainer:{
        width:'92%',
        marginHorizontal:'4%',
        marginTop:'2%',
    },
    topicTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    detailTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:15,
        color:'#f24E61',
        fontWeight:'bold',
        alignItems:'center',
    },
    mainProduct:{
      flex:1,
      flexDirection:'row',
      alignItems:'flex-start',
      width:'100%',
      flexWrap:'wrap',
    
    }

})