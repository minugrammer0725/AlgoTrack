import { FC, ReactElement } from 'react';

import { Avatar, Box, Typography } from '@mui/material';

const Profile: FC = (): ReactElement => {
  return (
    <Box display={'flex'} flexDirection={'column'}
      justifyContent={'center'} alignItems={'center'}>
      {/* Avatar */}
      <Avatar sx={{
        width: '96px',
        height: '96px',
        backgroundColor: 'primary.main',
        marginBottom: '16px'
      }}>
        <Typography variant='h4' color={'text.primary'}>MW</Typography>
      </Avatar>
      {/* Name */}
      <Typography variant='h6' color={'text.primary'}>Welcome, Minwoo</Typography>
      {/* Message */}
      <Typography variant='body1' color={'text.primary'}>This is your personal Leetcode Tracker!</Typography>
    </Box>

  )
}

export default Profile;