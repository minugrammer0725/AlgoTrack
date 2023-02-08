import { FC, ReactElement} from 'react';

import { Box, Typography, Stack, TextField } from '@mui/material';

const AddForm: FC = (): ReactElement => {
  return (
    <Box display='flex' flexDirection={'column'} alignItems='flex-start'
      width={'100%'} px={4} my={6}>
      <Typography mb={2} component='h2' variant='h6'>Create new Flash Card!</Typography>
      
      <Stack width='100%' spacing={2}>
        {/* Problem Title  */}
        <TextField id='title' name='title' label='Title' placeholder='Problem Title'
          variant='outlined' size='small' fullWidth 
          onChange={(e) => console.log(e.target.value)}/>
        {/* Category  */}
        {/* Code  */}
        <TextField id='code' name='code' label='code' placeholder='Your Code Here' 
          variant='outlined' size='small' multiline rows={8} fullWidth 
          onChange={(e) => console.log(e.target.value)}/>
        {/* Due Date  */}
        {/* Status  */}
        {/* Priority  */}
      </Stack>

      
    </Box>
  )
}

export default AddForm;