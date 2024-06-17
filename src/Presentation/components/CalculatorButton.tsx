import { Pressable,Text } from "react-native";
import { colors,styles } from "../../config/app-theme";


interface Props{
label:String;
color?:String;
doublesize?:boolean;
blackText?:boolean;





}


  
  export const CalculatorButton = ({
    label,
    color=colors.darkGray,
    doublesize=false,
    blackText=false,
  

  }:Props) => {
    return (
     
                <Pressable style={({pressed})=>({
                  ...styles.button,
                   backgroundColor:color,
                   opacity:(pressed)? 0.8:1,
                   width:(doublesize)? 180:80
                })}>
                    
                    <Text  style={{
                    ...styles.buttonText,
                    color:(blackText)? 'black':'white'
                    
                    
                    }}>{label}</Text>
                    </Pressable>  
    )
  }
  

