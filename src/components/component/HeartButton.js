import React, { useEffect } from "react";
import '../styles/heartbutton.css'
import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import useSWR  from "swr";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Heartbutton(){

  const fetcher = url => axios.get(url).then(res => res.data)
    console.log()
    const {id}= useParams();
    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shop/${id}`, fetcher);


  const [checked, setChecked] = useState("");

  useEffect(() => {
    const checked = localStorage.getItem('conferma');

    //const remove = JSON.parse(localStorage.getItem('conferma'));

    localStorage.setItem("negozio", JSON.stringify(checked));
  },
  
  [checked]);


  console.log(checked)
  
  
  
  return (
    <div className="love-button" >
      <HeartSwitch
        
        size="md"
        checked={checked}
        
        onChange={(event) => {
          setChecked(event.target.checked);
        
        }}
      />
    </div>
  );
}