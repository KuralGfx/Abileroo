/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { CardId } from "../array/CardId";
import BoxContainer from "./BoxContainer";
import '../containers/css/nav.css'
import SearchInput from "../InputSearch";
import NavDropDown from "../NavDropComponent";

export default function HomeContainer() {

    const [result, setResult] = useState(CardId);
    

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = CardId.filter((card) => card.title.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

   

    const handleOrder = () =>{

        const ascOrder= CardId.title.sort
        const ascResult = CardId.sort((a, z) => (a.title > z.title) ? 1 : -1 (ascOrder))

        const decOrder= CardId.title.sort
        const decResult = CardId.sort((a, z) => (z.title > a.title) ? 1 : -1 (decOrder))

        setResult(ascResult)

        setResult(decResult)
    }

    return (
        <div>
            <h1 className="logo"><img src='https://cdn.discordapp.com/attachments/963899883201388594/1053401587206328410/ABILEROO.png' width={'40px'} />
                leroo
                <SearchInput onChange={handleSearch}/>
                <div className="container-drop">
                <NavDropDown onChange={handleOrder}/>
                </div>
                </h1>
            {result?.map((CardId) => (
                <BoxContainer title={CardId.title}  />
            ))}
        </div>
    );
} 
