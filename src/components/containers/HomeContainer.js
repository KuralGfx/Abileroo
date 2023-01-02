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
import LikeButton from "../component/PreferButton";


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
    
        setSelected(selected);
       
        axios.get(`${process.env.REACT_APP_BASE_URL}/shops/${value}`)
                .then((res)=> setResult(res.data));
    }
     
    useEffect(()=>{
        if(data!== null){
            setResult(data)
        }  
    },[data])

    return (

        <div>
            <LikeButton/>
            <NavBar/>
            
            <SearchInput onChange={handleSearch}/>
            
                <div className="container-drop">
                <NavDropDown handleOrder={handleOrder} selected={selected} />
                
                </div>
             
                {result?.map((item) => (
                <BoxContainer key={item.id} title={item.name} onClick= {()=> onClickOption(item.id) }/>))}
                
        </div>
    );
} 
