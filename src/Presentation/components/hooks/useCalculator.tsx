import { useState } from "react"


export const useCalculator = () => {

     const [number,setNumber]=useState('0')

     


     const buildNumber=(numberString:string)=>{
     
             console.log('number'+number);
            console.log('numberString'+numberString);

                                      
                                      if(numberString===('C'))return setNumber('0') ;
                                      if(number.includes('.')&&numberString==='.') return;
                                      if(number===('0')&&numberString===('0')) return  console.log('primera condicion');
    
                                     if((number.startsWith('0') || number.startsWith('-0'))&&(numberString==='.')){
                                       console.log('segunda condicion');
                                     return     setNumber(number + numberString);              
                                     }  
                                       if(number.startsWith('0')&&!number.includes('.')){ 
                                           console.log('tercera condicion')
                                          return setNumber(numberString)
                                                 
                                                                                                              }                                                          
                                                              
                                                                  
       return setNumber(number+numberString)

     



     }

  return {number,
   buildNumber
}
}
  