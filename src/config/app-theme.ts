import { StyleSheet } from "react-native";

export const colors={
 darkGray:'#2D2D2D',
 lightGray:'#9B9B9B',
 orange:'#FF9427',

 textPrimary :'white',
 textSecondary:'#666666',
 background:'#000000'

 

}


export const styles = StyleSheet.create({

background:{
     backgroundColor: colors.background,
    flex:1,
   
},
calculatorContainer:{
    flex:1,
    padding:15,
  justifyContent:'center',
  



},

mainResult:{
 
   color:colors.textPrimary,
   fontSize:70,
   textAlign:'right',
   marginBottom:10,
   fontWeight:'400',
},
 subResult:{
 
   color:colors.textSecondary,
   fontSize:40,
 textAlign:'right',
 fontWeight:'300',

 },
row:{
   flexDirection:'row',
   justifyContent:'space-evenly',
   marginBottom:18,
   paddingHorizontal:10,
   gap:20,




},
  

button:{
 
    height:80,
    width:80,
    backgroundColor:colors.darkGray,
     borderRadius:40,
     justifyContent:'center',
     marginHorizontal:10

},

buttonText:{
    textAlign:'center',
    color:'white',
    padding:10,
    fontSize:30,
   fontWeight:'300',

}


})