import { Grid } from "@mui/material";
import {useState} from "react";
import "../styles/increment.css";
// passare prodotto e funzione slavare quantia onclik
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<100)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
    <div className="container">
    <button class="button" type="button" onClick={decNum}>-</button>
    <input type="text" class="input" value={num} onChange={handleChange}/>
    <button class="button" type="button" onClick={incNum}>+</button>
    </div>
   </>
  );
}

export default IncDecCounter;