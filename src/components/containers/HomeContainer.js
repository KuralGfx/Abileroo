/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import {  useState } from "react";
import { CardId } from "../array/CardId";
import BoxContainer from "./BoxContainer";
import '../containers/css/nav.css'
import SearchInput from "../InputSearch";
import NavDropDown from "../NavDropComponent";
import NavBar from "../NavBar";


export default function HomeContainer() {
    const[selected, setSelected] = useState("")
    const [result, setResult] = useState(CardId);
    

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = CardId.filter((card) => card.title.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    const handleOrder = (value) => {
    
        let res = result;
        setSelected(value)
        console.log(value)
        switch(value){
            case "a-z": 
             res = result.sort((a,b) => (b.title < a.title) ? 1 : - 1);
             console.log(res)
            break;

             case "z-a":
             res = result.sort((a,b) => (b.title > a.title) ? 1 : -1);
             console.log(res)
             break;
             
             case "Casuale":
            res = CardId.sort(() => 0.5 - Math.random()).filter(n => n.title.includes(''));
            break;
            default: res = CardId
            break;           
        }


        setResult(res);       
    }


    return (
        <div>
            <NavBar/>
           
            <SearchInput onChange={handleSearch}/>
            
                <div className="container-drop">
                <NavDropDown setSelected={handleOrder} selected={selected} />
                </div>
            
                
            {result?.map((CardId) => (
                <BoxContainer title={CardId.title}/>
            ))}
        </div>
    );
} 
