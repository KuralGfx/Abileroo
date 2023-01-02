import React from "react";
import '../styles/heartbutton.css'
import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

export default function Heartbutton(){
    const [checked, setChecked] = useState();
  return (
    <div className="love-button">
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