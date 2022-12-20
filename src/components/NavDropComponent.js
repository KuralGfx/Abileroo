import React, { useState} from "react";
import './containers/css/navdrop.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function NavDropDown(onChange){
    const[isActive, setIsActive] = useState(false)
    
   
    
    return(
        <div className="dropdown" onClick={()=> 
            setIsActive(!isActive)}>
            <div className="dropdown-btn" >
                Ordina per:
                <ArrowDropDownIcon className="order"/>
                <span className="fas fa-caret-down"></span>
                </div>
                  {isActive && (
                     <div className="dropdown-content">
                        <button onChange={onChange}>Crescente</button>
                        <button onChange={onChange}>Decrescente</button>
                    </div>               
                  )} 
            </div>
    );
}
