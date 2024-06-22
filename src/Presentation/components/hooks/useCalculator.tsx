import { useRef, useState } from "react"


enum Operator{
 add,
 less,
 multiply,
 divide,



}





export const useCalculator = () => {

             const [number,setNumber]=useState('0');
              const[prevnumber,setPrevNumber]=useState('0');

   
   
  const lastOperation =useRef<Operator>();
    


   

     const clear =()=>{

       let currentSingn ='';
       let temporalNumber=number;
          
        if(number.includes('-')){
            
          console.log('entro al limpiador con un menos');
           currentSingn='-';
           temporalNumber=number.substring(1);
        }
         if(temporalNumber.length>1){
          console.log(temporalNumber);
          return    setNumber(currentSingn+temporalNumber.slice(0,-1))
            }  
        setNumber('0')
          
     }

     const Borrado=(borrarString:String)=>{
         
        if(borrarString==='C')
          setNumber('0');
          setPrevNumber('0');
          console.log('esta borrando');
        return ;

                                                                  }

     const  toggleSign=()=>{
      if(number.includes('-')){
        return setNumber(number.replace('-',''))
      }
      setNumber('-'+number);
                                          }


     const buildNumber=(numberString:string)=>{
     
                                     console.log('number'+number);
                                      console.log('numberString'+numberString);

                                      
                  
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
                                         if((numberString==='del')&&((number==='0')&&(numberString!='0'))){ 
                                             console.log('cuarta cindicion')
                                                return  setNumber('0');          
                                                                                        }                                                          
                                                              
                                                                 
                                                                          return setNumber(number+numberString);
    
                                                                              }

                                                  const setLastNumber=()=>{
                                                                if(number.endsWith('.')){
                                                                setPrevNumber(number.slice(0,-1));
                                                                }else {
                                                                               setPrevNumber(number);
                                                                               console.log('entrando a setLAstNumber '+prevnumber);
                                                                          }
                                                                            setNumber('0');
  
                                                                                            }                               

                                                        const divideOperation=()=>{
                                                                                 setLastNumber();
                                                                                  lastOperation.current=Operator.divide;
                                                                                                  }


                                                         const addOperation=()=>{
                                                                                  setLastNumber();
                                                                                  lastOperation.current=Operator.add;
                                                                                                 }

                                                         const multiplyOperation=()=>{
                                                                                   console.log("multiplicacion") ;
                                                                                   setLastNumber();
                                                                                  lastOperation.current=Operator.multiply;
                                                                                                       }
                                                
                                                           const lessOperation=()=>{
                                                                                    setLastNumber();
                                                                                    lastOperation.current=Operator.less;
                                                                                                     }
                               
                                                               const calculateResult=()=>{
                                                                  
                                                                const num1=Number(number);
                                                                const num2=Number(prevnumber);

                                                                switch(lastOperation.current){
                                                                          case Operator.add:
                                                                            setNumber(num1+num2);
                                                                   
                                                                   
                                                                     default:
                                                                       throw new Error ('undefined Operation');


                                                                            
                                                                        

                                                               }    
                                                              }                                  

                          
                        

    return {
    number,
    prevnumber,
   buildNumber,
   clear,
   Borrado,
   toggleSign,
   divideOperation,
   addOperation,
   multiplyOperation,
   lessOperation,
   calculateResult

}
}
