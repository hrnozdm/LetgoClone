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
    },
    favlabeled:{
        transform:[{rotate:'45deg'}],
        position:'absolute',
        backgroundColor:'white',
        top:15,
        right:-10,
        paddingHorizontal:0.8,
        paddingVertical:0.8,
    },
    main:{
       width:width*0.46,
       alignItems:'center'
    },
    mainImage:{
        width:width*0.43,
        height:height*0.20,
        borderRadius:12,
       
    },
    mainView:{
        width:width*0.43,
        height:height*0.20,
        marginTop:'5%',
        display:'flex',
        flexDirection:'row',
        marginLeft:'5%'
        
    }
});


export default styles;