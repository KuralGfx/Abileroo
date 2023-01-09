/* eslint-disable jsx-a11y/alt-text */
import '../styles/cardbox.css'
import React from 'react';
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
    const { data } = useSWR( `${process.env.REACT_APP_BASE_URL}/shop/${id}`, fetcher);
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
                {data?.products.map((products, index) => (<li key={index}>{products.name}<IncDecCounter/></li>))}
                </div>
                </Grid>
                
                <Grid className='btn-container'>
                <PopUp/>
                    </Grid>
                   
                
               
            
            </div>
            
    </>
}

export default Shop;