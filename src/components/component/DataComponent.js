import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from "luxon";
import { useState } from 'react';
import "../styles/recap.css"
function DataPicker() {

    const [value, setValue] = useState(DateTime.now());
    
      const handleChange = (newValue) => {
        setValue(newValue);
        
      };

    return (
        
            <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DateTimePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      
    );
  }

  export default DataPicker

