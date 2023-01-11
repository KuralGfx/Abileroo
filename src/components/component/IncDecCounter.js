import React from "react";
import {useState} from "react";
import "../styles/increment.css";

function IncDecCounter({item, handleCounter}){


  const [num, setNum]= useState(0);
  const incNum =()=>{
    if(num<100)
    {
    setNum(Number(num)+1);
    handleCounter(Number(num)+1, item)
    }
  };
  const decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
      handleCounter(num - 1, item)
     }
  }
//  const handleChange = (e)=>{
//    setNum(e.target.value);
//    handleCounter(e.target.value, product)
//    console.log('handleChange')
//   }

   return(
    <>
    <div className="container">
    <button className="button" type="button" onClick={decNum}>-</button>
    <input type="text" class="input" value={num} />
    <button className="button" type="button" onClick={incNum}>+</button>
    </div>
   </>
  );
}

export default IncDecCounter;