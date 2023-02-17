import { FC, ReactElement } from 'react';
import { FormControl, InputLabel, Chip, MenuItem, Select, SelectChangeEvent, Box, OutlinedInput } from '@mui/material';

import { IMultiSelectField } from '../interfaces/IMultiSelectField';
import PropTypes from 'prop-types';

const AddMultiSelectField: FC<IMultiSelectField> = ({
  values = [],
  label = 'Default Label',
  name = 'Default Name',
  items = [{value: '' , label: 'Add Options'}],
  disabled = false,
  onChange = (e: SelectChangeEvent<typeof values>) => console.log(e.target.value)
}): ReactElement => {


  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={name}>{label}</InputLabel>
      <Select labelId={name} id={`select-${name}`} multiple value={values}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        onChange={onChange} label={label} name={name} disabled={disabled} 
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
          )}
        >
        {items.map((item, idx) => (
          <MenuItem key={`${item.value}${idx}`} value={item.value}>{item.label}</MenuItem>))
        }
      </Select>
    </FormControl>
  )
};

AddMultiSelectField.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string.isRequired),
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

export default AddMultiSelectField;
