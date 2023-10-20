import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import FavoriteProducts from '../../components/FavoriteProducts';
import MainProduct from '../../components/MainProducts';
import ProductAssets from '../../../assets/products';
import categoriesData from '../../../assets/categories';


export default function index() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProduct(ProductAssets);
    setCategories(categoriesData);
  },[]); // Boş bağımlılık dizisi ekleyerek sadece bir kez çalışmasını sağladık

  return (
    <ScrollView style={{ height: '100%' }}>
     
      <FavoriteProducts />
      <MainProduct mainProduct={product} />
    </ScrollView>
  )
}
