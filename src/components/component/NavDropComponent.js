import React, { useState} from "react";
import '../styles/navdrop.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function NavDropDown({handleOrder, selected}){
    const[isActive, setIsActive] = useState(false)
    const options =[
        {label: 'a-z', value:'?ordering=name' } ,
         {label: 'z-a', value:'?ordering=-name' } ,
          {label: 'Per nome', value:'' }] 
    
    return(
        <div className="dropdown" onClick={(e)=> 
            setIsActive(!isActive)}>
            <div className="dropdown-btn" >
                Ordine : 
                {selected}
                <ArrowDropDownIcon className="order"/>
                <span className="fas fa-caret-down"></span>
                </div>
                  {isActive && (
                     <div className="dropdown-content">
                        {options.map((option) =>(
                            <div onClick={() => {
                                handleOrder(option)
                                setIsActive(false)
                            
                            }}
                        className="dropdown-item" 
                        >
                            {option.label}
                        </div>
                        
                        ))}
                 </div>
                  )} 
            </div>
    );
}
