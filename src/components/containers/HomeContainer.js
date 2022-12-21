/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import {  useState } from "react";
import { CardId } from "../array/CardId";
import BoxContainer from "./BoxContainer";
import '../containers/css/nav.css'
import SearchInput from "../InputSearch";
import NavDropDown from "../NavDropComponent";


export default function HomeContainer() {
    const[selected] = useState("")
    const [result, setResult] = useState(CardId);
    

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = CardId.filter((card) => card.title.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    const handleOrder = (value) => {
    
        let res = result;
        
        switch(value){
            case "a-z": 
             res = result.sort((a,b) => (b.title > a.title) ? 1 : - 1);
            break;

             case "z-a":
             res = result.sort((a,b) => (b.title < a.title) ? 1 : -1);
             break;
             
             case "Casuale":
            res = CardId.sort(() => 0.5 - Math.random()).filter(n => n.title.includes(''));
            break;           
        }


        setResult(res);       
    }

    /*useEffect(()=> {
        handleOrder()
        },[selected])*/

    return (
        <div>
            <h1 className="logo"><img src='https://cdn.discordapp.com/attachments/963899883201388594/1053401587206328410/ABILEROO.png' width={'40px'} />
                leroo
                <SearchInput onChange={handleSearch}/>
                <div className="container-drop">
                <NavDropDown setSelected={handleOrder} selected={selected} />
                </div>
                </h1>
                
            {result?.map((CardId) => (
                <BoxContainer title={CardId.title}/>
            ))}
        </div>
    );
} 
