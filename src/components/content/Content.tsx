import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

const Content: FC = (): ReactElement => {

  return (
    <Grid item md={8} px={4}>
      <h2> Content </h2>
    </Grid>
  )
}

export default Content;