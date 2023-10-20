import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
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

});


export default styles;