import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from '../interfaces/ITextField';
import PropTypes from 'prop-types';

const AddTitleField: FC<ITextField> = ({
    onChange = (e) => console.log(e.target.value), 
    disabled = false
  }): ReactElement => {
  return (
    <TextField id='title' name='title' label='Title' placeholder='Problem Title'
      variant='outlined' size='small' fullWidth 
      onChange={onChange} 
      disabled={disabled} />
  )
}

AddTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default AddTitleField;
