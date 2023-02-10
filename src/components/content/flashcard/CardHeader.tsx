import { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';

import { ICardHeader } from '../../interfaces/ICardHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CardHeader: FC<ICardHeader> = ({
  title = 'Default Title',
  date = new Date()
}): ReactElement => {
  return (
    <Box display='flex' width='100%' 
      justifyContent='space-between' mb={4}>
      <Box>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <Box>
        <Chip variant='outlined' label={format(date, 'PPP')} />
      </Box>
    </Box>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date)
}

export default CardHeader;