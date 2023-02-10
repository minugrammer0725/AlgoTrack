import { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material'
import { ICardFooter } from '../../interfaces/ICardFooter';
import PropTypes from 'prop-types';

const CardFooter: FC<ICardFooter> = ({
  onStatusChange = (e) => console.log(e), 
  onClick = (e) => console.log(e)
}): ReactElement => {

  return (
    <Box display='flex' justifyContent='space-between'
      alignItems='center' mt={4}>
      <FormControlLabel label='In Progress'
        control={<Switch color='warning' onChange={(e) => onStatusChange(e)} />}/>
      <Button variant='contained' color='success' size='small'
        sx={{color: 'white'}} onClick={(e) => onClick(e)}>Mark Complete</Button>
    </Box>
    )
};

CardFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func
}

export default CardFooter;