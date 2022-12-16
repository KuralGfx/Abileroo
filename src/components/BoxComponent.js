import React from "react";
import { CardId } from "../Array/CardId";
import BoxContainer from "./containers/BoxContainer";

export default function BoxComponent(){
    
    return(
        <div>
            {CardId.map((card)=> <BoxContainer title={card.title} />)}
            
        </div>
    )
}

