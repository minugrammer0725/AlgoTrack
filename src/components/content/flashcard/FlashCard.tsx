// Task => FlashCard
import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import { ICard } from '../../interfaces/ICard';

import { Difficulty } from '../../enums/Difficulty';
import { Status } from '../../enums/Status';

import { cardBorderColor } from '../../helpers/cardBorderColor';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import PropTypes from 'prop-types';

const FlashCard: FC<ICard> = ({
  id,
  title = 'Default Title',
  date = new Date(),
  body = 'Default Body',
  difficulty = Difficulty.easy,
  status = Status.todo,
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e)
}): ReactElement => {

  return (
    <Box display='flex' width='100%' justifyContent='flex-start' 
      flexDirection='column' mb={4} p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: cardBorderColor(difficulty)
      }}>

      {/* Header  */}
      <CardHeader title={title} date={date}/>
      {/* Code part  */}
      <CardBody body={body}/>
      {/* Footer  */}
      <CardFooter id={id} status={status} onClick={onClick} onStatusChange={onStatusChange}/>
    </Box>
  )
}

FlashCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  body: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  difficulty: PropTypes.string,
  status: PropTypes.string
}

export default FlashCard;