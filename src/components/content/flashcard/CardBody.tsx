import { FC, ReactElement } from 'react';
import { Typography, Box } from '@mui/material';

import { ICardBody } from '../../interfaces/ICardBody';
import PropTypes from 'prop-types';

const CardBody: FC<ICardBody> = ({
  body = 'Some Code Here...'
}): ReactElement => {
  return (
    <Box>
      <Typography>
        {body}
      </Typography>
    </Box>
  )
}

CardBody.propTypes = {
  body: PropTypes.string
}

export default CardBody;