import { FC, ReactElement } from 'react';
 
import { Grid } from '@mui/material';

import Profile from '../profile/Profile';
import AddForm from '../forms/AddForm';

const Sidebar: FC = (): ReactElement => {

  return (
    <Grid item md={4} sx={{
      height: '100vh',
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      backgroundColor: '#722620',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Profile name='Minwoo'/>
      <AddForm />
    </Grid>
  )
}

export default Sidebar;