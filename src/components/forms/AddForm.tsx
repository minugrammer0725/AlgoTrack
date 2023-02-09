import { FC, ReactElement} from 'react';

import { Box, Typography, Stack } from '@mui/material';

import AddTitleField from './AddTitleField';
import AddCodeField from './AddCodeField';
import AddDueDateField from './AddDueDateField';
import AddSelectField from './AddSelectField';
import AddMultiSelectField from './AddMultiSelectField';

import { Difficulty } from '../enums/Difficulty';
import { Status } from '../enums/Status';
import { Category } from '../enums/Category';

const AddForm: FC = (): ReactElement => {
  // const [title, setTitle] = useState<string>('');
  // const [code, setCode] = useState<string>('');
  return (
    <Box display='flex' flexDirection={'column'} alignItems='flex-start'
      width={'100%'} px={4} my={6}>
      <Typography mb={2} component='h2' variant='h6'>Create new Flash Card!</Typography>
      
      <Stack width='100%' spacing={2}>
        {/* Problem Title  */}
        <AddTitleField />
        
        {/* Code  */}
        <AddCodeField />

        {/* Due Date  */}
        <AddDueDateField />

        {/* Category */}
        {/* TODO: Chip => Expand the category select to allow multiple selection */}
        <AddMultiSelectField label='Category' name='category'
          items={Object.values(Category).map((category) => (
            {value: category, label: category}
          ))} />

        <Stack direction='row' spacing={2} width='100%'>
          {/* Status */}
          <AddSelectField label='Status' name='status' 
            items={Object.values(Status).map((status) => (
              {value: status, label: status}
            ))} />
          {/* Priority => Difficulty? */}
          <AddSelectField label='Difficulty' name='difficulty'
            items={Object.values(Difficulty).map((diff) => (
              {value: diff, label: diff}
            ))} />
        </Stack>
        

      </Stack>

      
    </Box>
  )
}

export default AddForm;