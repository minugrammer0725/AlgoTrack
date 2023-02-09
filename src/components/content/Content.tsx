import { FC, ReactElement } from 'react';

import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';

import Counter from './counter/Counter';

const Content: FC = (): ReactElement => {

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h3>{`Your progress as of ${format(new Date(), 'PPPP')}`}</h3>
      </Box>
      
      <Grid container display='flex' justifyContent='center'>
        <Grid item display='flex' justifyContent='space-around'
          alignItems='center' md={10} xs={12} mb={8} >
          {/* Counters */}
          <Counter />
          <Counter />
          <Counter />
        </Grid>
        <Grid item display='flex' flexDirection='column'
          xs={10} md={8} >
          {/* Problems */}
          <Box>Problem comes here</Box>
          <Box>Problem comes here</Box>
          <Box>Problem comes here</Box>
          <Box>Problem comes here</Box>
        </Grid>
      </Grid>
    
    </Grid>
  )
}

export default Content;