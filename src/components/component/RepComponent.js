import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import "../styles/recap.css"
import DataPicker from './DataComponent';
import { DateTime } from 'luxon';

export default function Basic({onSubmit}){

  const initialFormState = {
    date_time_delivery: DateTime.now()
  };

  const onSubmit = async (values: any) => {
    console.log(values);
  };


  return(
    <Formik 
    initialValues={{client_email: '', address: '', date_time_delivery: '',}}
     onSubmit={onSubmit}>
      {({ values, setFieldValue }) =>(
         <Grid container spacing={0} className="c-rep">
         <Form >
           <Grid item xs={8} className='gf' >
             <h1 className='h4'>Dati Ordine</h1>
             {/* input adress, email */}
             <label htmlFor="Address" className='h4'>Via, N* Civico</label>
             <Field id="address" name="address" placeholder="ex. Via Milano, 14"
             className="label-btn" />
             </Grid>
             <Grid item xs={8} className='gf'>
               <label htmlFor="client_email" className='h4'>Email</label>
               <Field
               id="client_email"
               name="client_email"
               placeholder="example@gmail.com"
               type="email"
               className="label-btn"
               />
               </Grid>
 
               {/* data e orario */}
               <Grid item xs={8} className='gf'>
                 <DataPicker value={values.date_time_delivery} setFieldValue={setFieldValue} />
                 </Grid>
               {/* buy button */}
                 <Grid item xs={8} className='gf'>
                   <button type="submit" className='button-by'>Compra</button>
                   </Grid>
                   </Form>
                   </Grid>
                   </Formik>
      )
    
    
  )
  
}
    
   
    
                
              



