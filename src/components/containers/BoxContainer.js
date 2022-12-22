import React from "react";
import '../styles/boxcont.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function BoxContainer(props){
    const {onClick} = props;
    const {title} = props;
    return(
            <button className="buttonshop" onClick={onClick}>
            <h1 className="box" >{title}</h1>
            <ArrowForwardIosIcon className="freccia"/>
            </button>
            
            
    )
}
export default BoxContainer


