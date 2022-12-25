/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React from 'react';
import NavBar from "../NavBar";
import { CardId } from "../array/CardId";
import { Link, useParams } from "react-router-dom";



const Shop = () =>{
    const {id}= useParams();
    let card = CardId.find(x => x.id === id)

    return<>
        <NavBar/>
        <div className="card-container">

            <img className="image-card" src={card.description.href}></img>
        
            <div className="title-card"><h1> {card.title}</h1></div>

            <div className="Via-card"><h3>{card.description.address}</h3></div>

            <div className="description">
                <h3>
                {card.description.detail}.       
                </h3>     
            </div>
            <div className="title-products"><h1>Prodotti</h1></div>

            <div className='box-products'>
            Hambuerger
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