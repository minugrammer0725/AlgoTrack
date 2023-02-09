import { FC, ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ISelectField } from '../interfaces/ISelectField';

import PropTypes  from 'prop-types';

const AddSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Default Label',
  name = 'Default Name',
  items = [{value: '' , label: 'Add Options'}],
  disabled = false,
  onChange = (e) => console.log(e.target.value)
}): ReactElement => {
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={name}>{label}</InputLabel>
      {/* Match InputLabel 'id' with Select 'labelId' */}
      <Select labelId={name} id={`select-${name}`} label={label} name={name}
         value={value} onChange={onChange} disabled={disabled}>
        {items.map((item, idx) => (
          <MenuItem key={`${item.value}${idx}`} value={item.value}>{item.label}</MenuItem>))
        }
      </Select>

    </FormControl>
  )
}

AddSelectField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  )

}

export default AddSelectField;