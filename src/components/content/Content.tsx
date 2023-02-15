import { FC, ReactElement } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { Status } from '../enums/Status';
import { useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../helpers/sendApiRequest';
import { ICardApi } from '../interfaces/ICardApi';

import FlashCard from './flashcard/FlashCard';
import Counter from './counter/Counter';

const Content: FC = (): ReactElement => {
  const {error, isLoading, data, refetch} = useQuery(
    ['cards'],
    async () => {
      return await sendApiRequest<ICardApi[]>(
        'http://localhost:3000/cards',
        'GET'
      );
    },
  );

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
          <>
            {/* Alert  */}
            {error && 
              <Alert severity='error'>
                There was an error fetching your cards
              </Alert>}
            {!error && !data?.length && 
              <Alert severity='warning'>
                You do not have any cards yet
              </Alert>}
            {isLoading ? <LinearProgress /> : (
              Array.isArray(data) && data.length>0 && 
              data.map((card) => (
                <FlashCard id={card.id} key={card.id}
                  title={card.title} date={new Date(card.date)}
                  body={card.code} difficulty={card.difficulty}
                  status={card.status} />
              ))
            )}
            {/* Problems */}
          </>
        </Grid>
      </Grid>
    
    </Grid>
  )
}

export default Content;