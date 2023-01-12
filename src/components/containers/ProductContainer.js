import React, { useState }  from "react";
import "../styles/popup.css"
import { useEffect }  from "react";
import Basic from "../component/RepComponent";




function PopUp({onSubmit}){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{
            
            if(e.code==="Enter"){
                setPop(true)
            }
            else if(e.code==="ShiftLeft"){
                setPop(false)
            }
        })
    })
    return(
        <div>
            <button className="btn-view" onClick={handleClickOpen}>Completa l'acquisto</button>
            <div>
                {
                    popup?
                    <div className="c-iner">
                        <div className="popup">
                            <div className="popup-header">
                                <h1> </h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <Basic onSubmit={onSubmit}/>
                            <div>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;