import { FC, ReactElement } from 'react';

import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';

import { Status } from '../enums/Status';

import FlashCard from './flashcard/FlashCard';
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
          <Counter status={Status.todo}/>
          <Counter status={Status.attempted} />
          <Counter status={Status.solved} />
        </Grid>
        <Grid item display='flex' flexDirection='column'
          xs={10} md={8} >
          {/* Problems */}
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </Grid>
      </Grid>
    
    </Grid>
  )
}

export default Content;