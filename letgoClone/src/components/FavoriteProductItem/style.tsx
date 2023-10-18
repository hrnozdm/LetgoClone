import { Dimensions, StyleSheet } from "react-native";

const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
    favoriteImage:{
        width:width*0.28,
        height:height*0.15,
        borderRadius:10,
    },
    favoriteView:{
        width:width*0.28,
        height:height*0.15,
    },
    favorites:{
        width:width*0.3,
    },
    favoriteHeart:{
        position:'absolute',
        right:10,
        bottom:6,
    }
});


export default styles;