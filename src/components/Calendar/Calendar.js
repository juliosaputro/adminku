import * as React from 'react';
import './Calendar.css'
// import {KeyboardDatePicker} from '@material-ui/pickers'
import { TextField, Box } from '@material-ui/core';
import dayjs from 'dayjs'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import {isToday} from 'date-fns/';

export default function Calendar() {

    const [value, setValue] = React.useState(dayjs(isToday));
  return (
    <Box style={{backgroundColor:'red'}}>   
      <LocalizationProvider component={Box} style={{backgroundColor:'red'}} dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
      className='Calendar'
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        orientation='landscape'
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{width:10}}/>}
      />
    </LocalizationProvider>
    </Box>
  )
}
