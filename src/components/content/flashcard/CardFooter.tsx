import { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material'
import { ICardFooter } from '../../interfaces/ICardFooter';
import PropTypes from 'prop-types';
import { Status } from '../../enums/Status';

const CardFooter: FC<ICardFooter> = ({
  id,
  status,
  onStatusChange = (e) => console.log(e), 
  onClick = (e) => console.log(e)
}): ReactElement => {

  return (
    <Box display='flex' justifyContent='space-between'
      alignItems='center' mt={4}>
      <FormControlLabel label='In Progress'
        control={<Switch checked={status === Status.attempted} color='warning' onChange={(e) => onStatusChange(e, id)} />}/>
      <Button variant='contained' color='success' size='small'
        sx={{color: 'white'}} onClick={(e) => onClick(e, id)}>Mark Complete</Button>
    </Box>
    )
};

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func
}

export default CardFooter;