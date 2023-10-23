import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import FavoriteProducts from '../../components/FavoriteProducts';
import MainProduct from '../../components/MainProducts';
import ProductAssets from '../../../assets/products';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotifcation from '../../components/MessageNotification';



export default function index() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(ProductAssets);
  },[]); 

  return (
    <ScrollView style={{ height: '100%' }}>
      <MessageNotifcation/>
      <CategoryFilter/>
      <FavoriteProducts />
      <MainProduct mainProduct={product} />
    </ScrollView>
  )
}
