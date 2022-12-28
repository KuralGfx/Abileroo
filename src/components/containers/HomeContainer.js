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
    const [result, setResult] = useState();
    const navigate = useNavigate();

    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shops/`, fetcher)

    const onClickOption =(id) =>{
        navigate(`/shop/${id}`, { replace: true })
    }

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = data.filter((item) => item.name.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    const handleOrder = (value) => {
    
        let res = result;

        setSelected(value)

        switch(value){

            case "a-z": 
             res = data.sort((a,b) => (b.name < a.name) ? 1 : - 1);
             
            break;

             case "z-a":
             res = data.sort((a,b) => (b.name > a.name) ? 1 : -1);
             
             break;
             
             case "Casuale":
            res = data.sort(() => 0.5 - Math.random()).filter(n => n.name.includes(''));
            break;
            
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
    
            {data?.map((item) => (
                <BoxContainer key={item.id} title={item.name} onClick= {()=> onClickOption(item.id) }/>

            ))}

        </div>
    );
} 
