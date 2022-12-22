/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React from 'react';
import NavBar from "../NavBar";
import { CardId } from "../array/CardId";
import { useParams } from "react-router-dom";



const Shop = () =>{
    const {id}= useParams();
    console.log(id)
       
    const testid = 1

    let data = CardId[id]

    return<>
        
        <NavBar/>
        
        <div className="card-container">
            <img className="image-card" src={data.description.href}></img>
        
            <div className="title-card"><h1> {data.title}</h1></div>

            <div className="Via-card"><h3>{data.description.address}</h3></div>

            <div className="description">
                <h3>
                {data.description.detail}.       
                </h3>     
            </div>
            <div className="title-products"><h1>Prodotti</h1></div>

            <div className='box-products'>
            
            </div>
            
                
        </div>
        

    
    </>
}

export default Shop;