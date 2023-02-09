import { FC, ReactElement } from 'react';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { ISelectField } from '../interfaces/ISelectField';

const AddSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Default Label',
  name = 'Default Name',
  items = [{value: '' , label: 'Add Options'}],
  disabled = false,
  onChange = (e) => console.log(e)
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

export default AddSelectField;