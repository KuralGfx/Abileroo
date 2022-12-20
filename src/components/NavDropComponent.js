import React, { useState} from "react";
import './containers/css/navdrop.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function NavDropDown({setSelected}){
    const[isActive, setIsActive] = useState(false)
    const options =['a-z' , 'z-a' , 'Casuale'] 
    
    return(
        <div className="dropdown" onClick={(e)=> 
            setIsActive(!isActive)}>
            <div className="dropdown-btn" >
                Ordina per:
                <ArrowDropDownIcon className="order"/>
                <span className="fas fa-caret-down"></span>
                </div>
                  {isActive && (
                     <div className="dropdown-content">
                        {options.map((option) =>(
                            <div onClick={e => {
                                setSelected(option)
                                setIsActive(false)
                            
                            }}
                        className="dropdown-item" 
                        >
                            {option}
                        </div>
                        
                        ))}
                 </div>
                  )} 
            </div>
    );
}
