import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigators/RootNavigation';

export default function App() {
  return (
  <NavigationContainer>
    <RootNavigation/>
  </NavigationContainer>
   
  );
}


const styles=StyleSheet.create({
   container:{
     marginTop:'8%',
   }
})


