import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import "../styles/recap.css"
function DataPicker({value, setFieldValue}) {

    
      const handleChange = (newValue) => {
        setFieldValue("date_time_delivery", newValue, true)
        
        console.log(value, "test")
      };

    return (
        
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateTimePicker
                value={value}
                onChange={handleChange}
                className='picker'
                renderInput={(params) => <TextField {...params} />}
              />
      </LocalizationProvider>
      
    );
  }

  export default DataPicker

