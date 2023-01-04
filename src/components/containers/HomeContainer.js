/* eslint-disable default-case */
import {  useEffect, useState} from "react";
import BoxContainer from "./BoxContainer";
import '../styles/nav.css'
import SearchInput from "../component/InputSearch";
import NavDropDown from "../component/NavDropComponent";
import NavBar from "../component/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR  from "swr";
import ButtonPrefer from "../component/PreferButton";



const fetcher = url => axios.get(url).then(res => res.data)

export default function HomeContainer() {
    const[selected, setSelected] = useState()
    const [result, setResult] = useState();
    const navigate = useNavigate();
    const [ viewPrefer, setViewPrefer] = useState(false);

   
    
    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shops/`, fetcher)
    

    const onClickPrefer = ()=>{
        setViewPrefer(!viewPrefer);
        
        //const filteredList = showFavoritesOnly ? results.filter(item => item.isFavorited) : results

    }

    const onClickOption =(id) =>{
        navigate(`/shop/${id}`, { replace: true })
        
    }

    const handleSearch = (e) => {

        const searchValue = e.target.value.toLowerCase()
        const searchResult = data.filter((item) => item.name.toLowerCase().includes(searchValue))
        
        setResult(searchResult)
       
    }

    const handleOrder = (option) => {
    
        setSelected(option.label);

        if(viewPrefer===false){
        axios.get(`${process.env.REACT_APP_BASE_URL}/shops/${option.value}`)
                .then((res)=> setResult(res.data));}

        else if(viewPrefer){
           
            if(option.label ==="a-z"){setResult(result.sort((a, b) => (a.name > b.name) ? 1 : -1))}

            else if(option.label ==="z-a"){setResult(result.sort((a, b) => (a.name < b.name) ? 1 : -1))}
            
            else if(option.label ==="Per nome"){setResult(JSON.parse( localStorage.getItem('negozio') ))}
        }
    }
     
    useEffect(()=>{
        if(data!== null){
            setResult(data)

        }  
    },[data])

    useEffect(
        ()=>{
            if (viewPrefer){
                const Shop = JSON.parse( localStorage.getItem('negozio') ) ;
                
                setResult(Shop)  
            } 
            else{

                setResult(data)
            }
        }
        ,[data, viewPrefer])

    return (

        <div>

            <ButtonPrefer onClick={()=>onClickPrefer()}  label={viewPrefer ? "Nascondi preferti" : "Mostra preferiti"}/>

            <div className="container-drop">
                <NavDropDown   handleOrder={handleOrder} selected={selected} />
                </div>

            <NavBar/>
            
            <SearchInput onChange={handleSearch}/>
            
                
             
                {result?.map((item) => (
                <BoxContainer key={item.id} title={item.name} onClick= {()=> onClickOption(item.id)} />
                )
             )
        }
                
        </div>
    );
} 
