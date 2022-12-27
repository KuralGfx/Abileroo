import {  useState} from "react";
import { CardId } from "../array/CardId";
import BoxContainer from "./BoxContainer";
import '../styles/nav.css'
import SearchInput from "../InputSearch";
import NavDropDown from "../NavDropComponent";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR  from "swr";


const fetcher = url => axios.get(url).then(res => res.data)


export default function HomeContainer() {
    const[selected, setSelected] = useState("")
    const [result, setResult] = useState(CardId);
    const navigate = useNavigate();

    const { data, error, isLoading } = useSWR( `${process.env.REACT_APP_BASE_URL}/shops/`, fetcher)
    console.log(data, error,  isLoading)


    const onClickOption =(id) =>{
        navigate(`/shop/${id}`, { replace: true })
    }

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = CardId.filter((card) => card.title.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    const handleOrder = (value) => {
    
        let res = result;

        setSelected(value)

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
                <BoxContainer key={CardId.id} title={CardId.title} onClick= {()=> onClickOption(CardId.id) }/>

            ))}

        </div>
    );
} 
