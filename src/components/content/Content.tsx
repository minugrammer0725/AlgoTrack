import React, { FC, ReactElement } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { Status } from '../enums/Status';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../helpers/sendApiRequest';
import { ICardApi } from '../interfaces/ICardApi';
import { IUpdateCard } from '../interfaces/IUpdateCard';
import { countCards } from '../helpers/countCards';

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

  const updateCardMutation = useMutation((data: IUpdateCard) => sendApiRequest(
    'http://localhost:3000/cards',
    'PUT',
    data
  ));

  function onStatusChange(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
    ) {
      updateCardMutation.mutate({
        id,
        status: e.target.checked ? Status.attempted : Status.todo,
      })
    }

  function onCompleteBtnClick(
    e: React.MouseEvent<HTMLButtonElement> | 
    React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    updateCardMutation.mutate({
      id,
      status: Status.solved
    })
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h3>{`Your progress as of ${format(new Date(), 'PPPP')}`}</h3>
      </Box>
      
      <Grid container display='flex' justifyContent='center'>
        <Grid item display='flex' justifyContent='space-around'
          alignItems='center' md={10} xs={12} mb={8} >
          {/* Counters */}
          <Counter count={data?countCards(data, Status.todo):0} status={Status.todo}/>
          <Counter count={data?countCards(data, Status.attempted):0} status={Status.attempted} />
          <Counter count={data?countCards(data, Status.solved):0} status={Status.solved} />
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
                // TODO: instead of checking the status here and render conditionally, 
                // create a filter component that takes in status/difficulty/maybe even categories!
                <FlashCard id={card.id} key={card.id}
                  title={card.title} date={new Date(card.date)}
                  body={card.code} difficulty={card.difficulty}
                  status={card.status} 
                  onStatusChange={onStatusChange} onClick={onCompleteBtnClick}/>
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