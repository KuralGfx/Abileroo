import React, { useState }  from "react";
import "../styles/popup.css"
import { useEffect }  from "react";

function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{
            console.log(e.code,"key")
            if(e.code=="Enter"){
                setPop(true)
            }
            else if(e.code=="ShiftLeft"){
                setPop(false)
            }
        })
    })
    return(
        <div>
            <button className="btn-view" onClick={handleClickOpen}>Compra</button>
            <div>
                {
                    popup?
                    <div className="c-iner">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Riepilogo</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>



                            



                            <div>
                            <p></p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;