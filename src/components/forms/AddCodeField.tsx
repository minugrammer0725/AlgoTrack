import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from '../interfaces/ITextField';
import PropTypes from 'prop-types';

const AddCodeField: FC<ITextField> = ({
  onChange = (e) => console.log(e),
  disabled = false
}): ReactElement => {
  
  return (
    <TextField id='code' name='code' label='Code' placeholder='Your Code Here' 
      variant='outlined' size='small' multiline rows={8} fullWidth 
      onChange={onChange}
      disabled={disabled} />
  )
}

AddCodeField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default AddCodeField;
