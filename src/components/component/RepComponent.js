import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import "../styles/recap.css"
import DataPicker from './DataComponent';

const Basic = ({onSubmit}) => (

  <div>
   
    <Formik
    
      initialValues={{
       
      }}
      onSubmit={(values) => {onSubmit(values)}}
    >
      
     <Grid container spacing={0} className="c-rep">
     {/* <Grid item xs={4} className='gf' id="list_product">
     <h1 className='cf-rep'>Prodotti</h1>
    
    </Grid> */}
        <Form >

      <Grid item xs={8} className='gf' >
      <h1 className='h4'>Dati Ordine</h1>
      <label htmlFor="Address" className='h4'>Via, N* Civico</label>
      <Field id="Address" name="Address" placeholder="ex. Via Milano, 14" className="label-btn" />
    </Grid>

    <Grid item xs={8} className='gf'>
    <label htmlFor="email" className='h4'>Email</label>
      <Field
        id="email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        className="label-btn"
      />
    </Grid>
    <Grid item xs={8} className='gf'>
    <DataPicker />
    </Grid>
    
    <Grid item xs={8} className='gf'>
    <button type="submit" className='button-by'>Compra</button>
    </Grid>
    </Form>
       
      
      </Grid>
    </Formik>
    
  </div>
);
export default Basic;

