import React, { useEffect } from "react";
import '../styles/heartbutton.css'
import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import  _ from 'lodash'
export default function Heartbutton({data}){


  
  const [checked, setChecked] = useState(false);
  const onClick = (event) => {
    setChecked(event.target.checked);

    if(event.target.checked === true && data != null){
      const negozio = JSON.parse( localStorage.getItem('negozio') );

      if(negozio !==null ){
      
        const arrayPreferiti =_.concat([],negozio,data)
        localStorage.setItem('negozio', JSON.stringify(arrayPreferiti));
        console.log(arrayPreferiti)
        
      }
      else{
        localStorage.setItem('negozio', JSON.stringify([data]));
      }      
    }
    
    else if (event.target.checked === false){
        const negozio = JSON.parse( localStorage.getItem('negozio') );
        console.log(negozio[negozio.length-1].id);
        const negozio_agg = negozio.filter((data)=>{return negozio[negozio.length-1].id !== data.id });
        console.log(negozio_agg);
        localStorage.setItem('negozio', JSON.stringify(negozio_agg)); 
      }
  }

 
useEffect(()=>{
    let negozio = JSON.parse( localStorage.getItem('negozio'));

    const contr = ()=>{
     let cont = 0;
     if(data && negozio){
      console.log(data.id)
      for(let i = 0 ; i<negozio.length; i++){
        if (negozio[i].id === data.id){
          cont +=1;
        }
      }
      if (cont > 0){
        return true;
      }return false;
     }
    }
    
    setChecked(contr)
    
//verificare se all interno array negozi è presente data se e presente setcheck ture o false
    
    
  },[data]);
  
  
  
  return (
    <div className="love-button" >
      <HeartSwitch
        
        size="md"
        checked={checked}
        
        onChange={(event) => {
          
          onClick(event)
        
        }}
      />
    </div>
  );
}