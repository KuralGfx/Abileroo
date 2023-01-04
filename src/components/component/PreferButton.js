import React, { Component } from 'react';
import '../styles/buttonpref.css';


function ButtonPrefer(props) {
  const {onClick} = props;
  let liked = false;
  const label = liked ? 'Nascondi Preferiti' : 'Mostra Preferiti'
      
     
      
      return (
       
      
          
            <button className="button-pref" onClick={onClick} >
              {props.boh}</button>
          
       
      
    );

  }


export default ButtonPrefer;
    
