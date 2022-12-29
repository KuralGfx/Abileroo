/* eslint-disable default-case */
import {  useEffect, useState} from "react";
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
    const[selected, setSelected] = useState()
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
    
        setSelected(value);

        switch(value){
            
            case "a-z":
                axios.get(`${process.env.REACT_APP_BASE_URL}/shops/?ordering=name`)
                .then((res)=> setResult(res.data))
                
            break;

             case "z-a":
                axios.get(`${process.env.REACT_APP_BASE_URL}/shops/?ordering=-name`)
                .then((res)=> setResult(res.data))
                
             break;
             
             case "Casual":
                axios.get(`${process.env.REACT_APP_BASE_URL}/shops/`)
                .then((res)=> setResult(res.data))
            
            break;
                   
        }
     
    }

    useEffect(()=>{
        if(data!== null){
            setResult(data)
        }  
    },[data])

    return (

        <div>
            
            <NavBar/>
           
            <SearchInput onChange={handleSearch}/>
            
                <div className="container-drop">
                <NavDropDown   setSelected={handleOrder} selected={selected} />
                </div>
                {result?.map((item) => (
                <BoxContainer key={item.id} title={item.name} onClick= {()=> onClickOption(item.id) }/>))}
                
        </div>
    );
} 
