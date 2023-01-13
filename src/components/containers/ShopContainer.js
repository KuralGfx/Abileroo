/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React, { useState } from 'react';
import NavBar from "../component/NavBar";
import { Link, useParams } from "react-router-dom";
import useSWR  from "swr";
import axios from "axios";
import Heartbutton from '../component/HeartButton';
import { Grid } from '@mui/material';
import IncDecCounter from '../component/IncDecCounter';
import PopUp from './ProductContainer';



const Shop = () =>{
    
    const fetcher = url => axios.get(url).then(res => res.data)
    const {id}= useParams();
    const orderPost = (values) => axios.post(`${process.env.REACT_APP_BASE_URL}/order-create/`, (values));

    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shop/${id}`, fetcher);
    const[list, setlist] = useState([]);
    const onSubmit = (values) =>{
        let data = values;
        data.date_time_delivery = values.date_time_delivery.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
        data.details = list;
        data.shop = id;
        console.log(data)
        orderPost(data)
    } ;
    
    
    const handleCounter = (quantity, product) =>{
        const array = list ;
        let num = 0; 
        for(let i = 0; i < array.length; i++){
            if(array[i].product === product.id){
                num = num+1
            }
        }
        if(num === 0){
            array.push({
                "product": product.id,
                "amount": quantity
            }
            )
        }
        else{
            for(let i = 0; i < array.length; i++){
                if(array[i].product === product.id){
                    array[i].amount = quantity
                }
            }
        }  
        console.log(num, 'dp')
        setlist(array);
        console.log(array)
    };
   

    return<>

        <div className="card-container">
        <Grid item xs={8}>
        <NavBar key={NavBar}/>
        </Grid>
            <Grid item xs={8}>
            <Heartbutton data={data}/>
            </Grid>
            <Grid item xs={8}>
            <img className="image-card" src={"https://enrobax.pythonanywhere.com/"+ data?.image}></img>
                </Grid>
            <Grid item xs={8}>
            <div className="title-card"><h1> {data?.name}</h1></div>
                </Grid>
            <Grid item xs={8}>
            <div className="Via-card"><h3>{data?.address}</h3></div>
                </Grid>
            <Grid item xs={8}>
            <div className="description">
                <h3>
                {data?.description}.       
                </h3>     
            </div>
                </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <div className="title-products"><h1>Prodotti</h1></div>
                </Grid>
                <Grid  className="home_btn" item xs={4}>
                <Link to="/" >
                <button type="button" className='back-button' >
                    Home
                    </button>
                    </Link>
                </Grid>
                
                </Grid>
                <Grid item xs={8}>
                <div className='box-products'>
                {data?.products.map((product, index) => (<li key={index}>{product.name}<IncDecCounter handleCounter={handleCounter} item={product}/></li>))}
                </div>
                </Grid>
                <Grid className='btn-container'>
                <PopUp onSubmit={onSubmit}/>
                    </Grid>
                   
                
               
            
            </div>
            
    </>
}

export default Shop;