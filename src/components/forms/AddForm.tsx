import { FC, ReactElement} from 'react';

import { Box, Typography, Stack } from '@mui/material';

import AddTitleField from './AddTitleField';
import AddCodeField from './AddCodeField';
import AddDueDateField from './AddDueDateField';

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

        {/* Status */}

        {/* Priority => Difficulty? */}
        {/* Category */}

      </Stack>

      
    </Box>
  )
}

export default AddForm;