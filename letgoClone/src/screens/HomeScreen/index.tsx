import React,{useEffect,useState} from "react";
import {Text, View,ScrollView } from "react-native";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products';
import {Product} from '../../models/index';
import FavoriteProductItem from '../../components/FavoriteProductItem';

export default function index(){
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

           <ScrollView horizontal={true} bounces={true}>
              {productsAssets.map((item)=>{
                return(
                    <FavoriteProductItem key={item.id} product={item}/>
                )
              })}
           </ScrollView>
        </View>

     )
}


