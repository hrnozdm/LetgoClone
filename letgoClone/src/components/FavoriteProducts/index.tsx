import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react';
import FavoriteProductItem from '../../components/FavoriteProductItem';
import productsAssets from '../../../assets/products';
import { AntDesign } from '@expo/vector-icons';
import {Product} from '../../models/index';


export default function index() {
    const [products,setProducts]=useState<Product[]>([]);
    useEffect(()=>{
        setProducts(productsAssets);
    })
   
    
  return (
    <View style={styles.productsContainer}>
            {/*Render Header */}

            <View style={styles.titleProducts}>
                
             <Text style={styles.topicTitle}>Vitrin İlanları</Text>

                <View style={styles.detailTitle}>
                    <Text style={styles.detailTitle}>Hepsini Gör</Text>
                    <AntDesign name="right" size={18} color="#f24E61" />
                </View>
            </View>

            {/* Render Favorite Product Image */}

           <ScrollView horizontal={true} bounces={true}>
              {products.map((item)=>{
                return(
                    <FavoriteProductItem key={item.id} product={item} prodType='favorite'/>
                )
              })}
           </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    titleProducts:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        height:40,
        alignItems:'center',
        marginBottom:8,
      },
      productsContainer:{
        marginLeft:'4%',
        width:'96%',
      },
      topicTitle:{
        fontWeight:'bold',
        fontSize:16
      },
      detailTitle:{
        color:'#f24E61',
        fontWeight:'bold',
        fontSize:14,
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
      }
})