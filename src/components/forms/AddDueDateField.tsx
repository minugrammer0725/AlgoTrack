import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from '../interfaces/IDateField';
import PropTypes from 'prop-types';

const AddDueDateField: FC<IDateField> = ({
  disabled = false,
  value = null, // or new Date()
  onChange = (date)=>console.log(date)
}): ReactElement => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker renderInput={(params) => (<TextField {...params}/>)}
        value={value} label='Due Date' inputFormat='mm/dd/yyyy'
        onChange={onChange} disabled={disabled} />
    </LocalizationProvider>  )
}

AddDueDateField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),  
  onChange: PropTypes.func
}


export default AddDueDateField;