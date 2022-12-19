import { useState } from "react";
import { CardId } from "../array/CardId";
import BoxContainer from "./BoxContainer";
import '../containers/css/nav.css'
import SearchInput from "../InputSearch";
import NavDropDown from "../NavDropComponent";





export default function HomeContainer() {

   
    const[selected, setSelected] =useState("");
    const [result, setResult] = useState(CardId);


    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = CardId.filter((card) => card.title.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    

    return (
        <div>
            <h1 className="logo"><img src='https://cdn.discordapp.com/attachments/963899883201388594/1053401587206328410/ABILEROO.png' width={'40px'} />
                leroo
                <SearchInput onChange={handleSearch}/>
                <NavDropDown selected={selected} setSelected={setSelected}/>
                </h1>

            {result?.map((CardId) => (

                <BoxContainer title={CardId.title}  />
            ))}

        </div>
    );
} 
