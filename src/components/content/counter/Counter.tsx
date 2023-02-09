import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography} from '@mui/material';

const Counter: FC = (): ReactElement => {
  return (
    <Box display='flex' flexDirection='column'
      alignItems='center' justifyContent='center' >
        <Avatar 
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: 'warning.light'
        }}>
          <Typography color='white' variant='h4'>10</Typography>
        </Avatar>
        <Typography color='white' fontWeight='bold'
          variant='h5' fontSize='20px' >Todo</Typography>
    </Box>
  )
};

export default Counter;
