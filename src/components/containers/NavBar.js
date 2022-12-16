
import {  useState } from "react";
import { CardId } from "../../Array/CardId";



export default function NavBar() {
      const [query, setQuery] = useState("");
   return (
     <div>
       <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />
         {CardId.filter((asd) =>
           asd.title.toLowerCase().includes(query)
         ).map((CardId) => (
           <li className="listItem" key={CardId.id}>
             {CardId.title}
           </li>
         ))}
       
     </div>
   );
 }