
import {  useState } from "react";
import { CardId } from "../../Array/CardId";
import BoxContainer from "./BoxContainer";
import '../containers/css/nav.css'



export default function Home() {
      const [query, setQuery] = useState("");
   return (
     <div>
      <h1 className="logo"><img src="https://cdn.discordapp.com/attachments/963899883201388594/1053401587206328410/ABILEROO.png" width={'40px'}></img>
      leroo  
      <input 
         className="search"
         placeholder="ex.BurgerKing..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       /></h1>
       
         {CardId.filter((card) =>
           card.title.toLowerCase().includes(query)
         ).map((CardId) => (
             <BoxContainer title={CardId.title} />
         ))}
       
     </div>
   );
 } 

