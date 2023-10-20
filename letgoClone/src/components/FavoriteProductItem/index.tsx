import {Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react';
import {Product} from '../../models/index';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


type productProps={
     product:Product,
     prodType:string,
}

export default function index({product,prodType}:productProps) {
  return (
    <TouchableOpacity style={prodType==='favorite' ? styles.favorites : styles.main}>
        <View style={prodType==='favorite' ? styles.favoriteView : styles.mainView}>
            <Image source={{uri:product.image}}
            style={prodType==='favorite' ? styles.favoriteImage : styles.mainImage}
            resizeMode='stretch'
            />
        </View>
         
         {prodType=='favorite' && parseInt(product.id)%2==1 &&
         (
          <View style={styles.favlabeled}>
          <Text>Öne Çıkan</Text>
        </View>
         )
         
         }
       

        <TouchableOpacity style={styles.favoriteHeart}>
          <AntDesign name="heart" size={24} color="red" />
        </TouchableOpacity>
       
    </TouchableOpacity>
  )
}

