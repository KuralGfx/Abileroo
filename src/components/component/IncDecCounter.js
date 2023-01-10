
import {useState} from "react";
import "../styles/increment.css";
// passare prodotto e funzione slavare quantia onclik

// const obj = {amount: e.target.value, product: product.id}

// if(viewPrefer===false){
//   axios.get(`${process.env.REACT_APP_BASE_URL}/shops/${e.target.value, product}`)
//   .then((res)=> setResult(res.data));}


function IncDecCounter({item, handleCounter}){

  // const obj = {
  //   amount: 'e.target.value',
  //   product: 'product.id',
  // }

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