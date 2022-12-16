import React from "react";
import './css/boxcont.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function BoxContainer(props){
   
    const {title} = props;
    return(
            <button className="buttonshop">
            <h1 className="box">{title} </h1>
            <ArrowForwardIosIcon className="freccia"/>
            </button>
            
            
    )
}
export default BoxContainer


