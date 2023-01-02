/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React from 'react';
import NavBar from "../component/NavBar";
import { Link, useParams } from "react-router-dom";
import useSWR  from "swr";
import axios from "axios";
import Heartbutton from '../component/HeartButton';


const Shop = () =>{
    
    const fetcher = url => axios.get(url).then(res => res.data)
    console.log()
    const {id}= useParams();
    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shop/${id}`, fetcher);
    return<>

  
        <NavBar/>
        
        
        <div className="card-container">
        
                    
            <Heartbutton/>
            
            <img className="image-card" src={"https://enrobax.pythonanywhere.com/"+ data?.image}></img>
            
            <div className="title-card"><h1> {data?.name}</h1></div>

            <div className="Via-card"><h3>{data?.address}</h3></div>

            <div className="description">
                <h3>
                {data?.description}.       
                </h3>     
            </div>
            <div className="title-products"><h1>Prodotti</h1></div>

            <div className='box-products'>
            {data?.products.map((products) => (<li>{products.name}</li>))}
            </div>
            <Link to="/" >
                <button type="button" className='back-button' >
                    Back
                    </button>
                    </Link>
            
            </div>
            

    </>
}

export default Shop;