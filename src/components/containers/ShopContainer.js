/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React from 'react';
import NavBar from "../NavBar";
import { CardId } from "../array/CardId";
import { Link, useParams } from "react-router-dom";
import useSWR  from "swr";
import axios from "axios";



const Shop = () =>{
    
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shops/`, fetcher)
    const {id}= useParams();
    let item = data.find(x => x.id === id)
    console.log(data)
    
    return<>
        <NavBar/>
        <div className="card-container">

            <img className="image-card" src={item.image}></img>
        
            <div className="title-card"><h1> {item.name}</h1></div>

            <div className="Via-card"><h3>{item.address}</h3></div>

            <div className="description">
                <h3>
                {item.description}.       
                </h3>     
            </div>
            <div className="title-products"><h1>Prodotti</h1></div>

            <div className='box-products'>
            {item.products.map((products) => (<li>{products.name}</li>))}
            </div>

            <Link to="/">
                <button type="button" className='back-button'>
                    Back
                    </button>
                    </Link>
            </div>

    </>
}

export default Shop;