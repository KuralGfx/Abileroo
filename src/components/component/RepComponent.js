import React from 'react';
import { Field, Formik } from 'formik';
import { DateTime } from 'luxon';
import { Grid } from '@mui/material';
import "../styles/recap.css"
import DataPicker from './DataComponent';

const Basic = ({onSubmit}) => (
  <div>
    <Formik
      initialValues={{ date_time_delivery: DateTime.now()}}
      onSubmit={onSubmit}
    >
      {({
        values,
        setFieldValue,
        handleSubmit,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={0} className="c-rep">
            <Grid item xs={8} className='gf' >
              <h1 className='h4'>Dati Ordine</h1>
             
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
  
                
                <Grid item xs={8} className='gf'>
                  <DataPicker value={values.date_time_delivery} setFieldValue={setFieldValue} />
                  </Grid>


                  <Grid item xs={8} className='gf'>
                    <button type="submit" className='button-by'>Compra</button>
                    </Grid>
                    </Grid>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;