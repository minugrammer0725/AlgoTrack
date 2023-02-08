import { FC, ReactElement} from 'react';

import { Box, Typography } from '@mui/material';

const AddForm: FC = (): ReactElement => {
  return (
    <Box display='flex' flexDirection={'column'} alignItems='flex-start'
      width={'100%'} px={4} my={6}>
      <Typography mb={2} component='h2' variant='h6'>Create new Flash Card!</Typography>
      
      <form action="">

      {/* Problem Title  */}
      {/* Code  */}
      {/* Category  */}
      {/* Due Date  */}
      {/* Status  */}
      {/* Priority  */}
      
      </form>
    </Box>
  )
}

export default AddForm;