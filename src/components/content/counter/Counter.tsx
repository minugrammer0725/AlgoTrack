import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography} from '@mui/material';
import { ICounter } from '../../interfaces/ICounter';

import { Status } from '../../enums/Status';
import { emitBorderColor } from '../../helpers/emitBorderColor';

import PropTypes from 'prop-types';

const Counter: FC<ICounter> = ({
  count = 0,
  status = Status.todo
}): ReactElement => {
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
          borderColor: `${emitBorderColor(status)}`
        }}>
          <Typography color='white' variant='h4'>{count}</Typography>
        </Avatar>
        <Typography color='white' fontWeight='bold' variant='h5' fontSize='20px' >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Typography>
    </Box>
  )
};

Counter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo, 
    Status.attempted, 
    Status.solved
  ])
}

export default Counter;
