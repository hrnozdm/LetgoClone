import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import React from 'react';
import {Product} from '../../models/index';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


type productProps={
     product:Product,
}

export default function index({product}:productProps) {
  return (
    <TouchableOpacity style={styles.favorites}>
        <View style={styles.favoriteView}>
            <Image source={{uri:product.image}} 
            style={styles.favoriteImage}
            resizeMode='stretch'
            />
        </View>

        <TouchableOpacity style={styles.favoriteHeart}>
        <AntDesign name="heart" size={24} color="white" />
        </TouchableOpacity>
       
    </TouchableOpacity>
  )
}

